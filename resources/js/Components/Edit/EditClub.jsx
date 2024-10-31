import {
    DangerButton,
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
} from "@/Components";
import { useForm } from "@inertiajs/react";

const EditClub = ({ club, nationalities, onClose }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: club.name,
        logo: null,
        nationality_id: club.nationality_id,
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("nationality_id", data.nationality_id);
        formData.append("logo", data.logo);

        post(route("clubs.update", club.id), {
            data: formData,
            method: "patch",
            onSuccess: () => {
                onClose();
                reset();
            },
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div>
                        <InputLabel htmlFor="name" value="Club" />
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
                            id="logo"
                            name="logo"
                            className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 dark:file:bg-gray-700 file:text-indigo-600 dark:file:text-gray-300 hover:file:bg-indigo-100 dark:hover:file:bg-gray-600"
                            onChange={(e) => setData("logo", e.target.files[0])}
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="country" value="País" />
                        <select
                            id="nationality_id"
                            name="nationality_id"
                            value={data.nationality_id}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            onChange={(e) =>
                                setData("nationality_id", e.target.value)
                            }
                            required
                        >
                            <option value="" disabled>
                                Seleccionar País
                            </option>
                            {nationalities.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.country}
                                </option>
                            ))}
                        </select>
                        <InputError
                            message={errors.nationality_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <DangerButton type="button" onClick={onClose}>
                            Cancelar
                        </DangerButton>
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Editar Club
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditClub;
