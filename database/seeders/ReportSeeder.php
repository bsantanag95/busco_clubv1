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
        Report::create([
            'review' => 'Jugador joven con gran entusiasmo y proyección en el profesionalismo. Su perfil apunta a un delantero rápido que busca aprovechar su velocidad por las bandas. Aunque también es capaz de jugar como centro delantero debido a su buena definición y olfato goleador en el área.',
            'observation' => 'Si bien no ha pasado por clubes juveniles de alto prestigio ni ha sido parte de la selección juvenil, su movilidad en ataque y su capacidad para adaptarse a diferentes posiciones ofensivas le brindan un potencial interesante. Su reciente experiencia en el fútbol europeo, aunque en divisiones inferiores, le permite tener una visión amplia del juego.',
            'improvement' => 'Necesita trabajar en el desarrollo físico y táctico para el nivel profesional. Mejorar la toma de decisiones en ataque, así como la resistencia y fortaleza física para enfrentar defensores de mayor categoría. También sería beneficioso para él desarrollar habilidades en su pierna menos hábil para ser un atacante más versátil.',
            'strength' => 'Buena velocidad, versatilidad ofensiva (capaz de jugar tanto por las bandas como de centro delantero) y capacidad para encontrar espacios en el área. Su experiencia en ligas europeas le da una pequeña ventaja en términos de adaptación a estilos de juego diferentes.',
            'weakness' => 'Falta de experiencia en clubes de alto nivel y carencia de exposición en el ámbito nacional, lo que podría dificultar su proyección. No ha demostrado aún un rendimiento sobresaliente que lo destaque entre los mejores juveniles.',
            'skill' => 'Buen dominio del balón en velocidad y capacidad para definir en jugadas rápidas. Su habilidad de adaptarse a diferentes roles ofensivos le permite aportar tanto en el juego directo como en posiciones más centrales.',
            'comment' => 'Requiere de un entorno de desarrollo adecuado que potencie sus habilidades y le permita superar sus limitaciones. Dado su perfil y experiencia en Italia, podría ser una apuesta a mediano plazo para equipos que busquen desarrollarlo en el rol de extremo.',
            'conclusion' => 'Aunque actualmente es un jugador en formación, su versatilidad y experiencia en el extranjero podrían ser ventajosos si logra desarrollarse físicamente y adquirir mayor experiencia competitiva. Necesita tiempo para evolucionar y consolidarse en el profesionalismo.',
            'author' => 'Análisis del Equipo Técnico',
            'x' => '',
            'instagram' => '',
            'stars' => 2.5,
            'player_id' => 3,
        ]);
        Report::create([
            'review' => 'Jugador joven con gran entusiasmo y proyección en el profesionalismo. Su perfil apunta a un delantero rápido que busca aprovechar su velocidad por las bandas. Aunque también es capaz de jugar como centro delantero debido a su buena definición y olfato goleador en el área.',
            'observation' => 'Si bien no ha pasado por clubes juveniles de alto prestigio ni ha sido parte de la selección juvenil, su movilidad en ataque y su capacidad para adaptarse a diferentes posiciones ofensivas le brindan un potencial interesante. Su reciente experiencia en el fútbol europeo, aunque en divisiones inferiores, le permite tener una visión amplia del juego.',
            'improvement' => 'Necesita trabajar en el desarrollo físico y táctico para el nivel profesional. Mejorar la toma de decisiones en ataque, así como la resistencia y fortaleza física para enfrentar defensores de mayor categoría. También sería beneficioso para él desarrollar habilidades en su pierna menos hábil para ser un atacante más versátil.',
            'strength' => 'Buena velocidad, versatilidad ofensiva (capaz de jugar tanto por las bandas como de centro delantero) y capacidad para encontrar espacios en el área. Su experiencia en ligas europeas le da una pequeña ventaja en términos de adaptación a estilos de juego diferentes.',
            'weakness' => 'Falta de experiencia en clubes de alto nivel y carencia de exposición en el ámbito nacional, lo que podría dificultar su proyección. No ha demostrado aún un rendimiento sobresaliente que lo destaque entre los mejores juveniles.',
            'skill' => 'Buen dominio del balón en velocidad y capacidad para definir en jugadas rápidas. Su habilidad de adaptarse a diferentes roles ofensivos le permite aportar tanto en el juego directo como en posiciones más centrales.',
            'comment' => 'Requiere de un entorno de desarrollo adecuado que potencie sus habilidades y le permita superar sus limitaciones. Dado su perfil y experiencia en Italia, podría ser una apuesta a mediano plazo para equipos que busquen desarrollarlo en el rol de extremo.',
            'conclusion' => 'Aunque actualmente es un jugador en formación, su versatilidad y experiencia en el extranjero podrían ser ventajosos si logra desarrollarse físicamente y adquirir mayor experiencia competitiva. Necesita tiempo para evolucionar y consolidarse en el profesionalismo.',
            'author' => 'Análisis del Equipo Técnico',
            'x' => '',
            'instagram' => '',
            'stars' => 3.5,
            'player_id' => 4,
        ]);
        Report::create([
            'review' => 'Arquero chileno de 27 años con formación en una de las mejores academias de Chile y experiencia en la sub-20 nacional. A pesar de su prometedora juventud, tuvo dificultades para consolidarse en el profesionalismo y solo ha jugado en equipos de tercera división. Sin club desde hace 2 años, su ritmo competitivo podría estar comprometido. Mide 181 cm, una altura promedio para el puesto, aunque compensa con agilidad y buena técnica bajo los tres palos.',
            'observation' => 'Arquero de buena técnica y posicionamiento, con reflejos rápidos y confiabilidad en el juego bajo los palos. A pesar de sus años sin actividad profesional, su formación sólida y su experiencia en selecciones juveniles nacionales son un respaldo de su calidad potencial. Se muestra seguro en situaciones de uno contra uno y tiene un buen control de manos, aunque puede faltarle ritmo competitivo debido a su inactividad reciente.',
            'improvement' => 'Necesita recuperar ritmo y confianza en la cancha, además de mejorar su juego aéreo y su salida con los pies. Entrenar su resistencia y condición física será fundamental para estar a nivel profesional después de tanto tiempo sin competencia activa.',
            'strength' => 'Reflejos rápidos, buena técnica bajo los palos, seguridad en situaciones de corto alcance y capacidad para leer el juego en jugadas peligrosas. Su formación en una de las mejores canteras y su paso por la sub-20 de Chile avalan su potencial y comprensión táctica.',
            'weakness' => 'Inactividad prolongada y falta de experiencia en primera o segunda división. Su juego aéreo podría mejorar, especialmente en balones cruzados o córners donde su estatura podría ser una desventaja. Le falta también la confianza que otorga la regularidad en el arco.',
            'skill' => 'Agilidad y técnica en la portería, buen posicionamiento, reflejos rápidos y seguridad en los mano a mano. A pesar de sus carencias en juego aéreo, su capacidad de reacción es un punto a su favor.',
            'comment' => 'Es un arquero que podría aportar a un equipo que busque una opción económica con potencial, especialmente en divisiones inferiores o como suplente. Si logra recuperar su ritmo competitivo, su experiencia juvenil y su formación pueden ser una base sólida para una buena proyección.',
            'conclusion' => 'Arquero con bases técnicas y experiencia en selecciones juveniles, aunque su inactividad es un factor importante a considerar. Puede ser una buena incorporación para equipos en proceso de crecimiento o de categorías menores, donde pueda recuperar confianza y tiempo de juego.',
            'author' => 'Análisis del Equipo Técnico',
            'x' => '',
            'instagram' => '',
            'stars' => 2,
            'player_id' => 5,
        ]);
    }
}
