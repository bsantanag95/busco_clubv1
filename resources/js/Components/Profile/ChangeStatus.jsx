import Swal from "sweetalert2";
import DangerButton from "@/Components/DangerButton";
import { router } from "@inertiajs/react";

const ChangeStatus = ({ player }) => {
    const handleChangeStatus = (player) => {
        Swal.fire({
            title: "Cambiar estado a BUSCANDO CLUB?",
            text: "No hay vuelta atrás",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, cambiar estado del jugador",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                router.patch(
                    route("players.changeStatus", player.id),
                    {
                        status: "2",
                    },
                    {
                        onSuccess: () => {
                            Swal.fire({
                                title: "Estado cambiado",
                                text: "El estado del jugador ha sido actualizado a BUSCANDO CLUB",
                                icon: "success",
                            });
                        },
                        onError: (errors) => {
                            console.error("Error al actualizar:", errors);
                            Swal.fire({
                                title: "Error",
                                text: "Hubo un error al intentar cambiar el estado",
                                icon: "error",
                            });
                        },
                    }
                );
            }
        });
    };

    return (
        <DangerButton
            className=" text-white py-2 px-4 rounded"
            onClick={() => handleChangeStatus(player)}
        >
            Busca Club
        </DangerButton>
    );
};

export default ChangeStatus;
