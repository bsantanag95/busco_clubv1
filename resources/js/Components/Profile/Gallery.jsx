import GalleryModal from "./GalleryModal";
import { ImageUploader, Title } from "@/Components";
import { ImageList, ImageListItem, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoIcon from "@mui/icons-material/Photo";
import { router } from "@inertiajs/react";
import { useState } from "react";
import handleDelete from "@/Utils/handleDelete";

const Gallery = ({ player: { images = [], name, id }, user }) => {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [uploaderOpen, setUploaderOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setGalleryOpen(true);
    };

    const handleClose = () => {
        setGalleryOpen(false);
        setUploaderOpen(false);
    };

    const submit = (files) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("images[]", files[i]);
        }

        formData.append("player_id", id);

        router.post(route("images.store"), formData, {
            onError: (errors) => {
                console.log("Error:", errors);
            },
        });
    };

    const deleteImage = (imageId) => {
        handleDelete(
            imageId,
            "images.destroy",
            "La imagen será eliminada",
            "La imagen ha sido eliminada con éxito"
        );
    };

    return (
        <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <Title
                    titulo="Galería"
                    icon={<PhotoIcon className="h-5 w-5" />}
                />
                {user && (
                    <button
                        className="ml-2 w-8 h-8 p-1 hover:bg-gray-200 rounded-full flex justify-center items-center"
                        title="Agregar imagen"
                        onClick={() => setUploaderOpen(true)}
                    >
                        <EditOutlinedIcon style={{ fontSize: "1.2rem" }} />
                    </button>
                )}
            </div>

            {images.length === 0 ? (
                <p className="px-4 py-2 text-teal-600">
                    Este jugador no tiene imágenes disponibles.
                </p>
            ) : (
                <ImageList
                    sx={{ width: "auto", height: "auto" }}
                    cols={3}
                    rowHeight={164}
                    gap={1}
                    variant="quilted"
                >
                    {images.map((item, index) => (
                        <ImageListItem
                            key={item.url}
                            sx={{ position: "relative" }}
                        >
                            <img
                                className="cursor-pointer"
                                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`/storage/${item.url}?w=164&h=164&fit=crop&auto=format`}
                                alt={name}
                                loading="lazy"
                                onClick={() => handleImageClick(index)}
                            />
                            {user && (
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: 5,
                                        right: 5,
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.7)",
                                    }}
                                    onClick={() => deleteImage(item.id)}
                                >
                                    <DeleteIcon style={{ color: "#d32f2f" }} />
                                </IconButton>
                            )}
                        </ImageListItem>
                    ))}
                </ImageList>
            )}

            <GalleryModal
                images={images}
                open={galleryOpen}
                handleClose={handleClose}
                selectedImageIndex={selectedImageIndex}
            />
            <ImageUploader
                open={uploaderOpen}
                handleClose={handleClose}
                onSubmit={submit}
            />
        </div>
    );
};

export default Gallery;
