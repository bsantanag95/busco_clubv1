import EditDistinction from "../Edit/EditDistinction";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const Distinctions = ({ player, user }) => {
    const [selectedDistinction, setSelectedDistinction] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openDescriptions, setOpenDescriptions] = useState({});

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDistinction(null);
    };

    const deleteDistinction = (distinctionId) => {
        handleDelete(
            distinctionId,
            "distinctions.destroy",
            "Esta distinción será eliminado",
            "La distinción ha sido eliminada con éxito"
        );
    };

    const handleEdit = (distinction) => {
        setSelectedDistinction(distinction);
        setIsModalOpen(true);
    };

    const toggleDescription = (id) => {
        setOpenDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            {player.distinctions.length > 0 ? (
                player.distinctions.map((distinction, index) => (
                    <ul key={index} className="list-inside space-y-2">
                        <li>
                            <div className="flex justify-between items-center ml-4">
                                <div className="text-teal-600">
                                    {distinction.year}: {distinction.name}
                                </div>

                                <div className="flex space-x-2 ml-auto">
                                    {openDescriptions[distinction.id] ? (
                                        <ArrowDropUpIcon
                                            className="cursor-pointer text-teal-600"
                                            onClick={() =>
                                                toggleDescription(
                                                    distinction.id
                                                )
                                            }
                                        />
                                    ) : (
                                        <ArrowDropDownIcon
                                            className="cursor-pointer text-teal-600"
                                            onClick={() =>
                                                toggleDescription(
                                                    distinction.id
                                                )
                                            }
                                        />
                                    )}
                                    {user && (
                                        <>
                                            <button
                                                onClick={() =>
                                                    handleEdit(distinction)
                                                }
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <EditIcon />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteDistinction(
                                                        distinction.id
                                                    )
                                                }
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <DeleteIcon />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                            {openDescriptions[distinction.id] && (
                                <div className="ml-6 mt-2 text-teal-600">
                                    {distinction.description}
                                </div>
                            )}
                        </li>
                    </ul>
                ))
            ) : (
                <div className="text-teal-600 px-2 py-1">
                    No ha obtenido distinciones
                </div>
            )}
            {isModalOpen && selectedDistinction && (
                <EditDistinction
                    distinction={selectedDistinction}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default Distinctions;
