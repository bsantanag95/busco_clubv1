import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import MultipleSelect from "@/Components/MultipleSelectEdit";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ClubSelect from "@/Components/ClubSelect";
import SocialMediaInput from "@/Components/SocialMediaInput";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

const EditIndex = ({ player, positions, nationalities, clubs, onClose }) => {
    const [selectedPositions, setSelectedPositions] = useState(
        player.positions.map((position) => position.id)
    );

    const { data, setData, post, processing, reset, errors } = useForm({
        profile_photo: null,
        surname: player.surname,
        forename: player.forename,
        positions: selectedPositions,
        nationalities: player.nationalities.map((nat) => nat.id) || [],
        date_of_birth: player.date_of_birth,
        gender: player.gender,
        last_club_id: player.last_club_id,
        instagram: player.instagram,
        x: player.x,
    });
    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("profile_photo", data.profile_photo),
            formData.append("surname", data.surname),
            formData.append("forename", data.forename),
            formData.append("date_of_birth", data.date_of_birth),
            formData.append("gender", data.gender),
            formData.append("last_club_id", data.last_club_id),
            formData.append("instagram", data.instagram),
            formData.append("x", data.x),
            data.positions.forEach((position) =>
                formData.append("positions[]", position)
            );
        data.nationalities.forEach((nat) =>
            formData.append("nationalities[]", nat)
        );
        post(route("players.update", player.id), {
            data: formData,
            method: "patch",
            onSuccess: () => {
                onClose();
                reset();
            },
        });
    };

    const handlePositionChange = (positionId, isChecked) => {
        const selected = isChecked
            ? [...selectedPositions, positionId]
            : selectedPositions.filter((id) => id !== positionId);

        setSelectedPositions(selected);
        setData("positions", selected);
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
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
            onClick={handleOverlayClick}
        >
            <div className="w-full max-w-2xl mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md sm:rounded-lg overflow-hidden">
                <div className="max-h-[80vh] overflow-y-auto p-4">
                    <form onSubmit={submit} encType="multipart/form-data">
                        <div>
                            <InputLabel
                                htmlFor="profile_photo"
                                value="Foto de perfíl"
                            />
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
                            <InputLabel htmlFor="surname" value="Nombre" />
                            <TextInput
                                id="surname"
                                name="surname"
                                value={data.surname}
                                onChange={(e) =>
                                    setData("surname", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.surname}
                                className="mt-2"
                            />
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
                                <InputError
                                    message={errors.positions}
                                    className="mt-2"
                                />
                            </div>
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
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    Seleccionar género
                                </option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                            <InputError
                                message={errors.gender}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="lastClub"
                                value="Último Club"
                            />
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
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Editar Jugador
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditIndex;
