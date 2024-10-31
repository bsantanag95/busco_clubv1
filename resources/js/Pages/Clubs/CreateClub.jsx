import { CreateClubForm } from "@/Components/Create";
import { Authenticated } from "@/Layouts";

const CreateClub = ({ auth, nationalities }) => {
    return (
        <Authenticated user={auth.user}>
            <CreateClubForm nationalities={nationalities} />
        </Authenticated>
    );
};

export default CreateClub;
