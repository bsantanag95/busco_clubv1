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
            'url' => 'https://youtu.be/NR6HEUYZXbE',
            'iframe' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/NR6HEUYZXbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'player_id' => 1
        ]);

        Video::create([
            'url' => 'https://youtu.be/OUKGsb8CpF8',
            'iframe' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/OUKGsb8CpF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'player_id' => 1
        ]);

        Video::create([
            'url' => 'https://youtu.be/gWVatZAmtaA',
            'iframe' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/gWVatZAmtaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'player_id' => 1
        ]);
    }
}
