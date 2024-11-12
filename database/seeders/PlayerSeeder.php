<?php

namespace Database\Seeders;

use App\Models\Nationality;
use App\Models\Player;
use App\Models\Report;
use App\Models\Statistic;
use App\Models\Trophy;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $players = Player::factory(100)
        //     ->hasAttached(Nationality::inRandomOrder()->take(random_int(1, 3))->get(), ['type' => 'Otras nacionalidades'])
        //     ->create();

        $players = [
            [
                'name' => 'Sebastián Soto',
                'surname' => 'Sebastián',
                'forename' => 'Guerra Soto',
                'slug' => 'sebastian-soto',
                'gender' => 'Masculino',
                'date_of_birth' => Carbon::parse('2000-07-28'),
                'place_of_birth' => 'Carlsbad, California',
                'height' => 183,
                'foot' => 'Derecho',
                'attribute' => 'Ágil y con buena definición en el área. Especialista en remates de cabeza y velocidad en el contraataque',
                'description' => 'Delantero con pasado en selecciones juveniles de Estados Unidos. Posee triple nacionalidad',
                'profile_photo' => 'players/sebastian_soto.jpg',
                'instagram' => 'https://www.instagram.com/sebastian.soto9/',
                'x' => 'https://x.com/sebastian9soto',
                'status' => 2,
                'email' => '',
                'relevance' => 3,
                'agent' => 'CCC',
                'inactive_date' => Carbon::parse('2024-10-22'),
                'last_club_id' => 17,
                'nationalities' => [41, 21, 89],
                'positions' => [13],
                'clubs' => [
                    10 => [
                        'level' => 'youth',
                        'games_played' => null,
                        'games_started' => null,
                        'goals' => null,
                        'assists' => null,
                        'red_cards' => null,
                        'yellow_cards' => null,
                        'goals_conceded' => null,
                        'season_id' => 7,
                    ],
                    11 => [
                        'level' => 'youth',
                        'games_played' => null,
                        'games_started' => null,
                        'goals' => null,
                        'assists' => null,
                        'red_cards' => null,
                        'yellow_cards' => null,
                        'goals_conceded' => null,
                        'season_id' => 10,
                    ],
                    12 => [
                        'level' => 'youth',
                        'games_played' => 24,
                        'games_started' => 24,
                        'goals' => 17,
                        'assists' => null,
                        'red_cards' => 0,
                        'yellow_cards' => 2,
                        'goals_conceded' => null,
                        'season_id' => 11,
                    ],
                    12 => [
                        'level' => 'senior',
                        'games_played' => 3,
                        'games_started' => 0,
                        'goals' => 0,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 11,
                    ],
                    12 => [
                        'level' => 'senior',
                        'games_played' => 2,
                        'games_started' => 0,
                        'goals' => 0,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 12,
                    ],
                    18 => [
                        'level' => 'senior',
                        'games_played' => 3,
                        'games_started' => 3,
                        'goals' => 0,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 12,
                    ],
                    13 => [
                        'level' => 'senior',
                        'games_played' => 12,
                        'games_started' => 8,
                        'goals' => 7,
                        'assists' => null,
                        'red_cards' => 1,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 13,
                    ],
                    14 => [
                        'level' => 'youth',
                        'games_played' => 3,
                        'games_started' => 3,
                        'goals' => 0,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 13,
                    ],
                    15 => [
                        'level' => 'senior',
                        'games_played' => 8,
                        'games_started' => 2,
                        'goals' => 1,
                        'assists' => 1,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 14,
                    ],
                    16 => [
                        'level' => 'senior',
                        'games_played' => 12,
                        'games_started' => 2,
                        'goals' => 0,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 14,
                    ],
                    17 => [
                        'level' => 'senior',
                        'games_played' => 11,
                        'games_started' => 6,
                        'goals' => 1,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 15,
                    ],
                    17 => [
                        'level' => 'senior',
                        'games_played' => 7,
                        'games_started' => 2,
                        'goals' => 0,
                        'assists' => 0,
                        'red_cards' => 0,
                        'yellow_cards' => 0,
                        'goals_conceded' => null,
                        'season_id' => 16,
                    ],
                ],
            ],
        ];

        foreach ($players as $playerData) {
            $player = Player::create([
                'name' => $playerData['name'],
                'surname' => $playerData['surname'],
                'forename' => $playerData['forename'],
                'slug' => $playerData['slug'],
                'gender' => $playerData['gender'],
                'date_of_birth' => $playerData['date_of_birth'],
                'place_of_birth' => $playerData['place_of_birth'],
                'height' => $playerData['height'],
                'foot' => $playerData['foot'],
                'attribute' => $playerData['attribute'],
                'description' => $playerData['description'],
                'profile_photo' => $playerData['profile_photo'],
                'instagram' => $playerData['instagram'],
                'x' => $playerData['x'],
                'status' => $playerData['status'],
                'relevance' => $playerData['relevance'],
                'agent' => $playerData['agent'],
                'inactive_date' => $playerData['inactive_date'],
                'last_club_id' => $playerData['last_club_id'],
            ]);

            $sourcePath = public_path("seeders/" . $playerData['profile_photo']);

            Storage::disk('public')->put($playerData['profile_photo'], file_get_contents($sourcePath));

            foreach ($playerData['clubs'] as $clubId => $stats) {
                $player->clubs()->attach($clubId, $stats);
            }
            if (isset($playerData['nationalities'])) {
                $player->nationalities()->attach($playerData['nationalities']);
            }
            $player->positions()->attach($playerData['positions']);
        }

        $defaultSource = public_path('seeders/players/default.jpg');
        $defaultDestination = 'players/default.jpg';
        Storage::disk('public')->put($defaultDestination, file_get_contents($defaultSource));
    }
}
