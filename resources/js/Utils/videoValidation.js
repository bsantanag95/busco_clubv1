import Swal from "sweetalert2";

const videoValidation = (url) => {
    if (!url || url.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, pegar la URL del video.",
        });
        return false;
    }

    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w\-]{11}(&.*)?$/;
    const vimeoRegex = /^(https?:\/\/)?(www\.)?vimeo\.com\/\d+(\?.*)?$/;

    if (!youtubeRegex.test(url) && !vimeoRegex.test(url)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "La URL debe ser de un video válido de YouTube o Vimeo.",
        });
        return false;
    }

    return true;
};

export default videoValidation;
