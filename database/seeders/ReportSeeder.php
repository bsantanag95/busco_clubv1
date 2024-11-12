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
        Report::create([
            'review' => "Jugador con experiencia en torneos internacionales juveniles, destacando en el Mundial Sub-17 y Sudamericano Sub-17, lo cual le ha permitido adquirir disciplina táctica y una sólida lectura del juego.",
            'observation' => "Tiene buena capacidad de marcaje y anticipación, tanto en el medio campo como en la defensa central. Su altura de 1.75 m le permite ser ágil y adaptarse a múltiples posiciones defensivas, aunque no es particularmente fuerte en el juego aéreo contra delanteros más altos.",
            'improvement' => "Necesita mejorar en la recuperación física y trabajar en la resistencia, ya que lleva tiempo sin actividad competitiva. También sería beneficioso mejorar su habilidad en pases largos para transiciones rápidas.",
            'strength' => "Marcaje agresivo, versatilidad en defensa y buena ubicación en el campo. Capaz de interceptar balones y frenar ataques en su zona.",
            'weakness' => "Le falta ritmo de juego y precisión en pases largos debido al tiempo sin jugar en un club. Además, su estatura lo puede limitar en jugadas aéreas defensivas.",
            'skill' => "Control defensivo en situaciones de presión y habilidad para cerrar espacios. También puede actuar como un organizador defensivo, distribuyendo balones en corto.",
            'comment' => "Jugador que ha demostrado potencial en juveniles, aunque la falta de actividad en los últimos meses afecta su continuidad. Podría ser una opción interesante para reforzar la defensa o el medio campo defensivo si retoma su nivel físico.",
            'conclusion' => "Si se adapta rápidamente al ritmo de juego profesional, tiene el potencial para establecerse en un rol defensivo clave, especialmente como volante de contención o defensor central.",
            'author' => "Alejandro López",
            'x' => "https://x.com/alejandrolopez",
            'instagram' => "https://instagram.com/alejandrolopez_scout",
            'stars' => 3,
            'player_id' => 2,
        ]);
    }
}
