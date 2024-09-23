<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $author = $this->faker->name();

        return [
            'review' => $this->faker->sentence(),
            'observation' => $this->faker->sentence(),
            'improvement' => $this->faker->sentence(),
            'strength' => $this->faker->sentence(),
            'weakness' => $this->faker->sentence(),
            'skill' => $this->faker->sentence(),
            'comment' => $this->faker->sentence(),
            'conclusion' => $this->faker->sentence(),
            'author' => $author,
            'x' => 'https://x.com/' . $author,
            'instagram' => 'https://instagram.com/' . $author

        ];
    }
}
