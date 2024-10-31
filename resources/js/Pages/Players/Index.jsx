import { Main, Authenticated } from "@/Layouts";
import { Table } from "@/Components";
import EditIndex from "../../Components/Edit/EditIndex";
import { playerColumn } from "@/Config/columsConfig.jsx";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const Index = ({ players, positions, nationalities, clubs }) => {
    const { auth } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [filters, setFilters] = useState({
        positions: [],
        nationalities: [],
        age: "",
        gender: "",
        club: "",
    });

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

    const filteredPlayers = players.filter((player) => {
        return (
            (filters.positions.length > 0
                ? player.positions.some((pos) =>
                      filters.positions.some(
                          (filterPos) => filterPos.value === pos.short_name
                      )
                  )
                : true) &&
            (filters.nationalities.length > 0
                ? player.nationalities.some((nat) =>
                      filters.nationalities.some(
                          (filterNat) => filterNat.value === nat.country
                      )
                  )
                : true) &&
            (filters.minAge || filters.maxAge
                ? player.age >= (parseInt(filters.minAge) || 0) &&
                  player.age <= (parseInt(filters.maxAge) || 100)
                : true) &&
            (filters.gender ? player.gender === filters.gender : true) &&
            (filters.club ? player.last_club?.name === filters.club : true)
        );
    });

    return (
        <>
            {auth.user ? (
                <Authenticated user={auth.user}>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-1"></div>
                    </div>
                    <Table
                        columns={columns}
                        data={filteredPlayers}
                        positions={positions}
                        nationalities={nationalities}
                        clubs={clubs}
                        onFilterChange={setFilters}
                    ></Table>
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
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-1"></div>
                    </div>
                    <Table
                        columns={columns}
                        data={filteredPlayers}
                        positions={positions}
                        nationalities={nationalities}
                        clubs={clubs}
                        onFilterChange={setFilters}
                    ></Table>
                </Main>
            )}
        </>
    );
};

export default Index;
