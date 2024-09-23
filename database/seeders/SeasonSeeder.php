<?php

namespace Database\Seeders;

use App\Models\Season;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Season::create([
            'season' => 'Temporada 2008/2009',
            'season_number' => 1
        ]);
        Season::create([
            'season' => 'Temporada 2009/2010',
            'season_number' => 2
        ]);
        Season::create([
            'season' => 'Temporada 2010/2011',
            'season_number' => 3
        ]);
        Season::create([
            'season' => 'Temporada 2011/2012',
            'season_number' => 4
        ]);
        Season::create([
            'season' => 'Temporada 2012/2013',
            'season_number' => 5
        ]);
        Season::create([
            'season' => 'Temporada 2013/2014',
            'season_number' => 6
        ]);
        Season::create([
            'season' => 'Temporada 2014/2015',
            'season_number' => 7
        ]);
        Season::create([
            'season' => 'Temporada 2015/2016',
            'season_number' => 8
        ]);
        Season::create([
            'season' => 'Temporada 2016/2017',
            'season_number' => 9
        ]);
        Season::create([
            'season' => 'Temporada 2017/2018',
            'season_number' => 10
        ]);
        Season::create([
            'season' => 'Temporada 2018/2019',
            'season_number' => 11
        ]);
        Season::create([
            'season' => 'Temporada 2019/2020',
            'season_number' => 12
        ]);
        Season::create([
            'season' => 'Temporada 2020/2021',
            'season_number' => 13
        ]);
        Season::create([
            'season' => 'Temporada 2021/2022',
            'season_number' => 14
        ]);
        Season::create([
            'season' => 'Temporada 2022/2023',
            'season_number' => 15
        ]);
        Season::create([
            'season' => 'Temporada 2023/2024',
            'season_number' => 16
        ]);
        Season::create([
            'season' => 'Temporada 2024/2025',
            'season_number' => 17
        ]);
    }
}
