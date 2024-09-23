import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const clubsConfig = (handleEdit, handleDelete) => [
    {
        header: "Logo",
        accessorKey: "logo",
        cell: ({ row }) => {
            const logo = row.original.logo;
            const defaultPhoto = "storage/clubs/default.jpg";
            return (
                <div className="flex space-x-2">
                    <img
                        src={`storage/${logo}`}
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
        header: "Club",
        accessorKey: "name",
    },
    {
        header: "Pais",
        accessorKey: "nationality.country",
        cell: ({ row }) => {
            return (
                <div className="flex items-center space-x-2">
                    <img
                        src={`storage/${row.original.nationality.flag}`}
                        alt={`Bandera de ${row.original.nationality.country}`}
                        className="w-6 h-5 rounded-full m-1"
                    />
                    <div>{row.original.nationality.country}</div>
                </div>
            );
        },
    },
    {
        header: "Acciones",
        accessorKey: "actions",
        cell: ({ row }) => {
            const clubId = row.original.id;
            const club = row.original;
            return (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleEdit(club)}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <EditIcon />
                    </button>
                    <button
                        onClick={() => handleDelete(clubId)}
                        className="text-red-500 hover:text-red-700"
                    >
                        <DeleteIcon />
                    </button>
                </div>
            );
        },
    },
];
