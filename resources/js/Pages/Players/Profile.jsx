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
            <div className="bg-gray-100 min-h-screen">
                <style>
                    {`:root {
                        --main-color: #4a76a8;
                    }

                    .bg-main-color {
                        background-color: var(--main-color);
                    }

                    .text-main-color {
                        color: var(--main-color);
                    }

                    .border-main-color {
                        border-color: var(--main-color);
                    }`}
                </style>
                <div className="container mx-auto my-5 p-5">
                    {auth.user && (
                        <div className="mb-4">
                            {player.status === "2" && (
                                <DangerButton
                                    className="text-white py-2 px-4 rounded"
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
                    <div className="md:flex no-wrap md:-mx-2">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <ProfileCard player={player} user={auth.user} />
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <RandomProfile randomPlayers={randomPlayers} />
                            </div>
                        </div>
                        <div className="w-full md:w-9/12 mx-2">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <About
                                    player={player}
                                    user={auth.user}
                                    nationalities={nationalities}
                                    positions={positions}
                                    clubs={clubs}
                                />
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <Trajectory
                                    player={player}
                                    user={auth.user}
                                    clubs={clubs}
                                    seasons={seasons}
                                    nationalities={nationalities}
                                />
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <Palmares
                                    player={player}
                                    user={auth.user}
                                    clubs={clubs}
                                    seasons={seasons}
                                    nationalities={nationalities}
                                />
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <Report player={player} />
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <Gallery player={player} />
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <VideoGallery player={player} />
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
