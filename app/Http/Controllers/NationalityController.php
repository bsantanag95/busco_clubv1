<?php

namespace App\Http\Controllers;

use App\Models\Nationality;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NationalityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $nationalities = Nationality::all();

        return Inertia::render('Players/CreatePlayer', ['nationalities' => $nationalities]);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Nationality $nationality)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Nationality $nationality)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Nationality $nationality)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Nationality $nationality)
    {
        //
    }
    public function getNationalities()
    {
        $nationalities = Nationality::orderBy('country')->get();

        return $nationalities;
    }
}
