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
            [
                'name' => 'Universidad Católica',
                'logo' => 'clubs/uc.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Unión La Calera',
                'logo' => 'clubs/la_calera.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Deportes Valdivia',
                'logo' => 'clubs/deportes_valdivia.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'SPAL',
                'logo' => 'clubs/spal.png',
                'nationality_id' => 69,
            ],
            [
                'name' => 'Vélez Sarsfield',
                'logo' => 'clubs/velez.png',
                'nationality_id' => 6,
            ],
            [
                'name' => 'Rosario Central',
                'logo' => 'clubs/rosario_central.png',
                'nationality_id' => 6,
            ],
            [
                'name' => 'Ferro Carril Oeste',
                'logo' => 'clubs/ferro.png',
                'nationality_id' => 6,
            ],
            [
                'name' => 'Deportivo Cuenca',
                'logo' => 'clubs/cuenca.png',
                'nationality_id' => 33,
            ],
            [
                'name' => 'Deportes Limache',
                'logo' => 'clubs/limache.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Lautaro de Buin',
                'logo' => 'clubs/lautaro_de_buin.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Provincial Ovalle',
                'logo' => 'clubs/ovalle.jpg',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Colchagua',
                'logo' => 'clubs/colchagua.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Villarreal',
                'logo' => 'clubs/villarreal.png',
                'nationality_id' => 40,
            ],
            [
                'name' => 'Villarreal B',
                'logo' => 'clubs/villarreal.png',
                'nationality_id' => 40,
            ],
            [
                'name' => 'Villarreal C',
                'logo' => 'clubs/villarreal.png',
                'nationality_id' => 40,
            ],
            [
                'name' => 'San Fernando CD',
                'logo' => 'clubs/san_fernando.png',
                'nationality_id' => 40,
            ],
            [
                'name' => 'Cádiz CF',
                'logo' => 'clubs/cadiz.png',
                'nationality_id' => 40,
            ],
            [
                'name' => 'Universidad de Chile',
                'logo' => 'clubs/u_de_chile.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Deportes Concepción',
                'logo' => 'clubs/deportes_concepcion.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Cobresal',
                'logo' => 'clubs/cobresal.png',
                'nationality_id' => 21,
            ],
            [
                'name' => 'Santos',
                'logo' => 'clubs/santos.png',
                'nationality_id' => 15,
            ],
            [
                'name' => 'Orlando City B',
                'logo' => 'clubs/orlando_city.png',
                'nationality_id' => 41,
            ],
            [
                'name' => 'Cuiabá',
                'logo' => 'clubs/cuiaba.png',
                'nationality_id' => 15,
            ],
            [
                'name' => 'Metalist Kharkiv',
                'logo' => 'clubs/metalist.jpg',
                'nationality_id' => 129,
            ],
            [
                'name' => 'Atlético Kin',
                'logo' => 'clubs/atletico_kin.png',
                'nationality_id' => 33,
            ],
            [
                'name' => 'LDU Quito',
                'logo' => 'clubs/ldu_quito.png',
                'nationality_id' => 33,
            ],
            [
                'name' => 'Celtic',
                'logo' => 'clubs/celtic.png',
                'nationality_id' => 37,
            ],
            [
                'name' => 'Celtic B',
                'logo' => 'clubs/celtic.png',
                'nationality_id' => 37,
            ],
            [
                'name' => 'Inverness CT',
                'logo' => 'clubs/inverness_ct.png',
                'nationality_id' => 37,
            ],
            [
                'name' => 'Queen of the South',
                'logo' => 'clubs/queen_of_the_south.png',
                'nationality_id' => 37,
            ],
            [
                'name' => 'Nottingham Forest',
                'logo' => 'clubs/nottingham.png',
                'nationality_id' => 62,
            ],
            [
                'name' => 'RB Leipzig',
                'logo' => 'clubs/leipzig.png',
                'nationality_id' => 2,
            ],
            [
                'name' => 'FC Dordrecht',
                'logo' => 'clubs/dordrecht.png',
                'nationality_id' => 97,
            ],
            [
                'name' => 'Newcastle United',
                'logo' => 'clubs/newcastle.png',
                'nationality_id' => 62,
            ],
            [
                'name' => 'Shrewsbury Town',
                'logo' => 'clubs/shrewsbury.png',
                'nationality_id' => 62,
            ],
            [
                'name' => 'Newport County',
                'logo' => 'clubs/newport.png',
                'nationality_id' => 62,
            ],
            [
                'name' => 'Hartlepool United',
                'logo' => 'clubs/hartlepool.png',
                'nationality_id' => 62,
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
