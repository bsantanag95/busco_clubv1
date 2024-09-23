import Authenticated from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import { clubsConfig } from "@/Config/clubsConfig";
import EditClub from "@/Pages/Clubs/EditClub";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import { useState } from "react";

const ManageClubs = ({ auth, clubs, nationalities }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClub, setSelectedClub] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedClub(null);
    };

    const handleEdit = (club) => {
        setSelectedClub(club);
        setIsModalOpen(true);
    };

    const handleDelete = (clubId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No hay vuelta atrás",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar club",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("clubs.destroy", clubId));

                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El club ha sido eliminado",
                    icon: "success",
                });
            }
        });
    };

    const handleNewClub = () => {
        window.location.href = "/new-club";
    };

    const columns = clubsConfig(handleEdit, handleDelete);

    return (
        <Authenticated user={auth.user}>
            <PrimaryButton
                type="button"
                onClick={handleNewClub}
                className="mt-6 ml-8 p-2"
            >
                Crear nuevo club
            </PrimaryButton>
            <Table columns={columns} data={clubs}></Table>
            {isModalOpen && selectedClub && (
                <EditClub
                    club={selectedClub}
                    nationalities={nationalities}
                    onClose={closeModal}
                />
            )}
        </Authenticated>
    );
};

export default ManageClubs;
