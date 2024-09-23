<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Storage::deleteDirectory('clubs');
        Storage::deleteDirectory('images');
        Storage::deleteDirectory('flags');
        Storage::deleteDirectory('players');
        Storage::makeDirectory('clubs');
        Storage::makeDirectory('images');
        Storage::makeDirectory('flags');
        Storage::makeDirectory('players');



        // \App\Models\User::factory(10)->create();
        $this->call(SeasonSeeder::class);
        $this->call(NationalitySeeder::class);
        $this->call(ClubSeeder::class);
        $this->call(PositionSeeder::class);
        $this->call(PlayerSeeder::class);
        $this->call(ImageSeeder::class);
        $this->call(VideoSeeder::class);
        $this->call(NationalSeeder::class);
    }
}
