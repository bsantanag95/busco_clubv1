import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import DangerButton from "../DangerButton";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import ClubSelect from "../ClubSelect";

const CreateTrajectoryClubs = ({ player, seasons, clubs, level, onClose }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        player_id: player.id,
        club_id: "",
        season_id: "",
        level: level,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("statistics.store"), {
            onSuccess: () => {
                reset();
                setData("club_id", "");
                setData("season_id", "");
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
                    <div className="grid grid-cols-2 gap-4">
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
                    <div className="flex items-center justify-center mt-4">
                        <DangerButton type="button" onClick={onClose}>
                            Cerrar
                        </DangerButton>
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Agregar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTrajectoryClubs;
