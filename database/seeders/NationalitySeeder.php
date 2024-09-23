<?php

namespace Database\Seeders;

use App\Models\Nationality;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NationalitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Nationality::create([
            'country' => 'Chile',
            'flag' => 'flags/chile.jpg'
        ]);
        Nationality::create([
            'country' => 'Argentina',
            'flag' => 'flags/argentina.jpg'
        ]);
        Nationality::create([
            'country' => 'Perú',
            'flag' => 'flags/peru.jpg'
        ]);
        Nationality::create([
            'country' => 'Italia',
            'flag' => 'flags/italy.jpg'
        ]);
        Nationality::create([
            'country' => 'Colombia',
            'flag' => 'flags/colombia.jpg'
        ]);
        Nationality::create([
            'country' => 'Paraguay',
            'flag' => 'flags/paraguay.jpg'
        ]);
        Nationality::create([
            'country' => 'Uruguay',
            'flag' => 'flags/uruguay.jpg'
        ]);
        Nationality::create([
            'country' => 'Ecuador',
            'flag' => 'flags/ecuador.jpg'
        ]);
    }
}
