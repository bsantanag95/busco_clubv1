import { useForm } from "@inertiajs/react";

import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";
import FileInput from "../FileInput";
import InputError from "../InputError";

const CreateClubForm = ({ nationalities }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        logo: null,
        nationality_id: "",
    });
    const notify = () =>
        toast.success("Club creado exitosamente", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("clubs.store"), {
            onSuccess: () => {
                reset();
                notify();
            },
        });
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form id="club_form" onSubmit={submit}>
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
                        <FileInput
                            label="Logo"
                            id="logo"
                            setData={setData}
                            error={errors.logo}
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="country" value="País" />
                        <select
                            id="nationality_id"
                            name="nationality_id"
                            value={data.nationality_id}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            autoComplete="nationality_id"
                            onChange={(e) =>
                                setData("nationality_id", e.target.value)
                            }
                            required
                        >
                            <option value="" disabled>
                                Seleccionar Pais
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
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Crear
                        </PrimaryButton>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CreateClubForm;
