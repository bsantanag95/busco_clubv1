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
        Distinction::create([
            'name' => 'Subcampeón del Sudamericano Sub 17 en Perú',
            'year' => 2019,
            'description' => 'Jugador anotó doblete en victoria por 4-2 frente a Uruguay que dio la clasificación al mundial',
            'player_id' => 8,
        ]);
        Distinction::create([
            'name' => 'Parte del plantel subcampeón de la Primera División de Chile con Cobresal',
            'year' => 2023,
            'description' => 'Si bien no jugó mucho, estuvo presente en triunfos clavos frente a Ñublense y Magallanes',
            'player_id' => 8,
        ]);
        Distinction::create([
            'name' => 'Tercer puesto del mundial sub 17 en India',
            'year' => 2017,
            'description' => 'Solo disputó 16 minutos en la victoria 3-0 vs Honduras',
            'player_id' => 9,
        ]);
        Distinction::create([
            'name' => 'Jugador revelación de la Serie A de Ecuador',
            'year' => 2022,
            'description' => 'Premio otorgado por ser el mejor jugador de la liga ecuatoriana',
            'player_id' => 10,
        ]);
    }
}
