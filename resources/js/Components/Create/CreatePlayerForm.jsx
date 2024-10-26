import { useState } from "react";
import { useForm, Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SocialMediaInput from "@/Components/SocialMediaInput";
import FileInput from "@/Components/FileInput";
import Checkbox from "@/Components/Checkbox";
import MultipleSelect from "@/Components/MultipleSelect";
import ClubSelect from "@/Components/ClubSelect";

const CreatePlayerForm = ({ positions, nationalities, clubs }) => {
    const [selectedPositions, setSelectedPositions] = useState([]);

    const { data, setData, post, processing, reset, errors, setError } =
        useForm({
            surname: "",
            forename: "",
            date_of_birth: "",
            place_of_birth: "",
            gender: "",
            height: "",
            foot: "",
            attribute: "",
            description: "",
            x: "",
            instagram: "",
            email: "",
            profile_photo: null,
            positions: [],
            nationalities: [],
            last_club_id: "",
            agent: "",
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("players.store"), { onSuccess: () => reset() });
    };

    const handlePositionChange = (positionId, isChecked) => {
        const selected = isChecked
            ? [...selectedPositions, positionId]
            : selectedPositions.filter((id) => id !== positionId);

        setSelectedPositions(selected);
        setData("positions", selected);
    };
    return (
        <>
            <Head title="Create Player" />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="surname" value="Nombre *" />
                            <TextInput
                                id="surname"
                                name="surname"
                                value={data.surname}
                                className="mt-1 block w-full"
                                autoComplete="surname"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("surname", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.surname}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="forename" value="Apellido *" />
                            <TextInput
                                id="forename"
                                name="forename"
                                value={data.forename}
                                className="mt-1 block w-full"
                                autoComplete="forename"
                                onChange={(e) =>
                                    setData("forename", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.forename}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="positions"
                                value="Posiciones *"
                            />
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
                                        />
                                    </div>
                                ))}
                            </div>
                            <InputError
                                message={errors.positions}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="date_of_birth"
                                value="Fecha de Nacimiento *"
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
                            <InputLabel
                                htmlFor="nationalities"
                                value="Nacionalidad(es) *"
                            />
                            <MultipleSelect
                                nationalities={nationalities}
                                setData={setData}
                                setError={setError}
                                errors={errors}
                            />
                            <InputError
                                message={errors.nationalities}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="place_of_birth"
                                value="Lugar de Nacimiento *"
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
                            <InputLabel htmlFor="gender" value="Género *" />
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
                            <InputLabel htmlFor="height" value="Altura (cm)" />
                            <TextInput
                                id="height"
                                name="height"
                                value={data.height}
                                className="mt-1 block w-full"
                                autoComplete="height"
                                onChange={(e) =>
                                    setData("height", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.height}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="foot" value="Pie *" />
                            <select
                                id="foot"
                                name="foot"
                                value={data.foot}
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                autoComplete="foot"
                                onChange={(e) =>
                                    setData("foot", e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    Seleccionar pie
                                </option>
                                <option value="Derecho">Diestro</option>
                                <option value="Izquierdo">Zurdo</option>
                                <option value="Ambidiestro">Ambidiestro</option>
                            </select>
                            <InputError
                                message={errors.foot}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="attribute" value="Atributos" />
                            <TextInput
                                id="attribute"
                                name="attribute"
                                value={data.attribute}
                                className="mt-1 block w-full"
                                autoComplete="attribute"
                                onChange={(e) =>
                                    setData("attribute", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.attribute}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="description"
                                value="Descripción"
                            />
                            <TextInput
                                id="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="agent" value="Representante" />
                            <TextInput
                                id="agent"
                                name="agent"
                                value={data.agent}
                                onChange={(e) =>
                                    setData("agent", e.target.value)
                                }
                                className="mt-1 block w-full"
                            />
                            <InputError
                                message={errors.agent}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <SocialMediaInput
                                className="block w-full"
                                label="X"
                                id="x"
                                prefix="https://www.x.com/"
                                setData={setData}
                                initialUsername=""
                                error={errors.x}
                            />
                        </div>
                        <div className="mt-4">
                            <SocialMediaInput
                                className="block w-full"
                                label="Instagram"
                                id="instagram"
                                prefix="https://www.instagram.com/"
                                setData={setData}
                                initialUsername=""
                                error={errors.instagram}
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
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
                            <FileInput
                                label="Foto de perfil"
                                id="profile_photo"
                                setData={setData}
                                error={errors.profile_photo}
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Añadir Jugador
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreatePlayerForm;
