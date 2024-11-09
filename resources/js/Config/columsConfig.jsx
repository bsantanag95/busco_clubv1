import { Link } from "@inertiajs/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const handleLinkClick = (id, slug) => {
    window.open(`/jugador/${id}/${slug}`, "_blank");
};

export const playerColumn = (user, handleEdit, deletePlayer) =>
    [
        {
            header: "Jugador/a",
            accessorKey: "profile_photo",
            cell: ({ row }) => {
                const profilePhoto = row.original.profile_photo;
                const defaultPhoto = "storage/players/default.jpg";
                return (
                    <div className="flex space-x-2">
                        <img
                            src={`storage/${profilePhoto}`}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultPhoto;
                            }}
                            className="w-11 h-11 rounded-full object-cover"
                        />
                    </div>
                );
            },
        },
        {
            header: "Nombre",
            accessorKey: "name",
            cell: ({ row }) => {
                return (
                    <Link
                        preserve-scroll="true"
                        onClick={() =>
                            handleLinkClick(row.original.id, row.original.slug)
                        }
                    >
                        {row.original.name}
                    </Link>
                );
            },
        },
        {
            header: "Posición",
            accessorFn: (row) =>
                row.positions.map((position) => position.short_name).join(", "),
            id: "positions",
        },
        {
            header: "Nacionalidad",
            id: "nationalities",
            accessorFn: (row) =>
                row.nationalities
                    .map((nationality) => nationality.country)
                    .join(", "),
            cell: ({ row }) => {
                const nationalities = row.original.nationalities;
                return (
                    <div className="flex space-x-2">
                        {nationalities.map((nationality, index) => (
                            <img
                                key={index}
                                src={nationality.flag}
                                alt={`Bandera de ${nationality.country}`}
                                className="w-6 h-5 rounded-full m-1"
                            />
                        ))}
                    </div>
                );
            },
        },
        {
            header: "Edad",
            accessorKey: "age",
        },
        {
            header: "Género",
            accessorFn: (row) => {
                const gender = row.gender;
                if (gender === "Masculino") {
                    return "M";
                } else if (gender === "Femenino") {
                    return "F";
                } else {
                    return gender;
                }
            },
            id: "gender",
        },
        {
            header: "Último Club",
            accessorKey: "last_club",
            cell: ({ row }) => {
                const lastClub = row.original.last_club;

                if (lastClub) {
                    const flagSrc = lastClub.nationality
                        ? lastClub.nationality.flag
                        : null;

                    return (
                        <div className="flex space-x-2">
                            {flagSrc && (
                                <img
                                    src={flagSrc}
                                    className="w-6 h-5 rounded-full mr-2"
                                    alt={`Flag of ${lastClub.name}`}
                                />
                            )}
                            <b>{lastClub.name}</b>
                        </div>
                    );
                } else {
                    return <b>Último club no registrado</b>;
                }
            },
        },
        {
            header: "Redes Sociales",
            cell: ({ row }) => {
                const ig = row.original.instagram;
                const x = row.original.x;
                return (
                    <div className="flex space-x-2">
                        {ig && (
                            <a
                                href={ig}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="logos/instagram.png"
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
                                    src="logos/x.png"
                                    alt="X"
                                    className="w-7 h-7 object-cover cursor-pointer hover:scale-110 hover:border-gray-300 hover:shadow-lg transition-transform duration-300"
                                />
                            </a>
                        )}
                    </div>
                );
            },
        },
        user && {
            header: "Acciones",
            accessorKey: "actions",
            id: "actions",
            cell: ({ row }) => {
                const playerId = row.original.id;
                const playerName = row.original.name;
                const player = row.original;
                return (
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handleEdit(player)}
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <EditIcon />
                        </button>
                        <button
                            onClick={() => deletePlayer(playerId, playerName)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <DeleteIcon />
                        </button>
                    </div>
                );
            },
        },
    ].filter(Boolean);
