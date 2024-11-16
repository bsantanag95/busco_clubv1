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
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=9BLRHFE6frs',
            'player_id' => 3
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=WysahNx8i1k',
            'player_id' => 4
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=CG1GzYDWxGw',
            'player_id' => 4
        ]);
        Video::create([
            'url' => 'https://vimeo.com/957983075',
            'player_id' => 4
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=ZFNK5Shahvo',
            'player_id' => 9
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=hlC7-ff11qI',
            'player_id' => 9
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=zmzFEl7YiPk',
            'player_id' => 9
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=uawwJ19tRKw',
            'player_id' => 11
        ]);
        Video::create([
            'url' => 'https://www.youtube.com/watch?v=OVg3afGaY2M',
            'player_id' => 12
        ]);
    }
}
