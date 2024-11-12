<?php

namespace Database\Seeders;

use App\Models\Trophy;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TrophySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Trophy::create([
            'name' => 'Campeonato Sub-20 de la CONCACAF',
            'category' => null,
            'level' => 'Selección',
            'year' => 2018,
            'organizer' => 'CONCACAF',
            'season_id' => null,
            'player_id' => 1,
            'nationality_id' => null,
            'club_id' => null,
            'national_team_id' => 41,
        ]);
    }
}
