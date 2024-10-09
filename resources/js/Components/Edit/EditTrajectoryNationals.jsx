import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import DangerButton from "../DangerButton";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import TextInput from "../TextInput";

const EditTrajectoryNationals = ({ player, national, onClose }) => {
    const { data, setData, patch, processing, reset, errors } = useForm({
        player_id: national.id,
        category: national.category,
        description: national.description,
        first_year: national.first_year,
        last_year: national.last_year,
        nationality_id: national.nationality_id,
    });

    const submit = (e) => {
        e.preventDefault(e);
        patch(route("nationals.update", national.id), {
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
                        <div>
                            <InputLabel htmlFor="nationality_id" value="País" />
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
                                    Seleccionar país
                                </option>
                                {player.nationalities.map((country) => (
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
                        <div>
                            <InputLabel htmlFor="category" value="Categoría" />
                            <select
                                id="category"
                                name="category"
                                value={data.category}
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    Seleccionar categoría
                                </option>
                                <option value="Sub 15">Sub 15</option>
                                <option value="Sub 16">Sub 16</option>
                                <option value="Sub 17">Sub 17</option>
                                <option value="Sub 18">Sub 18</option>
                                <option value="Sub 19">Sub 19</option>
                                <option value="Sub 20">Sub 20</option>
                                <option value="Sub 23">Sub 23</option>
                                <option value="Adulto">Adulto</option>
                            </select>
                            <InputError
                                message={errors.category}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="season"
                                value="Años (Comienzo-Final)"
                            />
                            <div className="flex gap-2">
                                <TextInput
                                    id="first_year"
                                    name="first_year"
                                    value={data.first_year}
                                    onChange={(e) =>
                                        setData("first_year", e.target.value)
                                    }
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                    required
                                />
                                <span>-</span>
                                <TextInput
                                    id="last_year"
                                    name="last_year"
                                    value={data.last_year}
                                    onChange={(e) =>
                                        setData("last_year", e.target.value)
                                    }
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <InputError
                                message={errors.first_year}
                                className="mt-2"
                            />
                            <InputError
                                message={errors.last_year}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="description"
                                value="Descripción"
                            />
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
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <DangerButton type="button" onClick={onClose}>
                            Cerrar
                        </DangerButton>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Agregar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTrajectoryNationals;
