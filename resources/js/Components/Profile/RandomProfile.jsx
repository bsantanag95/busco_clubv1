import Title from "../Title";
import GroupsIcon from "@mui/icons-material/Groups";

const RandomProfile = ({ randomPlayers }) => {
    const defaultPhoto = "/storage/players/default.jpg";

    return (
        <div className="bg-white p-3 hover:shadow">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <Title
                    titulo="Buscan club"
                    icon={<GroupsIcon className="h-5 w-5" />}
                />
            </div>
            <div className="grid grid-cols-3 cursor-pointer">
                {randomPlayers.map((player) => (
                    <div
                        key={player.id}
                        className="text-center my-2"
                        onClick={() =>
                            window.open(`/jugador/${player.id}/${player.slug}`)
                        }
                    >
                        <img
                            className="h-16 w-16 rounded-full mx-auto"
                            src={`/storage/${player.profile_photo}`}
                            alt="profile"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = defaultPhoto;
                            }}
                        />
                        <a className="text-main-color">{player.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomProfile;
