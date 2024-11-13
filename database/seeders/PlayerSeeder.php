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
            ],
            [
                'name' => 'Patricio Flores',
                'surname' => 'Patricio Alessandro',
                'forename' => 'Flores Bascur',
                'slug' => 'patricio-flores',
                'gender' => 'Masculino',
                'date_of_birth' => Carbon::parse('2002-01-30'),
                'place_of_birth' => 'Cerro Navia',
                'height' => 175,
                'foot' => 'Derecho',
                'attribute' => 'Jugador defensivo que puede jugar tanto de volante como defensor',
                'description' => 'Volante defensivo con experiencia mundialista Sub 17 con Chile',
                'profile_photo' => 'players/patricio_flores.jpg',
                'instagram' => 'https://www.instagram.com/pato.3/',
                'x' => '',
                'status' => 2,
                'email' => '',
                'relevance' => 1,
                'agent' => 'Mundo Futuro Chile',
                'inactive_date' => Carbon::parse('2024-01-01'),
                'last_club_id' => 20,
                'nationalities' => [21],
                'positions' => [5, 2],
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

            // foreach ($playerData['clubs'] as $clubId => $stats) {
            //     $player->clubs()->attach($clubId, $stats);
            // }
            if (isset($playerData['nationalities'])) {
                $player->nationalities()->attach($playerData['nationalities']);
            }
            if (isset($playerData['positions'])) {
                $player->positions()->attach($playerData['positions']);
            }
        }

        $defaultSource = public_path('seeders/players/default.jpg');
        $defaultDestination = 'players/default.jpg';
        Storage::disk('public')->put($defaultDestination, file_get_contents($defaultSource));
    }
}
