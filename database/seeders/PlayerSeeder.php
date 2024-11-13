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
            [
                'name' => 'Ignacio Casari',
                'surname' => 'Juan Ignacio',
                'forename' => 'Casari Bertona',
                'slug' => 'ignacio-casari',
                'gender' => 'Masculino',
                'date_of_birth' => Carbon::parse('2006-10-02'),
                'place_of_birth' => 'Rivadavia',
                'height' => 178,
                'foot' => 'Derecho',
                'attribute' => 'Jugador ofensivo y rápido que puede jugar por todo el frente de ataque',
                'description' => 'Nació en Argentina pero se crió en Chile. Cuenta también con nacionalidad italiana',
                'profile_photo' => 'players/ignacio_casari.jpg',
                'instagram' => 'www.instagram.com/ignacio_casari/',
                'x' => '',
                'status' => 2,
                'email' => '',
                'relevance' => 1,
                'agent' => '',
                'inactive_date' => Carbon::parse('2024-07-01'),
                'last_club_id' => 22,
                'nationalities' => [6, 21, 69],
                'positions' => [11, 10, 13],
            ],
            [
                'name' => 'Nazareno Romero',
                'surname' => 'Nazareno Andrés',
                'forename' => 'Romero',
                'slug' => 'nazareno-romero',
                'gender' => 'Masculino',
                'date_of_birth' => Carbon::parse('2000-02-26'),
                'place_of_birth' => 'Buenos Aires',
                'height' => 172,
                'foot' => 'Izquierdo',
                'attribute' => 'Jugador que juega por la banda izquierda, rápido y con buen pie',
                'description' => 'Nacido en Buenos Aires, surgió en una de las mejores academia de su país y tuvo un paso por la sub 15 de Argentina',
                'profile_photo' => 'players/nazareno_romero.jpg',
                'instagram' => 'www.instagram.com/nazaromero_14/',
                'x' => '',
                'status' => 2,
                'email' => '',
                'relevance' => 2,
                'agent' => 'dtsm',
                'inactive_date' => Carbon::parse('2024-07-10'),
                'last_club_id' => 26,
                'nationalities' => [6],
                'positions' => [3],
            ],
            [
                'name' => 'Álvaro Ogalde',
                'surname' => 'Álvaro Matías',
                'forename' => 'Ogalde Olivares',
                'slug' => 'alvaro-ogalde',
                'gender' => 'Masculino',
                'date_of_birth' => Carbon::parse('1997-05-13'),
                'place_of_birth' => 'La Serena',
                'height' => 181,
                'foot' => 'Derecho',
                'attribute' => '',
                'description' => 'Arquero chileno con pasos en las selecciones juveniles',
                'profile_photo' => 'players/alvaro_ogalde.jpg',
                'instagram' => 'www.instagram.com/ogalde13/',
                'x' => 'https://x.com/ogalde_13',
                'status' => 2,
                'email' => '',
                'relevance' => 1,
                'agent' => '',
                'inactive_date' => Carbon::parse('2022-01-01'),
                'last_club_id' => 30,
                'nationalities' => [21],
                'positions' => [1],
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
