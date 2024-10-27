import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import CreateTrajectoryClubs from "../Create/CreateTrajectoryClubs";
import { useState } from "react";
import Title from "../Title";
import PlayerStatisticItem from "./PlayerStatisticItem";
import CreateTrajectoryNationalTeam from "../Create/CreateTrajectoryNationalTeam";
import PlayerNationalItem from "./PlayerNationalItem";

const Trajectory = ({ player, user, clubs, seasons, nationalities }) => {
    const [openLevel, setOpenLevel] = useState(null);

    const closeModal = () => {
        setOpenLevel(null);
    };

    const handleEdit = (level) => {
        setOpenLevel(level);
    };

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <Title
                            titulo="Clubes"
                            icon={<SportsSoccerIcon className="h-5 w-5" />}
                        />
                        {user && (
                            <button
                                className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                                title="Editar perfil"
                                onClick={() => handleEdit("senior")}
                            >
                                <EditOutlinedIcon
                                    style={{ fontSize: "1.2rem" }}
                                />
                            </button>
                        )}
                        {openLevel === "senior" && (
                            <CreateTrajectoryClubs
                                player={player}
                                seasons={seasons}
                                clubs={clubs}
                                level="senior"
                                onClose={closeModal}
                            />
                        )}
                    </div>
                    <PlayerStatisticItem
                        player={player}
                        user={user}
                        seasons={seasons}
                        clubs={clubs}
                        level="senior"
                    />
                </div>
                <div>
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <Title
                                titulo="Inferiores"
                                icon={<SchoolIcon className="h-5 w-5" />}
                            />
                            {user && (
                                <button
                                    className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                                    title="Editar perfil"
                                    onClick={() => handleEdit("youth")}
                                >
                                    <EditOutlinedIcon
                                        style={{ fontSize: "1.2rem" }}
                                    />
                                </button>
                            )}
                            {openLevel === "youth" && (
                                <CreateTrajectoryClubs
                                    player={player}
                                    seasons={seasons}
                                    clubs={clubs}
                                    level="youth"
                                    onClose={closeModal}
                                />
                            )}
                        </div>
                        <PlayerStatisticItem
                            player={player}
                            user={user}
                            seasons={seasons}
                            clubs={clubs}
                            level="youth"
                        />
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <Title
                                titulo="Selección Nacional"
                                icon={<PublicIcon className="h-5 w-5" />}
                            />
                            {user && (
                                <button
                                    className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                                    title="Editar perfil"
                                    onClick={() => handleEdit("nationals")}
                                >
                                    <EditOutlinedIcon
                                        style={{ fontSize: "1.2rem" }}
                                    />
                                </button>
                            )}
                            {openLevel === "nationals" && (
                                <CreateTrajectoryNationalTeam
                                    player={player}
                                    onClose={closeModal}
                                />
                            )}
                        </div>
                        <PlayerNationalItem
                            player={player}
                            user={user}
                            nationalities={nationalities}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trajectory;
