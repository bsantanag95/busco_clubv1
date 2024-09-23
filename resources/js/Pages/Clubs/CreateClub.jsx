import CreateClubForm from "@/Components/CreateClubForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const CreateClub = ({ auth, nationalities }) => {
    return (
        <Authenticated user={auth.user}>
            <CreateClubForm nationalities={nationalities} />
        </Authenticated>
    );
};

export default CreateClub;
