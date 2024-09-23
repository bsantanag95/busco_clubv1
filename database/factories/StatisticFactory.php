<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class StatisticFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $season = $this->faker->numberBetween(2010, 2021);
        return [
            'starting' => $this->faker->numberBetween(1, 30),
            'substitute' => $this->faker->numberBetween(1, 20),
            'goals' => $this->faker->numberBetween(1, 10),
            'assists' => $this->faker->numberBetween(1, 10),
            'goals' => $this->faker->numberBetween(1, 10),
            'red_cards' => $this->faker->numberBetween(1, 4),
            'yellow_cards' => $this->faker->numberBetween(1, 8),
            'goals' => $this->faker->numberBetween(1, 10),
            'goals_conceded' => $this->faker->numberBetween(10, 40),
            'season' => 'Temporada ' . $season . '/' . ($season + 1),
            'season_number' => $this->faker->numberBetween(1, 10),
            // 'club_id' => Club::all()->random()->id()
        ];
    }
}
