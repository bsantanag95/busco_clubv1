import PrimaryButton from "../PrimaryButton";
import DangerButton from "../DangerButton";
import generateIframe from "@/Utils/generateIframe";

const VideoList = ({
    videos,
    currentVideoIndex,
    handleVideoChange,
    deleteVideo,
}) => {
    return (
        <div>
            <div className="flex justify-center mb-4">
                {videos.map((_, index) => (
                    <PrimaryButton
                        key={index}
                        onClick={() => handleVideoChange(index)}
                        className={`px-4 py-2 mx-2 rounded border transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-10 ${
                            currentVideoIndex === index
                                ? "border-green-500"
                                : "border-gray-300"
                        }`}
                    >
                        Video {index + 1}
                    </PrimaryButton>
                ))}
            </div>
            {videos[currentVideoIndex] ? (
                <div className="flex justify-center">
                    <div className="video-container border p-2 rounded-lg">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: generateIframe(
                                    videos[currentVideoIndex].url
                                ),
                            }}
                        />
                    </div>
                </div>
            ) : (
                <p>No hay video disponible para mostrar.</p>
            )}
            <div className="flex justify-center mt-4">
                <DangerButton
                    onClick={() => deleteVideo(videos[currentVideoIndex].id)}
                    className="px-4 py-2 rounded border transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-10 border-red-500 text-red-500"
                >
                    Eliminar Video
                </DangerButton>
            </div>
        </div>
    );
};

export default VideoList;
