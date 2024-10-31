import {
    DangerButton,
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
} from "@/Components";
import { useForm } from "@inertiajs/react";

const EditDistinction = ({ distinction, onClose }) => {
    const { data, setData, patch, processing, reset, errors } = useForm({
        player_id: distinction.player_id,
        name: distinction.name,
        description: distinction.description,
        year: distinction.year,
    });
    const submit = (e) => {
        e.preventDefault(e);
        patch(route("distinctions.update", distinction.id), {
            onSuccess: () => {
                onClose();
                reset();
            },
            onError: (errors) => {
                console.log("Errores al actualizar:", errors);
            },
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
            <div className="w-full sm:max-w-md px-6 py-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <InputLabel htmlFor="name" value="Nombre" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-span-1">
                            <InputLabel htmlFor="year" value="Año" />
                            <TextInput
                                id="year"
                                name="year"
                                type="number"
                                value={data.year}
                                onChange={(e) =>
                                    setData("year", e.target.value)
                                }
                                className="mt-1 w-20 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.year}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="description"
                                value="Descripción"
                            />
                            <textarea
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-center mt-6 col-span-2">
                            <DangerButton type="button" onClick={onClose}>
                                Cerrar
                            </DangerButton>
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Editar
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDistinction;
