<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Position::create([
            'name' => 'Portero',
            'type' => 'Portero',
            'short_name' => 'POR'
        ]);
        Position::create([
            'name' => 'Defensa central',
            'type' => 'Defensa',
            'short_name' => 'CEN'
        ]);
        Position::create([
            'name' => 'Lateral izquierdo',
            'type' => 'Defensa',
            'short_name' => 'LI'
        ]);
        Position::create([
            'name' => 'Lateral derecho',
            'type' => 'Defensa',
            'short_name' => 'LD'
        ]);
        Position::create([
            'name' => 'Volante defensivo',
            'type' => 'Mediocampo',
            'short_name' => 'MCD'
        ]);
        Position::create([
            'name' => 'Volante mixto',
            'type' => 'Mediocampo',
            'short_name' => 'MC'
        ]);
        Position::create([
            'name' => 'Volante por derecha',
            'type' => 'Mediocampo',
            'short_name' => 'MD'
        ]);
        Position::create([
            'name' => 'Volante por izquierda',
            'type' => 'Mediocampo',
            'short_name' => 'MI'
        ]);
        Position::create([
            'name' => 'Volante creativo',
            'type' => 'Mediocampo',
            'short_name' => 'MCO'
        ]);
        Position::create([
            'name' => 'Extremo por derecha',
            'type' => 'Delantero',
            'short_name' => 'ED'
        ]);
        Position::create([
            'name' => 'Extremo por izquierda',
            'type' => 'Delantero',
            'short_name' => 'EI'
        ]);
        Position::create([
            'name' => 'Mediapunta',
            'type' => 'Delantero',
            'short_name' => 'MP'
        ]);
        Position::create([
            'name' => 'Delantero centro',
            'type' => 'Delantero',
            'short_name' => 'DC'
        ]);
    }
}
