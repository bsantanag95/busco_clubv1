import React, { useState } from "react";
import { Modal, Button, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

const ImageUploader = ({ open, handleClose, onSubmit }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        const validFiles = selectedFiles.filter((file) =>
            file.type.startsWith("image/")
        );

        if (validFiles.length !== selectedFiles.length) {
            Swal.fire({
                icon: "error",
                title: "Archivo no válido",
                text: "Solo puedes subir archivos de imagen.",
            });
        } else {
            setFiles(validFiles);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (files.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "Sin imágenes seleccionadas",
                text: "Por favor, selecciona al menos una imagen para subir.",
            });
            return;
        }
        onSubmit(files);
        setFiles([]);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose} sx={{ zIndex: 120 }}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2" gutterBottom>
                    Subir Imágenes
                </Typography>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ margin: "10px 0" }}
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

export default ImageUploader;
