<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticController extends Controller
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
            'player_id' => 'required|exists:players,id',
            'club_id' => 'required|exists:clubs,id',
            'season_id' => 'required|exists:seasons,id',
        ]);
        Statistic::create([
            'player_id' => $request->player_id,
            'club_id' => $request->club_id,
            'season_id' => $request->season_id,
            'level' => $request->level
        ]);

        return redirect()->back()->with('success', 'Estadistica creada exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Statistic $statistic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Statistic $statistic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Statistic $statistic)
    {
        $validated = $request->validate([
            'club_id' => 'required|exists:clubs,id',
            'season_id' => 'required|exists:seasons,id',
        ]);

        $statistic->update($validated);

        return redirect()->back()->with('success', 'Estadistica actualizada exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Statistic $statistic)
    {
        $statistic->delete();
        return redirect()->back()->with('success', 'Estadistica creada exitosamente');
    }
}
