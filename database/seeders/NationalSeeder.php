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
            'category' => 'Sub 17',
            'description' => 'Participación en amistosos preparativos',
            'first_year' => '2017',
            'last_year' => '2017',
            'nationality_id' => 41,
            'player_id' => 1
        ]);
        National::create([
            'category' => 'Sub 20',
            'description' => 'Parte del plantel del Campeonato Sub-20 de la CONCACAF y del Mundial Sub 20 del 2019 en Polonia',
            'first_year' => '2018',
            'last_year' => '2019',
            'nationality_id' => 41,
            'player_id' => 1
        ]);
        National::create([
            'category' => 'Sub 23',
            'description' => 'Parte del plantel que participó en el Campeonato Sub-23 de la CONCACAF para los J.J.O.O. de Tokio',
            'first_year' => '2019',
            'last_year' => '2020',
            'nationality_id' => 41,
            'player_id' => 1
        ]);
        National::create([
            'category' => 'Adulto',
            'description' => 'Disputó amistosos con la selección mayor ante Gales, El Salvador y Panamá, anotando doblete ante estos últimos',
            'first_year' => '2019',
            'last_year' => '2020',
            'nationality_id' => 41,
            'player_id' => 1
        ]);
        National::create([
            'category' => 'Sub 17',
            'description' => 'Parte del plantel que disputó el Sudamericano Sub 15 en Argentina',
            'first_year' => '2017',
            'last_year' => '2017',
            'nationality_id' => 21,
            'player_id' => 2
        ]);
        National::create([
            'category' => 'Sub 17',
            'description' => 'Subcampeón del Sudamericano Sub 17 en Perú del 2019 y mundialista sub 17 en Brasil',
            'first_year' => '2018',
            'last_year' => '2019',
            'nationality_id' => 21,
            'player_id' => 2
        ]);
        National::create([
            'category' => 'Sub 15',
            'description' => 'Parte de la preselección sub 15 de Argentina',
            'first_year' => '2015',
            'last_year' => '2015',
            'nationality_id' => 6,
            'player_id' => 4
        ]);
        National::create([
            'category' => 'Sub 20',
            'description' => 'Citado a microciclos de la selección sub 20 de Argentina',
            'first_year' => '2018',
            'last_year' => '2018',
            'nationality_id' => 6,
            'player_id' => 4
        ]);
        National::create([
            'category' => 'Sub 20',
            'description' => 'Citado a microciclos de la selección sub 20 de Chile',
            'first_year' => '2016',
            'last_year' => '2016',
            'nationality_id' => 21,
            'player_id' => 5
        ]);
        National::create([
            'category' => 'Sub 20',
            'description' => 'Citado a varios entrenamientos y amistosos con la sub 19 de España',
            'first_year' => '2019',
            'last_year' => '2020',
            'nationality_id' => 40,
            'player_id' => 6
        ]);
        National::create([
            'category' => 'Sub 17',
            'description' => 'Parte del plantel que clasificó al mundial sub 17 de Brasil en el sudamericano. Anotó doblete en victoria frente a Uruguay',
            'first_year' => '2019',
            'last_year' => '2019',
            'nationality_id' => 21,
            'player_id' => 8
        ]);
        National::create([
            'category' => 'Sub 17',
            'description' => 'Campeón sudamericano sub 17 en Chile y tercer puesto del mundial de la India',
            'first_year' => '2017',
            'last_year' => '2017',
            'nationality_id' => 15,
            'player_id' => 9
        ]);
        National::create([
            'category' => 'Sub 20',
            'description' => 'Jugador clave de la sub 20 ecuatoriana que clasificó y jugó el mundial sub 20 del 2023 en Argentina',
            'first_year' => '2023',
            'last_year' => '2023',
            'nationality_id' => 33,
            'player_id' => 10
        ]);
        National::create([
            'category' => 'Adulto',
            'description' => 'Citado para un amistosos vs Irak previo al mundial de Catar, pero no logró debutar',
            'first_year' => '2022',
            'last_year' => '2022',
            'nationality_id' => 33,
            'player_id' => 10
        ]);
        National::create([
            'category' => 'Sub 16',
            'description' => 'Seleccionado sub 16 de Escocia disputando un amistosos vs Inglaterra',
            'first_year' => '2019',
            'last_year' => '2019',
            'nationality_id' => 37,
            'player_id' => 11
        ]);
        National::create([
            'category' => 'Sub 19',
            'description' => 'Parte del plantel que disputó las clasificatorias al Campeonato Europeo Sub-19, anotando un gol frente Armenia',
            'first_year' => '2021',
            'last_year' => '2022',
            'nationality_id' => 37,
            'player_id' => 11
        ]);
        National::create([
            'category' => 'Sub 17',
            'description' => 'Disputó el Campeonato Sub-17 de la UEFA en el 2019 con Inglaterra',
            'first_year' => '2017',
            'last_year' => '2019',
            'nationality_id' => 62,
            'player_id' => 12
        ]);
        National::create([
            'category' => 'Sub 18',
            'description' => 'Jugó amistosos con el seleccionado inglés sub 18',
            'first_year' => '2019',
            'last_year' => '2019',
            'nationality_id' => 62,
            'player_id' => 12
        ]);
    }
}
