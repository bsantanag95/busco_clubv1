import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const GalleryModal = ({ images, open, handleClose, selectedImageIndex }) => {
    const formattedImages = images.map((image) => ({
        original: `/storage/${image.url}`,
        thumbnail: `/storage/${image.url}?w=164&h=164&fit=crop&auto=format`,
    }));

    return (
        <Modal open={open} onClose={handleClose}>
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    position: "relative",
                }}
            >
                <IconButton
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        zIndex: 1000,
                    }}
                    onClick={handleClose}
                    size="large"
                >
                    <CloseIcon style={{ fontSize: 30 }} />
                </IconButton>
                <ReactImageGallery
                    items={formattedImages}
                    startIndex={selectedImageIndex}
                    showPlayButton={false}
                    autoPlay={false}
                />
            </div>
        </Modal>
    );
};

export default GalleryModal;
