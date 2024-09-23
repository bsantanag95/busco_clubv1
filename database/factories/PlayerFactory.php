<?php

namespace Database\Factories;

use App\Models\Player;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PlayerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $surname = $this->faker->firstName();
        $forename = $this->faker->lastName();
        $name = $surname . ' ' . $forename;
        $slug = Str::slug($name);

        return [
            'name' =>  $name,
            'surname' => $surname,
            'forename' => $forename,
            'slug' => $slug,
            'genre' => $this->faker->randomElement(['Masculino', 'Femenino']),
            'date_of_birth' => $this->faker->date(),
            'place_of_birth' => $this->faker->city(),
            'height' => $this->faker->numberBetween(60, 90),
            'foot' => 'Derecho',
            'attribute' => $this->faker->sentence(),
            'distinction' => $this->faker->sentence(),
            'description' => $this->faker->sentence(),
            'profile_photo' => 'players/' . $this->faker->image('storage/app/public/players', 640, 480, null, false),
            'instagram' => 'https://instagram.com/' . $slug,
            'x' => 'https://x.com/' . $slug,
            'status' => $this->faker->randomElement([Player::RETIRADO, Player::BUSCANDO, Player::CONTRATADO]),
            'email' => $this->faker->unique()->safeEmail(),
            'relevance' => $this->faker->numberBetween(1, 5),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Player $player) {
            $player->positions()->attach(Position::inRandomOrder()->take(random_int(1, 5))->pluck('id'));
            //  $player->nationalities()->attach(Nationality::inRandomOrder()->take(1)->pluck('id'));
        });
    }
}
