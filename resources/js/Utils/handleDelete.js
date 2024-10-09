import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

const handleDelete = (id, deleteRoute, confirmButtonText, successText) => {
    Swal.fire({
        title: "¿Estás seguro/a?",
        text: "No hay vuelta atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: confirmButtonText,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(route(deleteRoute, id));

            Swal.fire({
                title: "¡Eliminado!",
                text: successText || "El registro ha sido eliminado",
                icon: "success",
            });
        }
    });
};

export default handleDelete;