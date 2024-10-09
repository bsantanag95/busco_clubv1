<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Position;
use App\Models\Season;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PlayerController extends Controller
{
    public function index()
    {
        $players = Player::with(['nationalities', 'positions', 'lastClub.nationality'])
            ->where('status', Player::BUSCANDO)
            ->get();

        $positions = Position::all()->toArray();
        $clubs = app(ClubController::class)->getClubs();
        $nationalities = app(NationalityController::class)->getNationalities();

        return Inertia::render('Players/Index', ['players' => $players, 'positions' => $positions, 'nationalities' => $nationalities, 'clubs' => $clubs]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'surname' => 'required|string|max:191',
            'forename' => 'required|string|max:191',
            'date_of_birth' => 'required|date',
            'place_of_birth' => 'required|string|max:191',
            'gender' => 'required|string|max:191',
            'height' => 'nullable|integer|digits:3',
            'foot' => 'required|string|max:25',
            'attribute' => 'nullable|string|max:191',
            'description' => 'nullable|string|max:191',
            'x' => 'max:191',
            'instagram' => 'max:191',
            'email' => 'nullable|lowercase|email|max:255|unique:' . Player::class,
            'profile_photo' => 'nullable|file|image|max:2048',
            'positions' => 'required|array|min:1',
            'nationalities' => 'required|array|min:1',
            'last_club_id' => 'nullable'
        ]);

        if ($request->hasFile('profile_photo')) {
            $filePath = $request->file('profile_photo')->store('players', 'public');
            $validated['profile_photo'] = $filePath;
        }
        $player = new Player($validated);
        $player->generateName();
        $player->generateSlug();
        $player->status = Player::BUSCANDO;
        $player->relevance = 1;

        $player->save();

        if (isset($validated['positions'])) {
            $player->positions()->attach($validated['positions']);
        }
        if (isset($validated['nationalities'])) {
            $player->nationalities()->attach($validated['nationalities']);
        }
        return redirect('/');
    }

    public function show($id, $slug)
    {
        $player = Player::with([
            'images',
            'lastClub.nationality',
            'nationalities',
            'nationals.nationality',
            'positions',
            'report',
            'statistics.club',
            'statistics.season',
            'trophies.club',
            'trophies.season',
            'trophies.national_team',
            'trophies.nationality',
            'transfers.club',
            'videos',
        ])
            ->findOrFail($id);

        if ($player->slug !== $slug) {
            throw new ModelNotFoundException();
        }

        $nationalities = app(NationalityController::class)->getNationalities();
        $positions = Position::all()->toArray();
        $clubs = app(ClubController::class)->getClubs();
        $randomPlayers = Player::all()->where('status', Player::BUSCANDO)->random(6);
        $seasons = Season::all()->toArray();

        return Inertia::render('Players/Profile', ['player' => $player, 'randomPlayers' => $randomPlayers, 'nationalities' => $nationalities, 'positions' => $positions, 'clubs' => $clubs, 'seasons' => $seasons]);
    }

    public function edit(Player $player)
    {
        return Inertia::render(('Players/Edit/EditIndex'));
    }

    public function update(Request $request, Player $player)
    {
        $validated = $request->validate([
            'name' => $request->has('name') ? 'required|string|max:191' : '',
            'surname' => $request->has('surname') ? 'required|string|max:191' : '',
            'forename' => $request->has('forename') ? 'required|string|max:191' : '',
            'date_of_birth' => $request->has('date_of_birth') ? 'required|date' : '',
            'place_of_birth' => $request->has('place_of_birth') ? 'required|string|max:191' : '',
            'gender' => $request->has('gender') ? 'required|string|max:191' : '',
            'height' => 'nullable|integer|digits:3',
            'foot' => $request->has('foot') ? 'required|string|max:25' : '',
            'x' => 'nullable|max:191',
            'instagram' => 'nullable|max:191',
            'profile_photo' => $request->hasFile('profile_photo') ? 'nullable|file|image|max:2048' : '',
            'positions' => $request->has('positions') ? 'required|array|min:1' : '',
            'nationalities' => $request->has('nationalities') ? 'required|array|min:1' : '',
            'last_club_id' => 'nullable',
            'attribute' => 'nullable|string|max:191',
            'description' => 'nullable|string|max:191',
            'status' => 'nullable'
        ]);

        if ($request->hasFile('profile_photo')) {
            if ($player->profile_photo) {
                Storage::disk('public')->delete($player->profile_photo);
            }
            $filePath = $request->file('profile_photo')->store('players', 'public');
            $validated['profile_photo'] = $filePath;
        } else {
            $validated['profile_photo'] = $player->profile_photo;
        }

        $oldSlug = $player->slug;

        if ($request->has('surname') || $request->has('forename')) {
            $player->surname = $validated['surname'] ?? $player->surname;
            $player->forename = $validated['forename'] ?? $player->forename;

            $validated['name'] = $player->generateName();
            $validated['slug'] = $player->generateSlug();
        }

        $player->update($validated);

        if ($request->has('positions')) {
            $player->positions()->sync($validated['positions']);
        }

        if ($request->has('nationalities')) {
            $player->nationalities()->sync($validated['nationalities']);
        }

        $referer = $request->headers->get('referer');

        if ($oldSlug !== $player->slug) {
            if (strpos($referer, $oldSlug) !== false) {
                return redirect()->route('player.show', ['id' => $player->id, 'slug' => $player->slug])
                    ->with('success', 'Jugador actualizado exitosamente.');
            } else {
                return redirect()->back()->with('success', 'Jugador actualizado exitosamente.');
            }
        }
    }

    public function destroy(Player $player)
    {
        if ($player->profile_photo) {
            Storage::disk('public')->delete($player->profile_photo);
        }

        $player->delete();

        return redirect('/')->with('success', 'Jugador eliminado correctamente.');
    }

    public function changeStatus(Request $request, Player $player)
    {
        $validated = $request->validate([
            'status' => 'required|string|max:191',
        ]);

        $player->status = $validated['status'];
        $player->inactive_date = Carbon::now();
        $player->save();

        return redirect()->back()->with('success', 'El estado del jugador ha sido actualizado.');
    }
}
