<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Image::create([
            'url' => 'images/cr7.jpg',
            'player_id' => 1
        ]);
        Image::create([
            'url' => 'images/cr7-juventus.jpg',
            'player_id' => 1
        ]);
        Image::create([
            'url' => 'images/cr7-mu.jpg',
            'player_id' => 1
        ]);
        Image::create([
            'url' => 'images/cr7-portugal',
            'player_id' => 1
        ]);
    }
}
