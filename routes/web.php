<?php

use App\Http\Controllers\ClubController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\TransferController;
use App\Models\Player;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::resource('/', PlayerController::class)
    ->only(['index']);
Route::get('/{player}/edit', [PlayerController::class, 'edit'])->name('players.edit');
Route::match(['patch', 'post'], '/player/{player}', [PlayerController::class, 'update'])->middleware(['auth', 'verified'])->name('players.update');
Route::delete('/player/{player}', [PlayerController::class, 'destroy'])->name('players.destroy');
Route::patch('/player/{player}/status', [PlayerController::class, 'changeStatus'])->middleware(['auth', 'verified'])->name('players.changeStatus');
Route::get('/new-club', [ClubController::class, 'index'])->middleware(['auth', 'verified'])->name('new-club');
Route::get('/clubs', [ClubController::class, 'show'])->middleware(['auth', 'verified'])->name('clubs');
Route::post('/clubs', [ClubController::class, 'store'])->name('clubs.store');
Route::post('/clubs/{club}', [ClubController::class, 'update'])->middleware(['auth', 'verified'])->name('clubs.update');
Route::delete('/clubs/{club}', [ClubController::class, 'destroy'])->name('clubs.destroy');
Route::get('/clubs/{club}/edit', [ClubController::class, 'edit'])->name('clubs.edit');
Route::get('/fichajes', [TransferController::class, 'index'])->name('latest');
Route::get('/jugador/{id}/{slug}', [PlayerController::class, 'show'])->name('player.show');
Route::get('/new-player', function () {
    return Inertia::render('Players/CreatePlayer');
})->middleware(['auth', 'verified'])->name('new-player');
Route::get('/new-player', [PositionController::class, 'index'])->middleware(['auth', 'verified'])->name('new-player');
Route::post('/players', [PlayerController::class, 'store'])->middleware(['auth', 'verified'])->name('players.store');
Route::post('/statistics', [StatisticController::class, 'store'])->middleware(['auth', 'verified'])->name('statistics.store');
Route::post('/transfers', [TransferController::class, 'store'])->middleware(['auth', 'verified'])->name('transfers.store');
Route::delete('/transfers/{transfer}', [TransferController::class, 'destroy'])->middleware(['auth', 'verified'])->name('transfers.destroy');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
