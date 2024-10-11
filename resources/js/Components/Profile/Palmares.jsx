import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Trophies from "./Trophies";
import CreateTrophy from "../Create/CreateTrophy";
import CreateDistinction from "../Create/CreateDistinction";
import { useState } from "react";
import Distinctions from "./Distinctions";

const Palmares = ({ player, user, nationalities, seasons }) => {
    const [openModal, setOpenModal] = useState(null);

    const closeModal = () => {
        setOpenModal(null);
    };
    const handleEdit = (type) => {
        setOpenModal(type);
    };

    return (
        <div className="grid grid-cols-2 gap-6">
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
                    <span className="tracking-wide flex items-center">
                        Títulos
                        {user && (
                            <button
                                className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                                title="Editar perfil"
                                onClick={() => handleEdit("trophies")}
                            >
                                <EditOutlinedIcon
                                    style={{ fontSize: "1.2rem" }}
                                />
                            </button>
                        )}
                        {openModal === "trophies" && (
                            <CreateTrophy
                                player={player}
                                nationalities={nationalities}
                                seasons={seasons}
                                onClose={closeModal}
                            />
                        )}
                    </span>
                </div>
                <Trophies
                    player={player}
                    user={user}
                    nationalities={nationalities}
                    seasons={seasons}
                />
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
                    <span className="tracking-wide flex items-center">
                        Distinciones
                        {user && (
                            <button
                                className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                                title="Editar perfil"
                                onClick={() => handleEdit("distinction")}
                            >
                                <EditOutlinedIcon
                                    style={{ fontSize: "1.2rem" }}
                                />
                            </button>
                        )}
                        {openModal === "distinction" && (
                            <CreateDistinction
                                player={player}
                                onClose={closeModal}
                            />
                        )}
                    </span>
                </div>
                <Distinctions player={player} user={user} />
            </div>
        </div>
    );
};

export default Palmares;
