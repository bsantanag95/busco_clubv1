<?php

namespace App\Http\Controllers;

use App\Models\Distinction;
use Illuminate\Http\Request;

class DistinctionController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'year' => 'required|integer|min:1990|max:' . date('Y'),
            'player_id' => 'required|exists:players,id',
        ]);

        Distinction::create($validated);

        return redirect()->back()->with('success', 'Distinción creado exitosamente');
    }

    public function show(Distinction $distinction)
    {
        return view('distinctions.show', compact('distinction'));
    }

    public function edit(Distinction $distinction)
    {
        //
    }

    public function update(Request $request, Distinction $distinction)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'year' => 'required|integer|min:1990|max:' . date('Y'),
            'player_id' => 'required|exists:players,id',
        ]);

        $distinction->update($validated);

        return redirect()->back()->with('success', 'Distinción actualizada exitosamente');
    }

    public function destroy(Distinction $distinction)
    {
        $distinction->delete();

        return redirect()->back()->with('success', 'Distinción eliminada exitosamente');
    }
}
