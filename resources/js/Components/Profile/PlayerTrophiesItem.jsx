import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import handleDelete from "@/Utils/handleDelete";
import EditTrajectoryTrophies from "../Edit/EditTrajectoryTrophies";
import { useState } from "react";

const PlayerTrophiesItem = ({ player, nationalities, seasons }) => {
    const [selectedTrophy, setSelectedTrophy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openDescriptions, setOpenDescriptions] = useState({});

    const removeSeasonPrefix = (season) => {
        return season.replace("Temporada ", "");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTrophy(null);
    };

    const deleteTrophy = (trophyId) => {
        handleDelete(
            trophyId,
            "trophies.destroy",
            "Este trofeo será eliminado",
            "El trofeo ha sido eliminado con éxito"
        );
    };

    const handleEdit = (trophy) => {
        setSelectedTrophy(trophy);
        setIsModalOpen(true);
    };

    const toggleDescription = (id) => {
        setOpenDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            {player.trophies.length > 0 ? (
                player.trophies.map((trophy, index) => (
                    <ul key={index} className="list-inside space-y-2">
                        <li>
                            <div className="flex justify-between items-center ml-4">
                                <div className="flex items-center space-x-2">
                                    {trophy.level === "Nacional" &&
                                    trophy.nationality ? (
                                        <img
                                            src={`/storage/${trophy.nationality.flag}`}
                                            className="w-6 h-5 rounded-full"
                                            alt={`${trophy.nationality.country} logo`}
                                        />
                                    ) : (
                                        <img
                                            src={`/storage/logos/${trophy.organizer}.png`}
                                            className="w-6 h-5"
                                            alt={`${trophy.organizer} logo`}
                                        />
                                    )}
                                    <span className="text-teal-600">
                                        {trophy.name}
                                        {trophy.level === "Nacional" &&
                                        trophy.season_id
                                            ? ` (${removeSeasonPrefix(
                                                  trophy.season.season
                                              )})`
                                            : ` (${trophy.year})`}
                                    </span>
                                </div>
                                <div className="flex space-x-2 ml-auto">
                                    {openDescriptions[trophy.id] ? (
                                        <ArrowDropUpIcon
                                            className="cursor-pointer text-teal-600"
                                            onClick={() =>
                                                toggleDescription(trophy.id)
                                            }
                                        />
                                    ) : (
                                        <ArrowDropDownIcon
                                            className="cursor-pointer text-teal-600"
                                            onClick={() =>
                                                toggleDescription(trophy.id)
                                            }
                                        />
                                    )}
                                    <button
                                        onClick={() => handleEdit(trophy)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <EditIcon />
                                    </button>
                                    <button
                                        onClick={() => deleteTrophy(trophy.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                            {openDescriptions[trophy.id] && (
                                <div className="ml-10 mt-2 text-gray-500 text-xs">
                                    {trophy.level === "Nacional" && (
                                        <>
                                            <span>
                                                <img
                                                    src={`/storage/${trophy.club.logo}`}
                                                    className="w-6 h-5 inline-block"
                                                    alt={`${trophy.club.name} logo`}
                                                />
                                                {` ${trophy.club.name} - ${trophy.category}`}
                                            </span>
                                        </>
                                    )}

                                    {trophy.level === "Internacional" && (
                                        <>
                                            <span>
                                                <img
                                                    src={`/storage/${trophy.club.logo}`}
                                                    className="w-6 h-5 inline-block"
                                                    alt={`${trophy.club.name} logo`}
                                                />
                                                {` ${trophy.club.name}`}
                                            </span>
                                        </>
                                    )}

                                    {trophy.level === "Selección" && (
                                        <>
                                            <span>
                                                <img
                                                    src={`/storage/${trophy.national_team.flag}`}
                                                    className="w-6 h-5 inline-block rounded-full"
                                                    alt={`${trophy.national_team.country} flag`}
                                                />
                                                {` ${trophy.national_team.country}`}
                                            </span>
                                        </>
                                    )}
                                </div>
                            )}
                        </li>
                    </ul>
                ))
            ) : (
                <div className="text-teal-600 px-2 py-1">
                    No ha ganado trofeos
                </div>
            )}
            {isModalOpen && selectedTrophy && (
                <EditTrajectoryTrophies
                    player={player}
                    trophy={selectedTrophy}
                    nationalities={nationalities}
                    seasons={seasons}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default PlayerTrophiesItem;
