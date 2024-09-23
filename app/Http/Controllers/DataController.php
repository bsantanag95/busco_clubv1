<?php

namespace App\Http\Controllers;

use App\Models\Club;
use App\Models\Nationality;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataController extends Controller
{
    public function getData()
    {
        $nationalities = Nationality::all();
        $positions = Position::all();
        $clubs = Club::all();

        return Inertia::render('Clubs/ManageClubs', ['nationalities' => $nationalities, 'positions' => $positions, 'clubs' => $clubs]);
    }
}
