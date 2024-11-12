<?php

namespace Database\Seeders;

use App\Models\Club;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $clubs = [
            [
                'name' => 'Colo-Colo',
                'logo' => 'clubs/colocolo.jpg',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Alianza Lima',
                'logo' => 'clubs/alianzalima.png',
                'nationality_id' => 102,
            ],
            [
                'name' => 'Atlético Tucumán',
                'logo' => 'clubs/atleticotucuman.png',
                'nationality_id' => 6,
            ],
            [
                'name' => 'Boca Juniors',
                'logo' => 'clubs/boca.png',
                'nationality_id' => 6,
            ],
            [
                'name' => 'Deportivo Cali',
                'logo' => 'clubs/deportivocali.png',
                'nationality_id' => 25,
            ],
            [
                'name' => 'Independiente del Valle',
                'logo' => 'clubs/idv.png',
                'nationality_id' => 33,
            ],
            [
                'name' => 'Peñarol',
                'logo' => 'clubs/peñarol.png',
                'nationality_id' => 131,
            ],
            [
                'name' => 'Estudiantes de La Plata',
                'logo' => 'clubs/edlp.png',
                'nationality_id' => 6,
            ],
            [
                'name' => 'Olimpia',
                'logo' => 'clubs/olimpia.png',
                'nationality_id' => 101,
            ],
            [
                'name' => 'San Diego Surf',
                'logo' => 'clubs/san_diego_surf.jpg',
                'nationality_id' => 41,
            ],
            [
                'name' => 'Real Salt Lake',
                'logo' => 'clubs/real_salt_lake.png',
                'nationality_id' => 41,
            ],
            [
                'name' => 'Hannover 96',
                'logo' => 'clubs/hannover.png',
                'nationality_id' => 2,
            ],
            [
                'name' => 'SC Telstar',
                'logo' => 'clubs/telstar.png',
                'nationality_id' => 97,
            ],
            [
                'name' => 'Norwich City',
                'logo' => 'clubs/norwich.png',
                'nationality_id' => 62,
            ],
            [
                'name' => 'Porto II',
                'logo' => 'clubs/porto.png',
                'nationality_id' => 104,
            ],
            [
                'name' => 'Livingston FC',
                'logo' => 'clubs/livingston.png',
                'nationality_id' => 37,
            ],
            [
                'name' => 'Austria Klagenfurt',
                'logo' => 'clubs/austria_klagenfurt.png',
                'nationality_id' => 9,
            ],
            [
                'name' => 'Hannover 96 II',
                'logo' => 'clubs/hannover.png',
                'nationality_id' => 2,
            ],
        ];

        foreach ($clubs as $clubData) {
            Club::create([
                'name' => $clubData['name'],
                'logo' => $clubData['logo'],
                'nationality_id' => $clubData['nationality_id'],
            ]);

            $sourcePath = public_path("seeders/" . $clubData['logo']);

            Storage::disk('public')->put($clubData['logo'], file_get_contents($sourcePath));
        }

        $defaultSource = public_path('seeders/clubs/default.jpg');
        $defaultDestination = 'clubs/default.jpg';
        Storage::disk('public')->put($defaultDestination, file_get_contents($defaultSource));
    }
}
