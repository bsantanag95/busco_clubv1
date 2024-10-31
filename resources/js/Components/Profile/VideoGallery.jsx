import { Title, VideoUploader } from "@/Components";
import { VideoList } from "@/Components/Profile";
import { router } from "@inertiajs/react";
import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import handleDelete from "@/Utils/handleDelete";

const VideoGallery = ({ player: { videos: initialVideos = [], id }, user }) => {
    const [videos, setVideos] = useState(initialVideos);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [uploaderOpen, setUploaderOpen] = useState(false);

    const handleVideoChange = (index) => {
        setCurrentVideoIndex(index);
    };

    const submit = (url) => {
        const formData = new FormData();
        formData.append("url", url);
        formData.append("player_id", id);

        router.post(route("videos.store"), formData, {
            onSuccess: () => {
                router.reload({
                    only: ["player"],
                    onSuccess: (page) => {
                        setVideos(page.props.player.videos);
                        setCurrentVideoIndex(
                            page.props.player.videos.length - 1
                        );
                    },
                });
            },
            onError: (errors) => {
                console.log("Error:", errors);
            },
        });
    };

    const deleteVideo = (videoId) => {
        handleDelete(
            videoId,
            "videos.destroy",
            "Este video será eliminado",
            "El video ha sido eliminado con éxito",
            () => {
                const updatedVideos = videos.filter(
                    (video) => video.id !== videoId
                );
                setVideos(updatedVideos);

                setCurrentVideoIndex(updatedVideos.length - 1);
            }
        );
    };

    // useEffect(() => {
    //     if (currentVideoIndex >= videos.length) {
    //         setCurrentVideoIndex(videos.length - 1);
    //     }
    // }, [videos]);

    const openModal = () => {
        setUploaderOpen(true);
    };

    const handleClose = () => {
        setUploaderOpen(false);
    };

    if (videos.length === 0) {
        return (
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <Title
                        titulo="Videos"
                        icon={<VideocamIcon className="h-5 w-5" />}
                    />
                    {user && (
                        <button
                            className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                            title="Agregar video"
                            onClick={openModal}
                        >
                            <EditOutlinedIcon style={{ fontSize: "1.2rem" }} />
                        </button>
                    )}
                </div>
                <p className="px-4 py-2 text-teal-600">
                    Este jugador no tiene videos.
                </p>
                <VideoUploader
                    open={uploaderOpen}
                    handleClose={handleClose}
                    onSubmit={submit}
                />
            </div>
        );
    }

    return (
        <div className="bg-white p-2 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <Title
                    titulo="Videos"
                    icon={<VideocamIcon className="h-5 w-5" />}
                />
                {user && videos.length < 8 && (
                    <button
                        className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                        title="Agregar video"
                        onClick={openModal}
                    >
                        <EditOutlinedIcon style={{ fontSize: "1.2rem" }} />
                    </button>
                )}
            </div>

            <VideoList
                videos={videos}
                currentVideoIndex={currentVideoIndex}
                handleVideoChange={handleVideoChange}
                deleteVideo={deleteVideo}
                user={user}
            />

            <VideoUploader
                open={uploaderOpen}
                handleClose={handleClose}
                onSubmit={submit}
            />
        </div>
    );
};

export default VideoGallery;
