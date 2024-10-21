import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import videoValidation from "@/Utils/videoValidation";

const VideoUploader = ({ open, handleClose, onSubmit }) => {
    const [videoUrl, setVideoUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!videoValidation(videoUrl)) {
            return;
        }

        onSubmit(videoUrl);
        setVideoUrl("");
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="video-uploader-title"
            aria-describedby="video-uploader-description"
            sx={{ zIndex: 120 }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    borderRadius: "8px",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2" gutterBottom>
                    Subir Video
                </Typography>
                <TextField
                    fullWidth
                    label="URL del Video"
                    variant="outlined"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    sx={{ mb: 2 }}
                    required
                />
                <Box display="flex" justifyContent="flex-end" mt={4}>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        sx={{ marginRight: 2 }}
                    >
                        Subir
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default VideoUploader;
