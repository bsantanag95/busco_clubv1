<?php

namespace Database\Seeders;

use App\Models\National;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NationalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        National::create([
            'name' => 'Chile Sub 20',
            'description' => 'Participación en microcilos para el Sudamericano Sub 20 del 2017',
            'year' => '2015-2016',
            'nationality_id' => 1,
            'player_id' => 1
        ]);
        National::create([
            'name' => 'Chile Sub 17',
            'description' => 'Participación en microcilos para el Sudamericano Sub 17 del 2015',
            'year' => '2015-2016',
            'nationality_id' => 1,
            'player_id' => 1
        ]);
    }
}
