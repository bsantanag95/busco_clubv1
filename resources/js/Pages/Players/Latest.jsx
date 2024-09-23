import Main from "@/Layouts/MainLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Table from "@/Components/Table";
import { latestColumn } from "@/Config/latestConfig";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const Latest = ({ transfers }) => {
    const { auth } = usePage().props;

    const handleDelete = (transferId) => {
        Swal.fire({
            title: "¿Desea eliminar esta transferencia?",
            text: "No hay vuelta atrás",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar transferencia",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("transfers.destroy", transferId));

                Swal.fire({
                    title: "¡Eliminada!",
                    text: "La transferencia ha sido eliminado",
                    icon: "success",
                });
            }
        });
    };

    const columns = latestColumn(auth.user, handleDelete);

    return (
        <>
            {auth.user ? (
                <Authenticated user={auth.user}>
                    <Table columns={columns} data={transfers}></Table>
                </Authenticated>
            ) : (
                <Main>
                    <Table columns={latestColumn} data={transfers}></Table>
                </Main>
            )}
        </>
    );
};

export default Latest;
