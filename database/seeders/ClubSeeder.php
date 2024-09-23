<?php

namespace Database\Seeders;

use App\Models\Club;
use App\Models\Statistic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Club::create([
            'name' => 'Colo-Colo',
            'logo' => 'clubs/colocolo.jpg',
            'nationality_id' => 1
        ]);
        Club::create([
            'name' => 'Alianza Lima',
            'logo' => 'clubs/alianzalima.jpg',
            'nationality_id' => 3
        ]);
        Club::create([
            'name' => 'Atlético Tucumán',
            'logo' => 'clubs/atleticotucuman.jpg',
            'nationality_id' => 2
        ]);
        Club::create([
            'name' => 'Boca Juniors',
            'logo' => 'clubs/boca.jpg',
            'nationality_id' => 2
        ]);
        Club::create([
            'name' => 'Deportivo Cali',
            'logo' => 'clubs/deportivocali.jpg',
            'nationality_id' => 5
        ]);
        Club::create([
            'name' => 'Independiente del Valle',
            'logo' => 'clubs/idv.jpg',
            'nationality_id' => 8
        ]);
        Club::create([
            'name' => 'Peñarol',
            'logo' => 'clubs/peñarol.jpg',
            'nationality_id' => 7
        ]);
        Club::create([
            'name' => 'Estudiantes de La Plate',
            'logo' => 'clubs/colocolo.jpg',
            'nationality_id' => 2
        ]);
        Club::create([
            'name' => 'Olimpia',
            'logo' => 'clubs/olimpia.jpg',
            'nationality_id' => 6
        ]);

        $clubs = Club::all();

        foreach ($clubs as $club) {
            Statistic::factory(20)->create([
                'club_id' => $club->id
            ]);
        }
    }
}
