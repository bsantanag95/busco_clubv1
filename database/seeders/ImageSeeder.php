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
