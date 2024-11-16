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
        Report::create([
            'review' => 'Lateral derecho de 23 años con una sólida formación en el Villarreal y experiencia en entrenamientos con la selección sub-19 de España. En las últimas dos temporadas fue titular indiscutido en San Fernando y en el Villarreal B, ambos en tercera división. Destaca por su solidez defensiva, inteligencia táctica y su capacidad para integrarse en el juego ofensivo desde la banda.',
            'observation' => 'Jugador disciplinado y con excelente sentido táctico. Tiene una buena lectura del juego, sabe posicionarse bien para anticipar y cortar balones, y aporta profundidad en el ataque. Su experiencia como titular en dos equipos competitivos le ha brindado consistencia en sus actuaciones, demostrando madurez y responsabilidad en el rol.',
            'improvement' => 'Podría trabajar en mejorar sus centros y precisión en balones largos, especialmente cuando se proyecta al ataque. Adicionalmente, ganar algo de resistencia física y fuerza le permitiría competir mejor en situaciones uno contra uno con atacantes de mayor porte.',
            'strength' => 'Buena capacidad de marca y anticipación, disciplinado en defensa y preciso en los pases cortos y medios. Su experiencia formativa en el Villarreal y su tiempo como titular le han dado un excelente nivel técnico y una mentalidad ganadora.',
            'weakness' => 'Si bien cumple bien en defensa y en el despliegue táctico, podría mejorar en situaciones ofensivas, especialmente en el último pase y en los centros al área. Su juego aéreo es correcto, pero podría beneficiarse de trabajo físico adicional para enfrentarse a rivales más físicos.',
            'skill' => 'Gran sentido táctico, anticipación, buen juego de pies, y capacidad de desdoble en ataque sin comprometer su posicionamiento defensivo. Tiene confianza en la salida desde el fondo y cumple bien en transiciones rápidas.',
            'comment' => 'Un jugador que ofrece seguridad y compromiso en su posición, con capacidad de mejorar en aspectos ofensivos y en fuerza física para competir a un nivel más alto. Puede ser una pieza clave para equipos que busquen solidez y proyección desde el lateral derecho.',
            'conclusion' => 'Lateral derecho con una sólida formación y experiencia competitiva, con potencial para evolucionar y adaptarse a categorías superiores. Es una opción fiable y equilibrada para cualquier equipo que busque consolidar su defensa y tener un lateral versátil en fase ofensiva.',
            'author' => 'Joaquín Martínez',
            'X' => '@joaquinmartinez_scout',
            'instagram' => '@joaquinmartinez_analysis',
            'stars' => 4.5,
            'player_id' => 6,
        ]);
        Report::create([
            'review' => 'Atacante versátil de 22 años, capaz de desempeñarse tanto como centrodelantero como en posiciones de banda. Formó parte del equipo nacional sub-17 que clasificó a un mundial, mostrando gran proyección desde joven. Con 172 cm de altura, tiene un centro de gravedad bajo que le permite una buena agilidad y control en espacios reducidos. A pesar de haber tenido pocos minutos en el profesionalismo, siempre ha competido en primera división, lo que le ha permitido enfrentar defensores de alto nivel.',
            'observation' => 'Es un jugador rápido y hábil, con buen manejo del balón y capacidad para adaptarse a diferentes roles ofensivos. Sabe jugar de espaldas al arco y tiene una excelente movilidad para romper líneas defensivas. Su experiencia internacional a nivel juvenil le dio madurez táctica, y su capacidad de juego en primera división le brinda un perfil competitivo.',
            'improvement' => 'Podría beneficiarse de mejorar su finalización en situaciones de presión y fortalecer su juego aéreo. También sería útil que trabajara en su resistencia física para soportar mayores minutos y adaptarse a la intensidad del juego a nivel profesional.',
            'strength' => 'Buena técnica individual, rapidez y capacidad de desborde. Es un jugador que se adapta a distintas posiciones en el frente de ataque, con buen control del balón en carrera y habilidad para generar desequilibrio en el uno contra uno.',
            'weakness' => 'Tiene poca experiencia jugando minutos completos en el profesionalismo, por lo que aún debe mejorar su toma de decisiones en momentos clave del partido. Su juego aéreo también es limitado debido a su estatura.',
            'skill' => 'Destaca por su velocidad, agilidad, y capacidad para moverse entre líneas, lo que le permite explotar espacios y ofrecer distintas opciones en el ataque. Su técnica y manejo del balón lo convierten en una opción interesante para equipos que busquen dinamismo en el ataque.',
            'comment' => 'A pesar de su experiencia limitada en minutos de juego en el profesionalismo, muestra un gran potencial gracias a su habilidad técnica y versatilidad ofensiva. Con mayor rodaje, podría convertirse en una pieza importante en cualquier sistema ofensivo que requiera movilidad y adaptación.',
            'conclusion' => 'Un atacante joven y prometedor, con capacidad para desempeñarse en varias posiciones de ataque. Con la orientación y el tiempo de juego adecuados, puede ser una excelente incorporación para equipos que busquen talento en ofensiva con capacidad de adaptarse a diferentes roles.',
            'author' => 'Mariano González',
            'X' => '@marianogonzalez_scout',
            'instagram' => '@marianogonzalez_analysis',
            'stars' => 2,
            'player_id' => 8,
        ]);
        Report::create([
            'review' => 'Volante brasileño de 23 años, surgido de las inferiores del Santos, con habilidades tanto ofensivas como defensivas. Con una altura de 180 cm, es un jugador versátil que fue campeón sudamericano sub-17 y mundialista juvenil con Brasil, mostrando grandes proyecciones desde sus primeros años. A pesar de su potencial y formación en Santos, no logró consolidarse en el profesionalismo, sumando apenas un partido con el primer equipo. Posteriormente, intentó establecerse en ligas de Estados Unidos y Ucrania, pero no obtuvo el éxito esperado.',
            'observation' => 'Posee una técnica individual destacada y es capaz de cumplir roles tanto de contención como de creación de juego, siendo útil en transiciones rápidas. Su experiencia a nivel juvenil internacional le otorgó una base táctica sólida, aunque le falta continuidad en el profesionalismo para desarrollar aún más su toma de decisiones y capacidad de liderazgo en el mediocampo.',
            'improvement' => 'Necesita enfocarse en obtener más minutos de juego en un ambiente competitivo para adquirir experiencia y confianza en su rendimiento. Trabajar en su resistencia y en su capacidad de mantener la intensidad durante todo el partido le ayudaría a ser más efectivo en ligas de mayor ritmo.',
            'strength' => 'Gran versatilidad en el medio campo, buen manejo del balón y una comprensión del juego que le permite adaptarse tanto a labores defensivas como ofensivas. Su formación en Santos y experiencia internacional juvenil lo respaldan técnicamente y tácticamente.',
            'weakness' => 'La falta de minutos y continuidad en ligas profesionales ha frenado su crecimiento, y la falta de consolidación en los equipos en los que ha estado impide ver todo su potencial en la cancha. También le falta desarrollar su resistencia para soportar el ritmo de juego en el fútbol profesional.',
            'skill' => 'Destaca por su técnica en el control del balón, pase preciso y visión de juego. Es un jugador que puede contribuir en labores de recuperación y avanzar el juego desde el medio campo, combinando habilidades de contención y apoyo ofensivo.',
            'comment' => 'A pesar de sus limitadas oportunidades en el profesionalismo, mantiene un alto potencial para adaptarse a ligas competitivas donde pueda sumar minutos y desarrollarse. Con más experiencia en juego, tiene el potencial para aportar en equipos que requieran un mediocampista con cualidades mixtas.',
            'conclusion' => 'Un mediocampista con formación de élite y habilidades técnicas muy completas, pero que necesita continuidad para explotar todo su potencial. Ideal para equipos que puedan ofrecerle el tiempo de juego y apoyo en su crecimiento para consolidarse en un rol específico.',
            'author' => 'Carlos Ribeiro',
            'X' => '@carlosribeiro_scout',
            'instagram' => '@carlosribeiro_analysis',
            'stars' => 3.5,
            'player_id' => 9,
        ]);
        Report::create([
            'review' => 'Volante ecuatoriano de 21 años con gran proyección y experiencia en categorías juveniles internacionales. Ha sido seleccionado en equipos juveniles de Ecuador, participó en el Mundial Sub-20 y fue convocado para un amistoso con la selección adulta. Su rol ofensivo y su habilidad para desmarcarse lo destacan en el medio campo, además de su paso por uno de los clubes más grandes de Ecuador, donde ha acumulado una base sólida y conocimientos técnicos avanzados.',
            'observation' => 'Jugador con un instinto ofensivo desarrollado, buen manejo del balón y gran visión de juego. Aprovecha los espacios y sabe posicionarse para recibir pases y generar oportunidades de ataque. La experiencia en torneos internacionales ha fortalecido su capacidad para tomar decisiones rápidas y efectivas.',
            'improvement' => 'Debe trabajar en su resistencia física para soportar el ritmo de ligas de mayor competitividad, así como en su precisión en pases largos. La consistencia en su rendimiento durante los 90 minutos y su capacidad de recuperación tras pérdidas de balón son áreas que pueden mejorarse.',
            'strength' => 'Gran técnica individual, habilidad para enfrentar rivales en el uno contra uno y visión para filtrar pases entre líneas. Su capacidad para adaptarse a distintos sistemas de juego y rendir bajo presión en torneos internacionales refuerzan su potencial de crecimiento.',
            'weakness' => 'Aunque es un jugador prometedor, aún le falta experiencia en ligas extranjeras y mayor desarrollo físico para enfrentar defensores de alto nivel. A veces tiende a tomar riesgos innecesarios en situaciones defensivas.',
            'skill' => 'Destaca por su agilidad, precisión en el pase corto y control de balón en espacios reducidos. Es un jugador creativo que contribuye significativamente en la construcción de jugadas ofensivas.',
            'comment' => 'Tiene todo para consolidarse como un referente en su posición en Ecuador y podría rendir en ligas extranjeras en el futuro cercano. Su talento y proyección lo convierten en un jugador a seguir de cerca.',
            'conclusion' => 'Volante ofensivo con una base técnica sólida y experiencia internacional, ideal para equipos que busquen potenciar su ataque con un jugador creativo y con proyección. Requiere más minutos en contextos de alta exigencia para alcanzar su máximo rendimiento.',
            'author' => 'Fernando Villavicencio',
            'X' => '@fervillavicencio_scout',
            'instagram' => '@fernandovillavicencio_analysis',
            'stars' => 4.5,
            'player_id' => 10,
        ]);
        Report::create([
            'review' => 'Delantero escocés de 22 años, formado en la cantera del Celtic, uno de los clubes más prestigiosos de Escocia. Participó en selecciones menores de su país, demostrando talento y capacidad técnica en sus inicios. A pesar de su potencial, no logró consolidarse en el Celtic ni en un equipo de menor renombre en Escocia. Su versatilidad le permite desempeñarse como delantero centro y volante ofensivo, destacando por su visión de juego y su capacidad para generar espacios.',
            'observation' => 'Es un jugador con buena técnica y creatividad en la generación de jugadas ofensivas. Tiene una visión clara para asistir a sus compañeros y aportar en la creación de juego. Sin embargo, su falta de continuidad en equipos competitivos ha limitado su desarrollo profesional.',
            'improvement' => 'Debe trabajar en su confianza dentro del campo y mejorar su efectividad frente al arco. Además, sería beneficioso fortalecer su resistencia física y su capacidad para asumir roles de liderazgo en situaciones adversas.',
            'strength' => 'Destaca por su inteligencia táctica, buen control de balón y capacidad para conectar con sus compañeros en el último tercio del campo. Su versatilidad como delantero y volante ofensivo le da un valor agregado en diferentes esquemas de juego.',
            'weakness' => 'La falta de minutos en competencias de alto nivel ha afectado su ritmo competitivo y toma de decisiones en momentos cruciales. Necesita mayor regularidad para adaptarse a un nivel profesional más exigente.',
            'skill' => 'Habilidad para moverse entre líneas, buen primer toque y capacidad para asistir en jugadas clave. Su visión de juego y lectura táctica lo convierten en un jugador útil para equipos que prioricen la posesión del balón.',
            'comment' => 'A pesar de su falta de consolidación, su formación en un club de élite como el Celtic y su experiencia en selecciones menores le dan una base sólida para relanzar su carrera. Puede ser una apuesta interesante para equipos que busquen un delantero versátil con potencial de crecimiento.',
            'conclusion' => 'Jugador técnicamente dotado y tácticamente versátil que aún no ha alcanzado su máximo nivel. Ideal para proyectos que busquen potenciar talento joven y brindar oportunidades en entornos competitivos.',
            'author' => 'Alex Ferguson Jr.',
            'X' => '@alexfergusonjr_scout',
            'instagram' => '@alexfergusonjr_analysis',
            'stars' => 2.5,
            'player_id' => 11,
        ]);
        Report::create([
            'review' => 'Lateral izquierdo inglés de 22 años con una sólida formación en academias de alto nivel como Nottingham Forest, RB Leipzig y Newcastle United. Participó en selecciones juveniles de Inglaterra, mostrando destellos de talento y proyección. Sin embargo, desde su transición al profesionalismo, ha tenido dificultades para consolidarse en un club, acumulando cesiones a equipos de ligas holandesas y de tercera y cuarta división inglesa.',
            'observation' => 'Es un jugador con buena capacidad física, destacando por su velocidad y resistencia en el carril izquierdo. Su formación en academias de renombre le ha dotado de una técnica aceptable y un buen entendimiento del juego. Sin embargo, la falta de estabilidad en un entorno competitivo ha limitado su crecimiento.',
            'improvement' => 'Debe trabajar en su toma de decisiones bajo presión y en mejorar sus contribuciones ofensivas, especialmente en centros y asistencias. También es importante que desarrolle una mayor solidez defensiva para enfrentar rivales de mayor nivel.',
            'strength' => 'Destaca por su capacidad para recorrer toda la banda izquierda, buena condición física y compromiso defensivo. Tiene experiencia en varios sistemas tácticos, lo que lo hace adaptable a diferentes estilos de juego.',
            'weakness' => 'La constante rotación de equipos ha afectado su confianza y ritmo competitivo. Carece de estadísticas destacadas en ataque y defensa, lo que puede limitar su consideración en equipos de mayor categoría.',
            'skill' => 'Habilidad para mantener un alto nivel físico durante los partidos, adaptabilidad táctica y buen posicionamiento en transiciones defensivas.',
            'comment' => 'A pesar de no haberse consolidado en el profesionalismo, su formación en academias de primer nivel y experiencia en diferentes entornos le dan un perfil interesante. Podría ser una apuesta a futuro si logra estabilidad y confianza en su juego.',
            'conclusion' => 'Jugador joven con experiencia internacional y formación de calidad, pero con una carrera profesional marcada por cesiones. Ideal para equipos que busquen un lateral izquierdo comprometido y con margen de desarrollo.',
            'author' => 'James Broadfield',
            'X' => '@jbroadfield_scout',
            'instagram' => '@broadfield_analysis',
            'stars' => 3.5,
            'player_id' => 12,
        ]);
    }
}
