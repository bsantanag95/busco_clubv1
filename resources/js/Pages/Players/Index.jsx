import Table from "@/Components/Table";
import Main from "@/Layouts/MainLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { playerColumn } from "@/Config/columsConfig.jsx";
import { usePage } from "@inertiajs/react";
import EditIndex from "./Edit/EditIndex";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

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

    const handleDelete = (playerId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No hay vuelta atrás",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar jugador",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("players.destroy", playerId));

                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El jugador ha sido eliminado",
                    icon: "success",
                });
            }
        });
    };

    const columns = playerColumn(auth.user, handleEdit, handleDelete);

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
