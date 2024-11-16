<?php

namespace Database\Seeders;

use App\Models\Transfer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transfer::create([
            'player_id' => 11,
            'club_id' => 48
        ]);
        Transfer::create([
            'player_id' => 12,
            'club_id' => 55
        ]);
    }
}
