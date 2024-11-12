import EditAbout from "@/Components/Edit/EditAbout";
import Title from "../Title";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import es from "dayjs/locale/es";
import Person2Icon from "@mui/icons-material/Person2";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";

dayjs.locale(es);
dayjs.extend(relativeTime);

const About = ({ player, user, nationalities, positions, clubs }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const nat = player.nationalities;
    const pos = player.positions;
    const ig = player.instagram;
    const x = player.x;

    return (
        <div className="relative bg-gray-100 p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <Title
                    titulo="Perfil"
                    icon={<Person2Icon className="h-5 w-5" />}
                />
                {user && (
                    <button
                        className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                        title="Editar perfil"
                        onClick={handleEdit}
                    >
                        <EditOutlinedIcon style={{ fontSize: "1.2rem" }} />
                    </button>
                )}
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Nombre</div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.name}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold ">Edad</div>
                        <div className="px-4 py-2 text-teal-600">
                            {dayjs(player.date_of_birth).toNow(true)} (
                            {dayjs(player.date_of_birth).format("DD/MM/YYYY")})
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Género</div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.gender}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Pie</div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.foot}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                            Nacionalidad
                        </div>
                        <div className="px-4 py-2 flex flex-wrap">
                            {nat.length > 0 ? (
                                nat.map((nationality, index) => (
                                    <img
                                        key={index}
                                        src={`/${nationality.flag}`}
                                        alt={`Bandera de ${nationality.country}`}
                                        className="w-6 h-5 rounded-full m-1"
                                    />
                                ))
                            ) : (
                                <span className="text-teal-600">
                                    No disponible
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                            Lugar de nacimiento
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.place_of_birth}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                            Posiciones
                        </div>
                        <div className="px-4 py-2 text-teal-600 flex flex-wrap">
                            {pos.map((position, index) => (
                                <div className="px-1 py-1" key={index}>
                                    {position.short_name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Estatura</div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.height
                                ? `${player.height} cm`
                                : "Sin datos"}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                            Representante
                        </div>
                        <div className="px-4 py-2 text-teal-600">
                            {player.agent ? player.agent : "Sin representante"}
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                            Redes Sociales
                        </div>
                        <div className="px-4 py-2 flex space-x-2">
                            {ig && (
                                <a
                                    href={ig}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/logos/instagram.png"
                                        alt="Instagram"
                                        className="w-6 h-6 object-cover shadow-md cursor-pointer hover:scale-110 hover:border-gray-300 hover:shadow-lg transition-transform duration-300"
                                    />
                                </a>
                            )}
                            {x && (
                                <a
                                    href={x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/logos/x.png"
                                        alt="X"
                                        className="w-7 h-7 object-cover cursor-pointer hover:scale-110 hover:border-gray-300 hover:shadow-lg transition-transform duration-300"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                    {player.status === "2" &&
                        player.last_club &&
                        player.last_club.nationality && (
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    Último club
                                </div>
                                <div className="px-4 py-2 flex">
                                    <img
                                        src={`/${player.last_club.nationality.flag}`}
                                        className="w-6 h-5 rounded-full mr-2"
                                        alt={`Bandera de ${player.last_club.nationality.country}`}
                                    />
                                    <b>{player.last_club.name}</b>
                                </div>
                            </div>
                        )}
                    {player.status === "3" &&
                        player.transfers &&
                        player.transfers.length > 0 &&
                        player.transfers[player.transfers.length - 1].club && (
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    Nuevo club
                                </div>
                                <div className="px-4 py-2 flex space-x-2">
                                    <img
                                        src={`/storage/${
                                            player.transfers[
                                                player.transfers.length - 1
                                            ].club.logo
                                        }`}
                                        className="w-6 h-5 rounded-full mr-2"
                                        alt={`Logo del club ${
                                            player.transfers[
                                                player.transfers.length - 1
                                            ].club.name
                                        }`}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                        }}
                                    />
                                    <b>
                                        {
                                            player.transfers[
                                                player.transfers.length - 1
                                            ].club.name
                                        }
                                    </b>
                                </div>
                            </div>
                        )}
                </div>
            </div>

            {isModalOpen && (
                <EditAbout
                    player={player}
                    nationalities={nationalities}
                    positions={positions}
                    clubs={clubs}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default About;
