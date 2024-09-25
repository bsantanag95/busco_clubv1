<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Transfer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TransferController extends Controller
{
    public function index()
    {
        $transfers = Transfer::with(['player.positions', 'player.nationalities', 'club.nationality'])
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Players/Latest', ['transfers' => $transfers]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'player_id' => 'required|exists:players,id',
            'club_id' => 'required|exists:clubs,id',
        ]);

        DB::transaction(function () use ($request) {
            Transfer::create([
                'player_id' => $request->player_id,
                'club_id' => $request->club_id
            ]);

            $player = Player::find($request->player_id);
            $player->status = "3";
            $player->last_club_id = $request->club_id;
            $player->save();
        });

        return redirect()->back()->with('success', 'Transferencia registrada y estado del jugador actualizado');
    }

    public function show(Transfer $transfer)
    {
        //
    }

    public function edit(Transfer $transfer)
    {
        //
    }

    public function update(Request $request, Transfer $transfer)
    {
        //
    }

    public function destroy(Transfer $transfer)
    {
        DB::transaction(function () use ($transfer) {
            $player = $transfer->player;
            $transfer->delete();

            $latestTransfer = Transfer::where('player_id', $player->id)
                ->orderBy('created_at', 'desc')
                ->first();

            if ($latestTransfer) {
                $player->last_club_id = $latestTransfer->club_id;
            } else {
                $player->last_club_id = null;
            }

            if (!$latestTransfer || $latestTransfer->created_at < $transfer->created_at) {
                if ($player->status === "3") {
                    $player->status = "2";
                }
            }
            $player->save();
        });

        return redirect()->back()->with('success', 'Transferencia eliminada exitosamente. El estado del jugador ha sido actualizado.');
    }
}
