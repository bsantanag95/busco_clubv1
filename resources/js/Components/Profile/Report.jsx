import { Rating } from "@mui/material";
import Title from "../Title";

const Report = ({ player }) => {
    if (!player.report) {
        return (
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <Title titulo="Reporte Profesional" />
                <p className="px-4 py-2 text-teal-600">
                    Este jugador no tiene reportes.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <Title titulo="Reporte Profesional" />
            <div>
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Reseña
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.review}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Observaciones
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.observation}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Mejoras
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.improvement}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Fortalezas
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.strength}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Debilidades
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.weakness}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Habilidades
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.skill}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Comentarios
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.comment}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Conclusión
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.report.conclusion}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Autor
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            <i>{player.report.author}</i>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="px-4 py-2 font-semibold text-black">
                            Evaluación
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            <Rating
                                name="half-rating-read"
                                defaultValue={player.report.stars}
                                precision={0.5}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;
