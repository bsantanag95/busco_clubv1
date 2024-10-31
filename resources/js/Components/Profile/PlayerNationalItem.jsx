import EditTrajectoryNationals from "../Edit/EditTrajectoryNationals";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const PlayerNationalItem = ({ player, user, nationalities }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNational, setSelectedNational] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNational(null);
    };

    const deleteNational = (nationalId) => {
        handleDelete(
            nationalId,
            "nationals.destroy",
            "Esta estadística será eliminada",
            "La estadística ha sido eliminado con éxito"
        );
    };

    const handleEdit = (national) => {
        setSelectedNational(national);
        setIsModalOpen(true);
    };

    const [openDescriptions, setOpenDescriptions] = useState({});

    const toggleDescription = (id) => {
        setOpenDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            {player.nationals.length > 0 ? (
                player.nationals
                    .sort((a, b) => a.first_year - b.first_year)
                    .map((p, i) => {
                        return (
                            <ul key={i} className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600 px-2 py-1 flex items-center justify-between space-x-10">
                                        <div className="flex items-center space-x-10">
                                            <span className="min-w-[85px]">
                                                {p.first_year === p.last_year
                                                    ? p.first_year
                                                    : `${p.first_year} - ${p.last_year}`}
                                            </span>
                                            {p.nationality &&
                                            p.nationality.flag ? (
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={`/storage/${p.nationality.flag}`}
                                                        className="w-6 h-5 rounded-full mr-2"
                                                        alt={`${p.nationality.country} logo`}
                                                    />
                                                    <span>{p.category}</span>
                                                </div>
                                            ) : (
                                                <div>Bandera no disponible</div>
                                            )}
                                        </div>
                                        <div className="flex space-x-2">
                                            {openDescriptions[p.id] ? (
                                                <ArrowDropUpIcon
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        toggleDescription(p.id)
                                                    }
                                                />
                                            ) : (
                                                <ArrowDropDownIcon
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        toggleDescription(p.id)
                                                    }
                                                />
                                            )}

                                            {user && (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(p)
                                                        }
                                                        className="text-blue-500 hover:text-blue-700"
                                                    >
                                                        <EditIcon />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            deleteNational(p.id)
                                                        }
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <DeleteIcon />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {openDescriptions[p.id] &&
                                        p.description && (
                                            <div className="text-teal-600 px-2 py-1">
                                                {p.description}
                                            </div>
                                        )}
                                </li>
                            </ul>
                        );
                    })
            ) : (
                <div className="text-teal-600 px-2 py-1">
                    Nunca ha estado en una selección
                </div>
            )}
            {isModalOpen && selectedNational && (
                <EditTrajectoryNationals
                    player={player}
                    national={selectedNational}
                    nationalities={nationalities}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default PlayerNationalItem;
