<?php

namespace Database\Seeders;

use App\Models\Report;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Report::create([
            'review' => 'Exjugador de selecciones juveniles de EE.UU. con destacadas habilidades en ataque y gran presencia física. Sin embargo, su carrera se vio truncada por constantes lesiones.',
            'observation' => 'Tiene buen dominio aéreo y potencia en los disparos, pero la falta de actividad le ha restado confianza en el campo. Su rendimiento en los últimos clubes fue bajo, limitando sus oportunidades en el primer equipo.',
            'improvement' => 'Requiere mejorar la constancia en los entrenamientos y fortalecer su resistencia física para reducir la propensión a lesiones. Recuperar confianza en el terreno de juego es fundamental.',
            'strength' => 'Potencia en el juego aéreo, velocidad y buena definición de cara al arco.',
            'weakness' => 'Frecuentes lesiones y una marcada falta de continuidad, lo que afecta su rendimiento en general.',
            'skill' => 'Capacidad de desmarque en el área y buenos remates de media distancia.',
            'comment' => 'Es un jugador con mucho potencial pero con un historial de lesiones que ha afectado su carrera. Puede ser una apuesta interesante si se trabaja en su recuperación.',
            'conclusion' => 'Debe centrarse en una rehabilitación completa y en volver a jugar de manera constante. Si supera sus problemas físicos, aún tiene posibilidades de recuperar su nivel.',
            'author' => 'James Scott',
            'x' => 'https://x.com/jamesscott',
            'instagram' => 'https://instagram.com/james_scott_official',
            'stars' => 3,
            'player_id' => 1,
        ]);
    }
}
