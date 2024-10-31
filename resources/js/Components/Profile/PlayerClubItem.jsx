import StatisticItem from "./StatisticItem";
import EditTrajectoryClubs from "../Edit/EditTrajectoryClubs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const PlayerClubItem = ({ player, user, seasons, clubs, level }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatistic, setSelectedStatistic] = useState(null);
    const [openStatistics, setOpenStatistics] = useState({});

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedStatistic(null);
    };

    const toggleStatistics = (id) => {
        setOpenStatistics((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const removeSeasonPrefix = (season) => {
        return season.replace("Temporada ", "");
    };

    const deleteTrajectory = (statisticsId) => {
        handleDelete(
            statisticsId,
            "statistics.destroy",
            "Esta estadística será eliminada",
            "La estadística ha sido eliminado con éxito"
        );
    };

    const handleEdit = (player) => {
        setSelectedStatistic(player);
        setIsModalOpen(true);
    };

    const filteredStats = player.statistics.filter((p) => p.level === level);

    return (
        <>
            {filteredStats.length > 0 ? (
                filteredStats
                    .sort((a, b) => {
                        if (a.season && b.season) {
                            return (
                                a.season.season_number - b.season.season_number
                            );
                        }
                        return 0;
                    })
                    .map((p, i) => (
                        <ul key={i} className="list-inside space-y-2">
                            <li>
                                <div className="text-teal-600 px-2 py-1 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span>
                                            {p.season
                                                ? removeSeasonPrefix(
                                                      p.season.season
                                                  )
                                                : "Sin información de temporadas"}
                                        </span>
                                        {p.club && p.club.logo ? (
                                            <div className="flex items-center space-x-2 ml-4">
                                                <img
                                                    src={`/storage/${p.club.logo}`}
                                                    className="w-6 h-5 rounded-full"
                                                    alt={`${p.club.name} logo`}
                                                />
                                                <span>{p.club.name}</span>
                                            </div>
                                        ) : (
                                            <div className="ml-4">
                                                Logo no disponible
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex space-x-2">
                                        {openStatistics[p.id] ? (
                                            <ArrowDropUpIcon
                                                className="cursor-pointer text-teal-600"
                                                onClick={() =>
                                                    toggleStatistics(p.id)
                                                }
                                            />
                                        ) : (
                                            <ArrowDropDownIcon
                                                className="cursor-pointer text-teal-600"
                                                onClick={() =>
                                                    toggleStatistics(p.id)
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
                                                        deleteTrajectory(p.id)
                                                    }
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <DeleteIcon />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                {openStatistics[p.id] && (
                                    <StatisticItem
                                        statistic={p}
                                        positions={player.positions}
                                    />
                                )}
                            </li>
                        </ul>
                    ))
            ) : (
                <div className="text-teal-600 px-2 py-1">
                    No posee registros
                </div>
            )}
            {isModalOpen && selectedStatistic && (
                <EditTrajectoryClubs
                    statistic={selectedStatistic}
                    player={player}
                    seasons={seasons}
                    clubs={clubs}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default PlayerClubItem;
