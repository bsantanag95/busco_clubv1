<?php

namespace App\Http\Controllers;

use App\Models\National;
use Illuminate\Http\Request;

class NationalController extends Controller
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
            'category' => 'required|string',
            'description' => 'required|string|max:191',
            'first_year' => 'required|integer|min:1990|max:' . date('Y'),
            'last_year' => 'required|integer|min:1990|max:' . date('Y') . '|gte:first_year',
            'nationality_id' => 'required|exists:nationalities,id',
        ]);
        National::create([
            'player_id' => $request->player_id,
            'category' => $request->category,
            'description' => $request->description,
            'first_year' => $request->first_year,
            'last_year' => $request->last_year,
            'nationality_id' => $request->nationality_id
        ]);

        return redirect()->back()->with('success', 'Selección nacional creada exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(National $national)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(National $national)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, National $national)
    {
        $validated = $request->validate([
            'category' => 'required|string',
            'description' => 'required|string|max:191',
            'first_year' => 'required|integer|min:1990|max:' . date('Y'),
            'last_year' => 'required|integer|min:1990|max:' . date('Y') . '|gte:first_year',
            'nationality_id' => 'required|exists:nationalities,id',
        ]);

        $national->update($validated);

        return redirect()->back()->with('success', 'Selección nacional creada exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(National $national)
    {
        $national->delete();
        return redirect()->back()->with('success', 'Selección nacional eliminada exitosamente');
    }
}
