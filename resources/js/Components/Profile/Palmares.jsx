import { CreateDistinction, CreateTrophy } from "@/Components/Create";
import { Distinctions, Trophies } from "@/Components/Profile";
import { Title } from "@/Components";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useState } from "react";

const Palmares = ({ player, user, nationalities, seasons }) => {
    const [openModal, setOpenModal] = useState(null);

    const closeModal = () => {
        setOpenModal(null);
    };
    const handleEdit = (type) => {
        setOpenModal(type);
    };

    return (
        <div className="relative bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <Title
                            titulo="Trofeos"
                            icon={<EmojiEventsIcon className="h-5 w-5" />}
                        />
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
                        <Title
                            titulo="Distinciones"
                            icon={<WorkspacePremiumIcon className="h-5 w-5" />}
                        />
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
                    </div>
                    <Distinctions player={player} user={user} />
                </div>
            </div>
        </div>
    );
};

export default Palmares;
