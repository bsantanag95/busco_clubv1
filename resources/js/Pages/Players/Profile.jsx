import { ProfileCard } from "@/Components/Profile/ProfileCard";
import Main from "@/Layouts/MainLayout";
import About from "@/Components/Profile/About";
import RandomProfile from "@/Components/Profile/RandomProfile";
import Trajectory from "@/Components/Profile/Trajectory";
import Palmares from "@/Components/Profile/Palmares";
import Report from "@/Components/Profile/Report";
import Gallery from "@/Components/Profile/Gallery";
import VideoGallery from "@/Components/Profile/VideoGallery";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import { useState } from "react";
import ClubFound from "../../Components/Profile/ClubFound";
import ChangeStatus from "@/Components/Profile/ChangeStatus";

const Profile = ({
    player,
    randomPlayers,
    nationalities,
    positions,
    clubs,
    seasons,
}) => {
    const { auth } = usePage().props;
    const Layout = auth.user ? Authenticated : Main;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout user={auth.user}>
            <div className="bg-gray-50 dark:bg-gray-900 h-full flex flex-col">
                <div className="container mx-auto my-5 p-5 flex-grow">
                    {auth.user && (
                        <div className="mb-4">
                            {player.status === "2" && (
                                <DangerButton
                                    className="text-white py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 transition-all"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Encontró Club
                                </DangerButton>
                            )}
                            {player.status === "3" && (
                                <ChangeStatus player={player} />
                            )}
                        </div>
                    )}
                    <div className="md:flex md:-mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <ProfileCard player={player} user={auth.user} />
                            </div>
                            <div className="mt-4"></div>
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <RandomProfile randomPlayers={randomPlayers} />
                            </div>
                        </div>
                        <div className="w-full md:w-9/12 md:mx-2 space-y-4">
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <About
                                    player={player}
                                    user={auth.user}
                                    nationalities={nationalities}
                                    positions={positions}
                                    clubs={clubs}
                                />
                            </div>
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <Trajectory
                                    player={player}
                                    user={auth.user}
                                    clubs={clubs}
                                    seasons={seasons}
                                    nationalities={nationalities}
                                />
                            </div>
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <Palmares
                                    player={player}
                                    user={auth.user}
                                    clubs={clubs}
                                    seasons={seasons}
                                    nationalities={nationalities}
                                />
                            </div>
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <Report player={player} user={auth.user} />
                            </div>
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                                <Gallery player={player} user={auth.user} />
                            </div>
                            <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 pb-5">
                                <VideoGallery
                                    player={player}
                                    user={auth.user}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <ClubFound
                        player={player}
                        onClose={closeModal}
                        clubs={clubs}
                    />
                )}
            </div>
        </Layout>
    );
};

export default Profile;
