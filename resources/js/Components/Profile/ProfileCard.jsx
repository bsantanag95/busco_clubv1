import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import es from "dayjs/locale/es";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import EditProfileCard from "@/Pages/Players/Edit/EditProfileCard";

dayjs.locale(es);
dayjs.extend(relativeTime);

const ProfileCard = ({ player, user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    function status() {
        const statusMap = {
            1: "Retirado",
            2: "Buscando",
            3: "Contratado",
        };
        return statusMap[player.status];
    }

    function getStatusClassName() {
        const statusMap = {
            1: "bg-red-500",
            2: "bg-yellow-500",
            3: "bg-green-500",
        };
        return statusMap[player.status];
    }

    return (
        <div className="relative bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
                <img
                    className="h-[170px] w-full mx-auto object-cover"
                    src={`/storage/${player.profile_photo}`}
                    alt="profile"
                />
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-gray-900 font-bold text-lg leading-8 my-1">
                    {player.name}
                </h1>
                {user && (
                    <button
                        className="ml-2 p-1 bg-gray-800 text-white rounded-full hover:bg-gray-500"
                        title="Editar perfil"
                        onClick={handleEdit}
                    >
                        <EditOutlinedIcon />
                    </button>
                )}
            </div>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {player.attribute}
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {player.description}
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                    <span>Estado</span>
                    <span className="ml-auto">
                        <span
                            className={`${getStatusClassName()} py-1 px-2 rounded text-white text-sm`}
                        >
                            {status()}
                        </span>
                    </span>
                </li>
                {player.status !== "3" && (
                    <li className="flex items-center py-3">
                        <span>Sin club</span>
                        <span className="ml-auto">
                            {dayjs(player.inactive_date).fromNow()}
                        </span>
                    </li>
                )}
            </ul>
            {isModalOpen && (
                <EditProfileCard player={player} onClose={closeModal} />
            )}
        </div>
    );
};

export { ProfileCard };
