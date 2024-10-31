import {
    DangerButton,
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
} from "@/Components";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const CreateTrophy = ({ player, nationalities, seasons, onClose }) => {
    const [level, setLevel] = useState("");
    const { data, setData, post, processing, reset, errors } = useForm({
        player_id: player.id,
        name: "",
        level: "",
        nationality_id: "",
        season_id: "",
        category: "",
        organizer: "",
        year: "",
        club_id: "",
        national_team_id: "",
    });

    const handleLevelChange = (e) => {
        const selectedLevel = e.target.value;

        if (
            ["Nacional", "Internacional", "Selección"].includes(selectedLevel)
        ) {
            setData({
                ...data,
                level: selectedLevel,
                season_id: "",
                nationality_id: "",
                club_id: "",
                category: "",
                year: "",
                organizer: "",
                national_team_id: "",
            });
        }

        setLevel(selectedLevel);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("trophies.store"), {
            onSuccess: () => {
                onClose();
                reset();
            },
            onError: (errors) => {
                console.log("Error:", errors);
            },
        });
    };

    const removeSeasonPrefix = (season) => {
        return season.replace("Temporada ", "");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Nombre
                            </InputLabel>
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
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
                        <div className="form-group">
                            <InputLabel
                                htmlFor="level"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Nivel
                            </InputLabel>
                            <select
                                id="level"
                                name="level"
                                value={data.level}
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                autoComplete="level"
                                onChange={handleLevelChange}
                                required
                            >
                                <option value="" disabled>
                                    Seleccionar nivel
                                </option>
                                <option value="Nacional">Nacional</option>
                                <option value="Internacional">
                                    Internacional
                                </option>
                                <option value="Selección">Selección</option>
                            </select>
                            <InputError
                                message={errors.level}
                                className="mt-2"
                            />
                        </div>
                        {level === "Nacional" && (
                            <>
                                <div>
                                    <InputLabel
                                        htmlFor="season"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Temporada
                                    </InputLabel>
                                    <select
                                        id="season"
                                        name="season"
                                        value={data.season_id}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) =>
                                            setData("season_id", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="">
                                            Seleccionar temporada
                                        </option>
                                        {seasons
                                            .slice()
                                            .reverse()
                                            .map((season, index) => (
                                                <option
                                                    key={index}
                                                    value={season.id}
                                                >
                                                    {removeSeasonPrefix(
                                                        season.season
                                                    )}
                                                </option>
                                            ))}
                                    </select>
                                    <InputError
                                        message={errors.season_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="nationality_id"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        País
                                    </InputLabel>
                                    <select
                                        id="nationality_id"
                                        name="nationality_id"
                                        value={data.nationality_id}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        autoComplete="nationality_id"
                                        onChange={(e) =>
                                            setData(
                                                "nationality_id",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="" disabled>
                                            Seleccionar País
                                        </option>
                                        {nationalities.map((country) => (
                                            <option
                                                key={country.id}
                                                value={country.id}
                                            >
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
                                    <InputLabel
                                        htmlFor="club"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Club
                                    </InputLabel>
                                    <select
                                        id="club_id"
                                        name="club_id"
                                        value={data.club_id}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        autoComplete="club_id"
                                        onChange={(e) =>
                                            setData("club_id", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="" disabled>
                                            Seleccionar Club
                                        </option>
                                        {player.statistics
                                            .reduce((unique, c) => {
                                                if (
                                                    !unique.some(
                                                        (club) =>
                                                            club.id ===
                                                            c.club.id
                                                    )
                                                ) {
                                                    unique.push(c.club);
                                                }
                                                return unique;
                                            }, [])
                                            .map((club) => (
                                                <option
                                                    key={club.id}
                                                    value={club.id}
                                                >
                                                    {club.name}
                                                </option>
                                            ))}
                                    </select>
                                    <InputError
                                        message={errors.club_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Categoría
                                    </InputLabel>
                                    <TextInput
                                        id="category"
                                        name="category"
                                        type="text"
                                        value={data.category}
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        required
                                    />
                                    <InputError
                                        message={errors.category}
                                        className="mt-2"
                                    />
                                </div>
                            </>
                        )}
                        {(level === "Internacional" ||
                            level === "Selección") && (
                            <>
                                <div>
                                    <InputLabel
                                        htmlFor="year"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Año
                                    </InputLabel>
                                    <TextInput
                                        id="year"
                                        name="year"
                                        type="number"
                                        value={data.year}
                                        onChange={(e) =>
                                            setData("year", e.target.value)
                                        }
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        required
                                    />
                                    <InputError
                                        message={errors.year}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="organizer"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Organizador
                                    </InputLabel>
                                    <select
                                        id="organizer"
                                        name="organizer"
                                        value={data.organizer}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        autoComplete="organizer"
                                        onChange={(e) =>
                                            setData("organizer", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="" disabled>
                                            Seleccionar organizador
                                        </option>
                                        <option value="AFC">AFC</option>
                                        <option value="CAF">CAF</option>
                                        <option value="CONCACAF">
                                            CONCACAF
                                        </option>
                                        <option value="CONMEBOL">
                                            CONMEBOL
                                        </option>
                                        <option value="FIFA">FIFA</option>
                                        <option value="OFC">OFC</option>
                                        <option value="UEFA">UEFA</option>
                                    </select>
                                    <InputError
                                        message={errors.organizer}
                                        className="mt-2"
                                    />
                                </div>
                                {level === "Internacional" && (
                                    <div>
                                        <InputLabel
                                            htmlFor="club"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Club
                                        </InputLabel>
                                        <select
                                            id="club_id"
                                            name="club_id"
                                            value={data.club_id}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            autoComplete="club_id"
                                            onChange={(e) =>
                                                setData(
                                                    "club_id",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="" disabled>
                                                Seleccionar Club
                                            </option>
                                            {player.statistics
                                                .reduce((unique, c) => {
                                                    if (
                                                        !unique.some(
                                                            (club) =>
                                                                club.id ===
                                                                c.club.id
                                                        )
                                                    ) {
                                                        unique.push(c.club);
                                                    }
                                                    return unique;
                                                }, [])
                                                .map((club) => (
                                                    <option
                                                        key={club.id}
                                                        value={club.id}
                                                    >
                                                        {club.name}
                                                    </option>
                                                ))}
                                        </select>
                                        <InputError
                                            message={errors.club_id}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                                {level == "Selección" && (
                                    <div>
                                        <InputLabel
                                            htmlFor="national_team_id"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            País
                                        </InputLabel>
                                        <select
                                            id="national_team_id"
                                            name="national_team_id"
                                            value={data.national_team_id}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            autoComplete="national_team_id"
                                            onChange={(e) =>
                                                setData(
                                                    "national_team_id",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        >
                                            <option value="" disabled>
                                                Seleccionar País
                                            </option>
                                            {player.nationalities.map(
                                                (country) => (
                                                    <option
                                                        key={country.id}
                                                        value={country.id}
                                                    >
                                                        {country.country}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                        <InputError
                                            message={errors.national_team_id}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center justify-center mt-6">
                            <DangerButton type="button" onClick={onClose}>
                                Cerrar
                            </DangerButton>
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Agregar
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTrophy;
