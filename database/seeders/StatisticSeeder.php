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
            'season_id' => 11,
            'club_id' => 35,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1969,
            'games_played' => 23,
            'games_started' => 22,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 11,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 33,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 524,
            'games_played' => 8,
            'games_started' => 5,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 33,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 402,
            'games_played' => 5,
            'games_started' => 5,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 32,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 0,
            'games_played' => 0,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 31,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 422,
            'games_played' => 11,
            'games_started' => 4,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 32,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 0,
            'games_played' => 0,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 31,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 2127,
            'games_played' => 32,
            'games_started' => 22,
            'goals' => 2,
            'assists' => 0,
            'red_cards' => 1,
            'yellow_cards' => 12,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 34,
            'player_id' => 6
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1731,
            'games_played' => 25,
            'games_started' => 20,
            'goals' => 1,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 5,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 32,
            'player_id' => 6
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
            'club_id' => 36,
            'player_id' => 7
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 152,
            'games_played' => 3,
            'games_started' => 3,
            'goals' => 1,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 37,
            'player_id' => 7
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
            'club_id' => 38,
            'player_id' => 8
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 39,
            'games_played' => 3,
            'games_started' => 0,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 38,
            'player_id' => 8
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 111,
            'games_played' => 7,
            'games_started' => 0,
            'goals' => 1,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 38,
            'player_id' => 8
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 391,
            'games_played' => 12,
            'games_started' => 5,
            'goals' => 0,
            'assists' => 2,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 38,
            'player_id' => 8
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 154,
            'games_played' => 4,
            'games_started' => 3,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 38,
            'player_id' => 8
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
            'club_id' => 39,
            'player_id' => 9
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 13,
            'games_played' => 1,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 10,
            'club_id' => 39,
            'player_id' => 9
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 0,
            'games_played' => 0,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 39,
            'player_id' => 9
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1414,
            'games_played' => 20,
            'games_started' => 16,
            'goals' => 1,
            'assists' => 3,
            'red_cards' => 0,
            'yellow_cards' => 9,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 40,
            'player_id' => 9
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
            'season_id' => 15,
            'club_id' => 41,
            'player_id' => 9
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 225,
            'games_played' => 5,
            'games_started' => 2,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 42,
            'player_id' => 9
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
            'season_id' => 12,
            'club_id' => 44,
            'player_id' => 10
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => null,
            'games_played' => 7,
            'games_started' => null,
            'goals' => 4,
            'assists' => null,
            'red_cards' => null,
            'yellow_cards' => null,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 43,
            'player_id' => 10
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 620,
            'games_played' => 11,
            'games_started' => 7,
            'goals' => 1,
            'assists' => 1,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 44,
            'player_id' => 10
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1402,
            'games_played' => 21,
            'games_started' => 17,
            'goals' => 2,
            'assists' => 2,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 44,
            'player_id' => 10
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1698,
            'games_played' => 33,
            'games_started' => 19,
            'goals' => 1,
            'assists' => 1,
            'red_cards' => 0,
            'yellow_cards' => 6,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 44,
            'player_id' => 10
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 420,
            'games_played' => 11,
            'games_started' => 4,
            'goals' => 0,
            'assists' => 1,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 44,
            'player_id' => 10
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
            'club_id' => 45,
            'player_id' => 11
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
            'season_id' => 14,
            'club_id' => 46,
            'player_id' => 11
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
            'season_id' => 15,
            'club_id' => 46,
            'player_id' => 11
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 620,
            'games_played' => 27,
            'games_started' => 4,
            'goals' => 4,
            'assists' => 1,
            'red_cards' => 0,
            'yellow_cards' => 3,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 47,
            'player_id' => 11
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 776,
            'games_played' => 14,
            'games_started' => 10,
            'goals' => 3,
            'assists' => 2,
            'red_cards' => 0,
            'yellow_cards' => 2,
            'goals_conceded' => null,
            'season_id' => 17,
            'club_id' => 47,
            'player_id' => 11
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
            'club_id' => 49,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 1875,
            'games_played' => 23,
            'games_started' => 21,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 5,
            'goals_conceded' => null,
            'season_id' => 11,
            'club_id' => 50,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 1056,
            'games_played' => 15,
            'games_started' => 12,
            'goals' => 0,
            'assists' => null,
            'red_cards' => 0,
            'yellow_cards' => 3,
            'goals_conceded' => null,
            'season_id' => 12,
            'club_id' => 50,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 559,
            'games_played' => 7,
            'games_started' => 7,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 51,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 323,
            'games_played' => 5,
            'games_started' => 4,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 1,
            'goals_conceded' => null,
            'season_id' => 13,
            'club_id' => 52,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 323,
            'games_played' => 19,
            'games_started' => 19,
            'goals' => 0,
            'assists' => 2,
            'red_cards' => 0,
            'yellow_cards' => 10,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 52,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 0,
            'games_played' => 0,
            'games_started' => 0,
            'goals' => 0,
            'assists' => 0,
            'red_cards' => 0,
            'yellow_cards' => 0,
            'goals_conceded' => null,
            'season_id' => 14,
            'club_id' => 53,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'youth',
            'minutes' => 1740,
            'games_played' => 22,
            'games_started' => 21,
            'goals' => 0,
            'assists' => 1,
            'red_cards' => 1,
            'yellow_cards' => 3,
            'goals_conceded' => null,
            'season_id' => 15,
            'club_id' => 52,
            'player_id' => 12
        ]);
        Statistic::create([
            'level' => 'senior',
            'minutes' => 1520,
            'games_played' => 40,
            'games_started' => 13,
            'goals' => 0,
            'assists' => 2,
            'red_cards' => 0,
            'yellow_cards' => 4,
            'goals_conceded' => null,
            'season_id' => 16,
            'club_id' => 54,
            'player_id' => 12
        ]);
    }
}
