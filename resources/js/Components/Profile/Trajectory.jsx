import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CreateTrajectoryClubs from "../Create/CreateTrajectoryClubs";
import { useState } from "react";

const Trajectory = ({ player, user, clubs, seasons }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const removeSeasonPrefix = (season) => {
        return season.replace("Temporada ", "");
    };
    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                        <span className="tracking-wide flex items-center">
                            Clubes
                            {user && (
                                <button
                                    className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                                    title="Editar perfil"
                                    onClick={handleEdit}
                                >
                                    <EditOutlinedIcon
                                        style={{ fontSize: "1.2rem" }}
                                    />
                                </button>
                            )}
                            {isModalOpen && (
                                <CreateTrajectoryClubs
                                    player={player}
                                    clubs={clubs}
                                    seasons={seasons}
                                    onClose={closeModal}
                                />
                            )}
                        </span>
                    </div>
                    {player.statistics.filter((p) => p.level === "senior")
                        .length > 0 ? (
                        player.statistics
                            .filter((p) => p.level === "senior")
                            .sort((a, b) => {
                                if (a.season && b.season) {
                                    return (
                                        a.season.season_number -
                                        b.season.season_number
                                    );
                                }
                                return 0;
                            })
                            .map((p, i) => (
                                <ul key={i} className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600 px-2 py-1 flex items-center space-x-10">
                                            <span>
                                                {p.season
                                                    ? removeSeasonPrefix(
                                                          p.season.season
                                                      )
                                                    : "Sin informacion de temporadas"}
                                            </span>
                                            {p.club && p.club.logo ? (
                                                <div className="flex items-center space-x-2 ml-auto">
                                                    <img
                                                        src={`/storage/${p.club.logo}`}
                                                        className="w-6 h-5 rounded-full mr-2"
                                                        alt={`${p.club.name} logo`}
                                                    />
                                                    <span>{p.club.name}</span>
                                                </div>
                                            ) : (
                                                <div>Logo no disponible</div>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            ))
                    ) : (
                        <div className="text-teal-600 px-2 py-1">
                            No posee registros
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-green-500">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l6.16-3.422A12.093 12.093 0 0121 9.514M12 14v8m0-8l-6.16-3.422A12.093 12.093 0 013 9.514M12 14L3 9.514m18 0a12.093 12.093 0 01-6.84 1.68M21 9.514a12.093 12.093 0 00-6.84-1.68m0 0L12 5m6.16 3.422L12 14m0-9L5.84 8.936M12 5L3 9.514"
                                />
                            </svg>
                        </span>
                        <span className="tracking-wide">Palmarés</span>
                    </div>
                    {player.trophies.length > 0 ? (
                        player.trophies.map((trophy, index) => (
                            <ul key={index} className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">
                                        {trophy.name}
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                        {trophy.country} - {trophy.season}
                                    </div>
                                </li>
                            </ul>
                        ))
                    ) : (
                        <div className="text-teal-600 px-2 py-1">
                            No ha ganado trofeos
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 mt-6">
                        <span className="text-green-500">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l6.16-3.422A12.093 12.093 0 0121 9.514M12 14v8m0-8l-6.16-3.422A12.093 12.093 0 013 9.514M12 14L3 9.514m18 0a12.093 12.093 0 01-6.84 1.68M21 9.514a12.093 12.093 0 00-6.84-1.68m0 0L12 5m6.16 3.422L12 14m0-9L5.84 8.936M12 5L3 9.514"
                                />
                            </svg>
                        </span>
                        <span className="tracking-wide">Inferiores</span>
                    </div>
                    {player.statistics.filter((p) => p.level === "youth")
                        .length > 0 ? (
                        player.statistics
                            .filter((p) => p.level === "youth")
                            .sort((a, b) => {
                                if (a.season && b.season) {
                                    return (
                                        a.season.season_number -
                                        b.season.season_number
                                    );
                                }
                                return 0;
                            })
                            .map((p, i) => (
                                <ul key={i} className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600 px-2 py-1 flex items-center space-x-10">
                                            <span>
                                                {p.season
                                                    ? removeSeasonPrefix(
                                                          p.season.season
                                                      )
                                                    : "Sin informacion de temporadas"}
                                            </span>
                                            {p.club && p.club.logo ? (
                                                <div className="flex items-center space-x-2 ml-auto">
                                                    <img
                                                        src={`/storage/${p.club.logo}`}
                                                        className="w-6 h-5 rounded-full mr-2"
                                                        alt={`${p.club.name} logo`}
                                                    />
                                                    <span>{p.club.name}</span>
                                                </div>
                                            ) : (
                                                <div>Logo no disponible</div>
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            ))
                    ) : (
                        <div className="text-teal-600 px-2 py-1">
                            No hizo inferiores en ningún club
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 mt-6">
                        <span className="text-green-500">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l6.16-3.422A12.093 12.093 0 0121 9.514M12 14v8m0-8l-6.16-3.422A12.093 12.093 0 013 9.514M12 14L3 9.514m18 0a12.093 12.093 0 01-6.84 1.68M21 9.514a12.093 12.093 0 00-6.84-1.68m0 0L12 5m6.16 3.422L12 14m0-9L5.84 8.936M12 5L3 9.514"
                                />
                            </svg>
                        </span>
                        <span className="tracking-wide">
                            Selección Nacional
                        </span>
                    </div>
                    {player.nationals.length > 0 ? (
                        player.nationals.map((p, i) => (
                            <ul key={i} className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600 px-2 py-1 flex items-center space-x-10">
                                        <span>{p.year}</span>
                                        {p.nationality && p.nationality.flag ? (
                                            <div className="flex items-center space-x-2 ml-auto">
                                                <img
                                                    src={`/storage/${p.nationality.flag}`}
                                                    className="w-6 h-5 rounded-full mr-2"
                                                    alt={`${p.nationality.country} logo`}
                                                />
                                                <span>{p.name}</span>
                                            </div>
                                        ) : (
                                            <div>Bandera no disponible</div>
                                        )}
                                    </div>
                                </li>
                            </ul>
                        ))
                    ) : (
                        <div className="text-teal-600 px-2 py-1">
                            Nunca ha estado en una selección
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Trajectory;
