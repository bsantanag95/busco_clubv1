import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Title from "../Title";

const VideoGallery = ({ player }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoChange = (index) => {
        setCurrentVideoIndex(index);
    };

    if (!player.videos || player.videos.length === 0) {
        return (
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <Title titulo="Videos" />
                <p className="px-4 py-2 text-teal-600">
                    Este jugador no tiene videos.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm mt-4">
            <Title titulo="Videos" />
            <div className="flex justify-center mb-4">
                {player.videos.map((video, index) => (
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
            <div className="flex justify-center">
                <div className="video-container border p-2 rounded-lg">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: player.videos[currentVideoIndex].iframe,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
