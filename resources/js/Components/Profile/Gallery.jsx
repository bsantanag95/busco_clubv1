import { ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import GalleryModal from "./GalleryModal";
import Title from "../Title";

const Gallery = ({ player }) => {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setGalleryOpen(true);
    };

    const handleClose = () => {
        setGalleryOpen(false);
    };

    if (!player.images || player.images.length === 0) {
        return (
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <Title titulo="Galería" />
                <p className="px-4 py-2 text-teal-600">
                    Este jugador no tiene imágenes disponibles.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <Title titulo="Galería" />
            <ImageList
                sx={{ width: "auto", height: "auto" }}
                cols={3}
                rowHeight={164}
                gap={1}
                variant="quilted"
            >
                {player.images.map((item, index) => (
                    <ImageListItem key={item.url}>
                        <img
                            className="cursor-pointer"
                            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`/storage/${item.url}?w=164&h=164&fit=crop&auto=format`}
                            alt={player.name}
                            loading="lazy"
                            onClick={() => handleImageClick(index)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <GalleryModal
                images={player.images}
                open={galleryOpen}
                handleClose={handleClose}
                selectedImageIndex={selectedImageIndex}
            />
        </div>
    );
};

export default Gallery;
