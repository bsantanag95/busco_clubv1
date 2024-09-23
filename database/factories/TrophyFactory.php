<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TrophyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $country = $this->faker->country();
        $season = $this->faker->numberBetween(2010, 2021);
        return [
            'name' => 'Primera División de ' . $country,
            'country' => $country,
            'season' =>  $season . '/' . ($season + 1),
            'quantity' => $this->faker->randomElement([1, 2, 3]),
        ];
    }
}
