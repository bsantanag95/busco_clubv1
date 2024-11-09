import {
    ClubSelect,
    DangerButton,
    InputError,
    InputLabel,
    PrimaryButton,
    TextInput,
} from "@/Components";
import { useForm } from "@inertiajs/react";

const EditTrajectoryClubs = ({
    statistic,
    seasons,
    clubs,
    player,
    onClose,
}) => {
    const { data, setData, patch, processing, reset, errors } = useForm({
        club_id: statistic.club_id,
        season_id: statistic.season_id,
        level: statistic.level,
        goals: statistic.goals,
        assists: statistic.assists,
        goals_conceded: statistic.goals_conceded,
        yellow_cards: statistic.yellow_cards,
        red_cards: statistic.red_cards,
        games_played: statistic.games_played,
        games_started: statistic.games_started,
    });

    const isGoalkeeper = player.positions.some(
        (position) => position.name === "Portero"
    );

    const submit = (e) => {
        e.preventDefault();
        patch(route("statistics.update", statistic.id), {
            onSuccess: () => {
                onClose();
                reset();
            },
            onError: (errors) => {
                console.log("Errores al actualizar:", errors);
            },
        });
    };

    const removeSeasonPrefix = (season) => {
        return season.replace("Temporada ", "");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            >
                                <option value="">Seleccionar temporada</option>
                                {seasons
                                    .slice()
                                    .reverse()
                                    .map((season, index) => (
                                        <option key={index} value={season.id}>
                                            {removeSeasonPrefix(season.season)}
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
                                htmlFor="club"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Club
                            </InputLabel>
                            <ClubSelect
                                clubs={clubs}
                                data={data}
                                setData={setData}
                                fieldName="club_id"
                                menuPlacement="bottom"
                            />
                            <InputError
                                message={errors.club_id}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <InputLabel
                                htmlFor="goals"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Goles
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="goals"
                                min="0"
                                value={data.goals}
                                onChange={(e) =>
                                    setData("goals", e.target.value)
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <InputError
                                message={errors.goals}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor={
                                    isGoalkeeper ? "goals_conceded" : "assists"
                                }
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                {isGoalkeeper
                                    ? "GC (Goles Concedidos)"
                                    : "Asistencias"}
                            </InputLabel>
                            <TextInput
                                id={isGoalkeeper ? "goals_conceded" : "assists"}
                                type="number"
                                min="0"
                                value={
                                    isGoalkeeper
                                        ? data.goals_conceded
                                        : data.assists
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={(e) =>
                                    setData(
                                        isGoalkeeper
                                            ? "goals_conceded"
                                            : "assists",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError
                                message={
                                    isGoalkeeper
                                        ? errors.goals_conceded
                                        : errors.assists
                                }
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="yellow_cards"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Tarjetas Amarillas
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="yellow_cards"
                                min="0"
                                value={data.yellow_cards}
                                onChange={(e) =>
                                    setData("yellow_cards", e.target.value)
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <InputError
                                message={errors.yellow_cards}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="red_cards"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Tarjetas Rojas
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="red_cards"
                                min="0"
                                value={data.red_cards}
                                onChange={(e) =>
                                    setData("red_cards", e.target.value)
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <InputError
                                message={errors.red_cards}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="games_played"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Partidos Jugados
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="games_played"
                                min="0"
                                value={data.games_played}
                                onChange={(e) =>
                                    setData("games_played", e.target.value)
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <InputError
                                message={errors.games_played}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="games_started"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Partidos Comenzados
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="games_started"
                                min="0"
                                value={data.games_started}
                                onChange={(e) =>
                                    setData("games_started", e.target.value)
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <InputError
                                message={errors.games_started}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <DangerButton type="button" onClick={onClose}>
                            Cancelar
                        </DangerButton>
                        <PrimaryButton
                            className="ml-4"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Guardando..." : "Guardar"}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTrajectoryClubs;
