<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $images = [
            [
                'url' => 'images/sebastian_soto.jpg',
                'player_id' => 1,
            ],
            [
                'url' => 'images/sebastian_soto2.jpg',
                'player_id' => 1,
            ],
            [
                'url' => 'images/sebastian_soto3.jpg',
                'player_id' => 1,
            ],
            [
                'url' => 'images/sebastian_soto4.jpg',
                'player_id' => 1,
            ],
            [
                'url' => 'images/patricio_flores.jpeg',
                'player_id' => 2,
            ],
            [
                'url' => 'images/patricio_flores2.jpg',
                'player_id' => 2,
            ],
            [
                'url' => 'images/patricio_flores4.jpg',
                'player_id' => 2,
            ],
            [
                'url' => 'images/ignacio_casari.jpg',
                'player_id' => 3,
            ],
            [
                'url' => 'images/ignacio_casari2.jpg',
                'player_id' => 3,
            ],
            [
                'url' => 'images/nazareno_romero.jpg',
                'player_id' => 4,
            ],
            [
                'url' => 'images/nazareno_romero2.jpg',
                'player_id' => 4,
            ],
            [
                'url' => 'images/nazareno_romero3.jpg',
                'player_id' => 4,
            ],
            [
                'url' => 'images/nazareno_romero4.jpg',
                'player_id' => 4,
            ],
            [
                'url' => 'images/nazareno_romero5.jpg',
                'player_id' => 4,
            ],
            [
                'url' => 'images/alvaro_ogalde.jpg',
                'player_id' => 5,
            ],
            [
                'url' => 'images/alvaro_ogalde2.jpg',
                'player_id' => 5,
            ],
            [
                'url' => 'images/alvaro_ogalde3.jpg',
                'player_id' => 5,
            ],
            [
                'url' => 'images/alvaro_ogalde4.jpg',
                'player_id' => 5,
            ],
            [
                'url' => 'images/alvaro_ogalde5.jpg',
                'player_id' => 5,
            ],
            [
                'url' => 'images/lanchi.jpg',
                'player_id' => 6,
            ],
            [
                'url' => 'images/lanchi2.jpg',
                'player_id' => 6,
            ],
            [
                'url' => 'images/benjamin_huerta.jpg',
                'player_id' => 7,
            ],
            [
                'url' => 'images/benjamin_huerta2.jpg',
                'player_id' => 7,
            ],
            [
                'url' => 'images/benjamin_osses.jpg',
                'player_id' => 8,
            ],
            [
                'url' => 'images/benjamin_osses2.jpg',
                'player_id' => 8,
            ],
            [
                'url' => 'images/victor_yan.jpg',
                'player_id' => 9,
            ],
            [
                'url' => 'images/victor_yan2.jpg',
                'player_id' => 9,
            ],
            [
                'url' => 'images/victor_yan3.jpg',
                'player_id' => 9,
            ],
            [
                'url' => 'images/sebastian_gonzalez.jpg',
                'player_id' => 10,
            ],
            [
                'url' => 'images/sebastian_gonzalez2.jpg',
                'player_id' => 10,
            ],
            [
                'url' => 'images/adam_brooks.jpg',
                'player_id' => 11,
            ],
            [
                'url' => 'images/matthew_bondswell.jpg',
                'player_id' => 12,
            ],
            [
                'url' => 'images/matthew_bondswell2.jpg',
                'player_id' => 12,
            ],
            [
                'url' => 'images/matthew_bondswell3.jpg',
                'player_id' => 12,
            ],
            [
                'url' => 'images/matthew_bondswell4.jpg',
                'player_id' => 12,
            ],
            [
                'url' => 'images/matthew_bondswell5.jpg',
                'player_id' => 12,
            ],
        ];

        foreach ($images as $imageData) {
            Image::create([
                'url' => $imageData['url'],
                'player_id' => $imageData['player_id'],
            ]);

            $sourcePath = public_path("seeders/" . $imageData['url']);

            Storage::disk('public')->put($imageData['url'], file_get_contents($sourcePath));
        }
    }
}
