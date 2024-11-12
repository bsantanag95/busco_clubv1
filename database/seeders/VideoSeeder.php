<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=Kn9bFhQnDew',
            'player_id' => 1
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=f8Zbg74Cl8Q',
            'player_id' => 1
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=iBggswcHhg0',
            'player_id' => 1
        ]);

        Video::create([
            'url' => 'https://youtu.be/dkxrNjSFc_I',
            'player_id' => 1
        ]);
    }
}
