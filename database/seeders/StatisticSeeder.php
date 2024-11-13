<?php

namespace Database\Seeders;

use App\Models\Statistic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatisticSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Statistic::create([
            'level' => 'youth',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 7,
            'club_id' => 10,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 10,
            'club_id' => 11,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 2062,
            'games_played' => 24,
            'games_started' => 24,
            'goals' => 17,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 11,
            'club_id' => 12,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 26,
            'games_played' => 3,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 11,
            'club_id' => 12,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 16,
            'games_played' => 2,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 12,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 218,
            'games_played' => 3,
            'games_started' => 3,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 18,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 659,
            'games_played' => 12,
            'games_started' => 8,
            'goals' => 7,
            'assists' => null,
            'red_cards' => 1,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 13,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 238,
            'games_played' => 3,
            'games_started' => 3,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 14,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 218,
            'games_played' => 8,
            'games_started' => 2,
            'goals' => 1,
            'assists' => 1,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 15,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 275,
            'games_played' => 12,
            'games_started' => 2,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 16,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 599,
            'games_played' => 12,
            'games_started' => 7,
            'goals' => 1,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 17,
            'player_id' => 1
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 191,
            'games_played' => 7,
            'games_started' => 2,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 17,
            'player_id' => 1
        ]);

        Statistic::create([
            'level' => 'youth',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 19,
            'player_id' => 2
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 392,
            'games_played' => 8,
            'games_started' => 4,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 20,
            'player_id' => 2
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 311,
            'games_played' => 10,
            'games_started' => 4,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 20,
            'player_id' => 2
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 21,
            'player_id' => 3
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 84,
            'games_played' => 2,
            'games_started' => 1,
            'goals' => 1,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 21,
            'player_id' => 3
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 319,
            'games_played' => 9,
            'games_started' => 2,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 22,
            'player_id' => 3
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 23,
            'player_id' => 4
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 374,
            'games_played' => 9,
            'games_started' => 3,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 23,
            'player_id' => 4
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 167,
            'games_played' => 3,
            'games_started' => 1,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 24,
            'player_id' => 4
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 392,
            'games_played' => 10,
            'games_started' => 4,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 25,
            'player_id' => 4
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1706,
            'games_played' => 21,
            'games_started' => 20,
            'goals' => 1,
            'assists' => 1,
            'red_cards' => 0,
            'yellow_cards' => 3,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 26,
            'player_id' => 4
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 7,
            'club_id' => 19,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 0,
            'games_played' => 0,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 8,
            'club_id' => 19,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 0,
            'games_played' => 0,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 9,
            'club_id' => 19,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 10,
            'club_id' => 27,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 90,
            'games_played' => 1,
            'games_started' => 1,
            'goals' => 0,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => 3,
            'season_id' => 11,
            'club_id' => 28,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 29,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => null,
            'games_played' => null,
            'games_started' => null,
            'goals' => null,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 29,
            'player_id' => 5
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1080,
            'games_played' => 12,
            'games_started' => 12,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => 15,
            'season_id' => 13,
            'club_id' => 30,
            'player_id' => 5
        ]);
    }
}
