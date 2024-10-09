import Table from "@/Components/Table";
import Main from "@/Layouts/MainLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { playerColumn } from "@/Config/columsConfig.jsx";
import { usePage } from "@inertiajs/react";
import EditIndex from "../../Components/Edit/EditIndex";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const Index = ({ players, positions, nationalities, clubs }) => {
    const { auth } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlayer(null);
    };

    const handleEdit = (player) => {
        setSelectedPlayer(player);
        setIsModalOpen(true);
    };

    const deletePlayer = (playerId, playerName) => {
        handleDelete(
            playerId,
            "players.destroy",
            `¿Eliminar a ${playerName}?`,
            `${playerName} ha sido eliminado con éxito`
        );
    };

    const columns = playerColumn(auth.user, handleEdit, deletePlayer);

    return (
        <>
            {auth.user ? (
                <Authenticated user={auth.user}>
                    <Table columns={columns} data={players}></Table>
                    {isModalOpen && selectedPlayer && (
                        <EditIndex
                            player={selectedPlayer}
                            positions={positions}
                            nationalities={nationalities}
                            clubs={clubs}
                            onClose={closeModal}
                        />
                    )}
                </Authenticated>
            ) : (
                <Main>
                    <Table columns={columns} data={players}></Table>
                </Main>
            )}
        </>
    );
};

export default Index;
