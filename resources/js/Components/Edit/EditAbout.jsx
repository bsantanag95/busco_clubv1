import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";
import MultipleSelect from "@/Components/MultipleSelect";
import Checkbox from "@/Components/Checkbox";
import { useState } from "react";
import ClubSelect from "@/Components/ClubSelect";
import SocialMediaInput from "@/Components/SocialMediaInput";

const EditAbout = ({ player, onClose, nationalities, positions, clubs }) => {
    const [selectedPositions, setSelectedPositions] = useState(
        player.positions.map((position) => position.id)
    );

    const { data, setData, patch, processing, reset, errors } = useForm({
        surname: player.surname,
        forename: player.forename,
        gender: player.gender,
        date_of_birth: player.date_of_birth,
        foot: player.foot,
        nationalities: player.nationalities.map((nat) => nat.id) || [],
        place_of_birth: player.place_of_birth,
        positions: selectedPositions,
        height: player.height,
        last_club_id: player.last_club_id,
        instagram: player.instagram,
        x: player.x,
        agent: player.agent,
    });

    const handlePositionChange = (positionId, isChecked) => {
        const selected = isChecked
            ? [...selectedPositions, positionId]
            : selectedPositions.filter((id) => id !== positionId);

        setSelectedPositions(selected);
        setData("positions", selected);
    };

    const submit = (e) => {
        e.preventDefault(e);
        patch(route("players.update", player.id), {
            onSuccess: () => {
                onClose();
                reset();
            },
            onError: (errors) => {
                console.log("Errores al actualizar:", errors);
            },
        });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const removePrefix = (data) => {
        const prefixes = [
            "https://instagram.com/",
            "https://www.instagram.com/",
            "https://twitter.com/",
            "https://www.x.com/",
        ];

        for (const prefix of prefixes) {
            if (data.startsWith(prefix)) {
                return data.replace(prefix, "");
            }
        }

        return data;
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10"
            onClick={handleOverlayClick}
        >
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-y-auto sm:rounded-lg max-h-screen">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div>
                        <InputLabel htmlFor="surname" value="Nombre" />
                        <TextInput
                            id="surname"
                            name="surname"
                            value={data.surname}
                            onChange={(e) => setData("surname", e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                        <InputError message={errors.surname} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="forename" value="Apellido" />
                        <TextInput
                            id="forename"
                            name="forename"
                            value={data.forename}
                            onChange={(e) =>
                                setData("forename", e.target.value)
                            }
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                        <InputError
                            message={errors.forename}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="date_of_birth"
                            value="Fecha de Nacimiento"
                        />
                        <TextInput
                            id="date_of_birth"
                            type="date"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("date_of_birth", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.date_of_birth}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="gender" value="Género" />
                        <select
                            id="gender"
                            name="gender"
                            value={data.gender}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            autoComplete="gender"
                            onChange={(e) => setData("gender", e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Seleccionar género
                            </option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                        <InputError message={errors.gender} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="foot" value="Pie" />
                        <select
                            id="foot"
                            name="foot"
                            value={data.foot}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            autoComplete="foot"
                            onChange={(e) => setData("foot", e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Seleccionar pie
                            </option>
                            <option value="Derecho">Diestro</option>
                            <option value="Izquierdo">Zurdo</option>
                            <option value="Ambidiestro">Ambidiestro</option>
                        </select>
                        <InputError message={errors.foot} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="nationalities"
                            value="Nacionalidad(es)"
                        />
                        <MultipleSelect
                            nationalities={nationalities}
                            initialNationalities={player.nationalities}
                            setData={setData}
                            setError={(field, message) => {
                                if (errors[field] !== message) {
                                    errors[field] = message;
                                }
                            }}
                        />
                        <InputError
                            message={errors.nationalities}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="place_of_birth"
                            value="Lugar de Nacimiento"
                        />
                        <TextInput
                            id="place_of_birth"
                            name="place_of_birth"
                            value={data.place_of_birth}
                            className="mt-1 block w-full"
                            autoComplete="place_of_birth"
                            onChange={(e) =>
                                setData("place_of_birth", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.place_of_birth}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <div className="grid grid-cols-2">
                            {positions.map((position, index) => (
                                <div
                                    key={index}
                                    className="flex items-center my-2 mb-1"
                                >
                                    <InputLabel
                                        className="ml-2 w-16 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        value={position.short_name}
                                    />
                                    <Checkbox
                                        className="form-checkbox h-4 w-4 text-indigo-900 focus:ring-indigo-900 transition duration-150 ease-in-out"
                                        onChange={(e) =>
                                            handlePositionChange(
                                                position.id,
                                                e.target.checked
                                            )
                                        }
                                        checked={selectedPositions.includes(
                                            position.id
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="height" value="Altura (cm)" />
                        <TextInput
                            id="height"
                            name="height"
                            value={data.height}
                            className="mt-1 block w-full"
                            autoComplete="height"
                            onChange={(e) => setData("height", e.target.value)}
                        />
                        <InputError message={errors.height} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="lastClub" value="Último Club" />
                        <ClubSelect
                            clubs={clubs}
                            data={data}
                            setData={setData}
                            fieldName="last_club_id"
                        />
                        <InputError
                            message={errors.last_club_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="agent" value="Representante" />
                        <TextInput
                            id="agent"
                            name="agent"
                            value={data.agent}
                            onChange={(e) => setData("agent", e.target.value)}
                            className="mt-1 block w-full"
                        />
                        <InputError message={errors.agent} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <SocialMediaInput
                            className="block w-full"
                            label="Instagram"
                            id="instagram"
                            prefix="https://www.instagram.com/"
                            setData={setData}
                            initialUsername={removePrefix(data.x || "")}
                            error={errors.instagram}
                        />
                    </div>
                    <div className="mt-4">
                        <SocialMediaInput
                            className="block w-full"
                            label="X"
                            id="x"
                            prefix="https://www.x.com/"
                            setData={setData}
                            initialUsername={removePrefix(data.x || "")}
                            error={errors.x}
                        />
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

export default EditAbout;
