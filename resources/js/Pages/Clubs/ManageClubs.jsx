import Authenticated from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import { clubsConfig } from "@/Config/clubsConfig";
import EditClub from "@/Components/Edit/EditClub";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

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

    const deleteClub = (clubId, clubName) => {
        handleDelete(
            clubId,
            "clubs.destroy",
            `¿Eliminar ${clubName}?`,
            `${clubName} ha sido eliminado con éxito`
        );
    };

    const handleNewClub = () => {
        window.location.href = "/new-club";
    };

    const columns = clubsConfig(handleEdit, deleteClub);

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
