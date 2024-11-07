import { Link } from "@inertiajs/react";
import DeleteIcon from "@mui/icons-material/Delete";

const handleLinkClick = (id, slug) => {
    window.open(`/jugador/${id}/${slug}`, "_blank");
};

export const latestColumn = (user, handleDelete) =>
    [
        {
            header: "Jugador/a",
            accessorKey: "player.profile_photo",
            cell: ({ row }) => {
                const profilePhoto = row.original.player.profile_photo;
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
            accessorKey: "player.name",
            cell: ({ row }) => {
                return (
                    <Link
                        preserve-scroll="true"
                        onClick={() =>
                            handleLinkClick(
                                row.original.player.id,
                                row.original.player.slug
                            )
                        }
                    >
                        {row.original.player.name}
                    </Link>
                );
            },
        },
        {
            header: "Posición",
            accessorFn: (row) =>
                row.player.positions
                    .map((position) => position.short_name)
                    .join(", "),
            id: "player.positions",
        },
        {
            header: "Nacionalidad",
            accessorFn: (row) =>
                row.player.nationalities
                    .map((nationality) => nationality.country)
                    .join(", "),
            id: "player.nationalities",
            cell: ({ row }) => {
                const nationalities = row.original.player.nationalities;
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
            accessorKey: "player.age",
        },
        {
            header: "Género",
            accessorFn: (row) => {
                const gender = row.player.gender;
                if (gender === "Masculino") {
                    return "M";
                } else if (gender === "Femenino") {
                    return "F";
                } else {
                    return gender;
                }
            },
            id: "player.gender",
        },
        {
            header: "Nuevo Club",
            accessorKey: "club.name",
            cell: ({ row }) => {
                return (
                    <div className="flex space-x-2">
                        <img
                            src={`storage/${row.original.club.logo}`}
                            className="w-6 h-5 rounded-full mr-2"
                        />
                        <b>{row.original.club.name}</b>
                    </div>
                );
            },
        },
        {
            header: "Redes Sociales",
            cell: ({ row }) => {
                const ig = row.original.player.instagram;
                const x = row.original.player.x;
                return (
                    <div className="flex space-x-2">
                        {ig && (
                            <a
                                href={ig}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="storage/images/instagram.png"
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
                                    src="storage/images/x.png"
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
                const transferId = row.original.id;
                return (
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handleDelete(transferId)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <DeleteIcon />
                        </button>
                    </div>
                );
            },
        },
    ].filter(Boolean);
