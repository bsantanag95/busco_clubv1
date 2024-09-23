<?php

namespace Database\Seeders;

use App\Models\Nationality;
use App\Models\Player;
use App\Models\Report;
use App\Models\Statistic;
use App\Models\Trophy;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $players = Player::factory(100)
            ->hasAttached(Nationality::inRandomOrder()->take(random_int(1, 3))->get(), ['type' => 'Otras nacionalidades'])
            ->create();

        foreach ($players as $player) {
            Trophy::factory(3)->create([
                'player_id' => $player->id
            ]);
            Statistic::factory(5)->create([
                'player_id' => $player->id
            ]);
            Report::factory(1)->create([
                'player_id' => $player->id
            ]);
        }
    }
}
