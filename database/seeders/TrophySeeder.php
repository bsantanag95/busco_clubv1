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
        Trophy::create([
            'name' => 'Sudamericano Sub 17',
            'category' => null,
            'level' => 'Selección',
            'year' => 2017,
            'organizer' => 'CONMEBOL',
            'season_id' => null,
            'player_id' => 9,
            'nationality_id' => null,
            'club_id' => null,
            'national_team_id' => 15,
        ]);
        Trophy::create([
            'name' => 'Copa Sudamericana',
            'category' => null,
            'level' => 'Internacional',
            'year' => 2023,
            'organizer' => 'CONMEBOL',
            'season_id' => null,
            'player_id' => 10,
            'nationality_id' => null,
            'club_id' => 44,
            'national_team_id' => null,
        ]);
        Trophy::create([
            'name' => 'Serie A',
            'category' => 'Primera División',
            'level' => 'Nacional',
            'year' => null,
            'organizer' => null,
            'season_id' => 15,
            'player_id' => 10,
            'nationality_id' => 33,
            'club_id' => 44,
            'national_team_id' => null,
        ]);
        Trophy::create([
            'name' => 'Supercopa',
            'category' => 'Copa',
            'level' => 'Nacional',
            'year' => null,
            'organizer' => null,
            'season_id' => 13,
            'player_id' => 10,
            'nationality_id' => 33,
            'club_id' => 44,
            'national_team_id' => null,
        ]);
    }
}
