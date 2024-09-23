<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $nationalities = app(NationalityController::class)->getNationalities();
        $clubs = app(ClubController::class)->getClubs();

        return Inertia::render('Clubs/CreateClub', ['nationalities' => $nationalities, 'clubs' => $clubs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:191',
                Rule::unique('clubs')->where(function ($query) use ($request) {
                    return $query->where('name', $request->name)
                        ->where('nationality_id', $request->nationality_id);
                }),
            ],
            'logo' => 'required|file|image|max:2048',
            'nationality_id' => 'required|exists:nationalities,id'
        ]);
        if ($request->hasFile('logo')) {
            $filePath = $request->file('logo')->store('clubs', 'public');
            $validated['logo'] = $filePath;
        }
        Club::create($validated);

        return redirect('/clubs')->with('success', 'Club creado exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $clubs = Club::with('nationality')->get();
        $nationalities = app(NationalityController::class)->getNationalities();
        return Inertia::render('Clubs/ManageClubs', ['clubs' => $clubs, 'nationalities' => $nationalities]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Club $club)
    {
        return Inertia::render(('Clubs/EditClub'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Club $club)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:191',
                Rule::unique('clubs')->ignore($club->id)->where(function ($query) use ($request) {
                    return $query->where('name', $request->name)
                        ->where('nationality_id', $request->nationality_id);
                }),
            ],
            'logo' => 'nullable|file|image|max:2048',
            'nationality_id' => 'exists:nationalities,id',
        ]);

        if ($request->hasFile('logo')) {
            if ($club->logo) {
                Storage::disk('public')->delete($club->logo);
            }
            $filePath = $request->file('logo')->store('clubs', 'public');
            $validated['logo'] = $filePath;
        } else {
            $validated['logo'] = $club->logo;
        }

        $club->update($validated);

        return redirect('/clubs')->with('success', 'Club actualizado exitosamente');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Club $club)
    {
        if ($club->logo) {
            Storage::disk('public')->delete($club->logo);
        }

        $club->delete();

        return redirect('/clubs')->with('success', 'Club eliminado correctamente.');
    }
    public function getClubs()
    {
        $clubs = Club::with('nationality')
            ->orderBy('name', 'asc')
            ->get();

        return $clubs;
    }
}
