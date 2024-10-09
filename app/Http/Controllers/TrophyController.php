<?php

namespace App\Http\Controllers;

use App\Models\Trophy;
use Illuminate\Http\Request;

class TrophyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $request->validate([
            'name' => 'required|string|max:191',
            'level' => 'required|string|max:191',
            'category' => 'nullable|string|max:191',
            'nationality_id' => 'nullable|exists:nationalities,id',
            'season_id' => 'nullable|exists:seasons,id',
            'club_id' => 'nullable|exists:clubs,id',
            'organizer' => 'nullable|string|max:191',
            'year' => 'nullable|integer|min:1990|max:' . date('Y'),
            'national_team_id' => 'nullable|exists:nationalities,id',
        ]);

        Trophy::create([
            'player_id' => $request->player_id,
            'name' => $request->name,
            'level' => $request->level,
            'category' => $request->category,
            'nationality_id' => $request->nationality_id,
            'organizer' => $request->organizer,
            'season_id' => $request->season_id,
            'club_id' => $request->club_id,
            'year' => $request->year,
            'national_team_id' => $request->national_team_id
        ]);

        return redirect()->back()->with('success', 'Palmarés creado exitosamente');
    }


    /**
     * Display the specified resource.
     */
    public function show(Trophy $trophy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Trophy $trophy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Trophy $trophy)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:191',
            'level' => 'required|string|max:191',
            'category' => 'nullable|string|max:191',
            'nationality_id' => 'nullable|exists:nationalities,id',
            'season_id' => 'nullable|exists:seasons,id',
            'club_id' => 'nullable|exists:clubs,id',
            'organizer' => 'nullable|string|max:191',
            'year' => 'nullable|integer|min:1990|max:' . date('Y'),
            'national_team_id' => 'nullable|exists:nationalities,id',
        ]);

        $trophy->update($validated);

        return redirect()->back()->with('success', 'Selección nacional creada exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Trophy $trophy)
    {
        $trophy->delete();
        return redirect()->back()->with('success', 'Trofeo eliminado exitosamente');
    }
}
