<?php

namespace Database\Seeders;

use App\Models\Distinction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistinctionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Distinction::create([
            'name' => 'Ganador del Golden Boot de la copa Slovakia Cup sub 19',
            'year' => 2019,
            'description' => 'Goleador del torneo Slovakia Cup con Estados Unidos al anotar 5 goles en 4 partidos',
            'player_id' => 1,
        ]);
        Distinction::create([
            'name' => 'Segundo máximo anotador del Mundial Sub 20 en Polonia',
            'year' => 2019,
            'description' => 'Soto anotó 4 goles en 5 partidos en el mundial sub 20 de Polonia quedando entre los goleadores del torneo, por debajo de Erling Haaland que anotó 9 goles',
            'player_id' => 1,
        ]);
        Distinction::create([
            'name' => 'Subcampeón del Sudamericano Sub 17 en Perú',
            'year' => 2019,
            'description' => 'Jugador destacó como titular en 7 de los 9 partidos de su selección en el sudamericano',
            'player_id' => 2,
        ]);
    }
}
