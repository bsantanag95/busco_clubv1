<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
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
        $validated = $request->validate([
            'player_id' => 'required|exists:players,id',
            'review' => 'required|string',
            'observation' => 'required|string',
            'improvement' => 'required|string',
            'strength' => 'required|string',
            'weakness' => 'required|string',
            'skill' => 'required|string',
            'comment' => 'required|string',
            'conclusion' => 'required|string',
            'author' => 'required|string',
            'stars' => 'required|numeric|between:0,5',
        ]);

        Report::create($validated);

        return redirect()->back()->with('success', 'Reporte creado exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Report $report)
    {
        $validated = $request->validate([
            'review' => 'required|string',
            'observation' => 'required|string',
            'improvement' => 'required|string',
            'strength' => 'required|string',
            'weakness' => 'required|string',
            'skill' => 'required|string',
            'comment' => 'required|string',
            'conclusion' => 'required|string',
            'author' => 'required|string',
            'stars' => 'required|numeric|min:0|max:5',
        ]);

        $report->update($validated);

        return redirect()->back()->with('success', 'Reporte actualizado exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        $report->delete();
        return redirect()->back()->with('success', 'Reporte eliminado exitosamente');
    }
}
