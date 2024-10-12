import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Rating } from "@mui/material";
import Title from "../Title";
import EditReport from "../Edit/EditReport";
import CreateReport from "../Create/CreateReport";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const Report = ({ player, user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const deleteReport = (reportId) => {
        handleDelete(
            reportId,
            "reports.destroy",
            "Este reporte será eliminado",
            "El reporte ha sido eliminado con éxito"
        );
    };

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center">
                <Title titulo="Reporte Profesional" />
                {user && (
                    <>
                        <button
                            className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                            title="Editar perfil"
                            onClick={() => handleEdit("edit")}
                        >
                            <EditOutlinedIcon
                                style={{
                                    fontSize: "1.2rem",
                                }}
                            />
                        </button>
                        <button
                            className="ml-2 w-8 h-8 p-1 hover:bg-red-200 rounded-full flex justify-center items-center"
                            title="Eliminar perfil"
                            onClick={() => deleteReport(player.report.id)}
                        >
                            <DeleteIcon
                                style={{
                                    fontSize: "1.2rem",
                                }}
                            />
                        </button>
                    </>
                )}
            </div>

            {!player.report ? (
                <p className="px-4 py-2 text-teal-600">
                    Este jugador no tiene reportes.
                </p>
            ) : (
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
                                    value={player.report.stars}
                                    precision={0.5}
                                    readOnly
                                    onChange={(e, newValue) =>
                                        setData("stars", newValue)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <>
                    {player.report ? (
                        <EditReport
                            player={player}
                            report={player.report}
                            onClose={closeModal}
                        />
                    ) : (
                        <CreateReport player={player} onClose={closeModal} />
                    )}
                </>
            )}
        </div>
    );
};

export default Report;
