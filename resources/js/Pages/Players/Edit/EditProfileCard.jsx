import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";
import { router } from "@inertiajs/react";

const EditProfileCard = ({ player, onClose }) => {
    const { data, setData, processing, reset, errors } = useForm({
        name: player.name,
        profile_photo: null,
        attribute: player.attribute,
        description: player.description,
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("profile_photo", data.profile_photo);
        formData.append("attribute", data.attribute);
        formData.append("description", data.description);

        router.post(route("players.update", player.id), formData, {
            method: "patch",
            onSuccess: () => {
                onClose();
                reset();
            },
            onError: (errors) => {
                console.log("Error al actualizar:", errors);
            },
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <input
                            type="file"
                            id="profile_photo"
                            name="profile_photo"
                            className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 dark:file:bg-gray-700 file:text-indigo-600 dark:file:text-gray-300 hover:file:bg-indigo-100 dark:hover:file:bg-gray-600"
                            onChange={(e) =>
                                setData("profile_photo", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="attribute" value="Atributos" />
                        <TextInput
                            id="attribute"
                            name="attribute"
                            value={data.attribute}
                            onChange={(e) =>
                                setData("attribute", e.target.value)
                            }
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="description" value="Descripción" />
                        <TextInput
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <DangerButton type="button" onClick={onClose}>
                            Cancelar
                        </DangerButton>
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Editar Datos
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileCard;
