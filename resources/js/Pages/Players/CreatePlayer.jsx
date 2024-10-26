import CreatePlayerForm from "@/Components/Create/CreatePlayerForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const CreatePlayer = ({ auth, positions, clubs, nationalities }) => {
    return (
        <Authenticated user={auth.user}>
            <CreatePlayerForm
                positions={positions}
                clubs={clubs}
                nationalities={nationalities}
            />
        </Authenticated>
    );
};

export default CreatePlayer;
