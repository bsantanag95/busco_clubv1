import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";
import ClubSelect from "@/Components/ClubSelect";

const ClubFound = ({ player, onClose, clubs }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        player_id: player.id,
        club_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("transfers.store"), {
            player_id: data.player_id,
            club_id: data.last_club_id,
            onSuccess: () => {
                onClose();
                reset();
            },
            onError: () => {
                console.log("Error al actualizar:", errors);
            },
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10">
            <div className="w-full sm:max-w-md mt-1 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div>
                        <InputLabel htmlFor="club" value="Nuevo Club" />
                        <ClubSelect
                            clubs={clubs}
                            data={data}
                            setData={setData}
                            fieldName="club_id"
                        />
                        <InputError
                            message={errors.last_club_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <DangerButton type="button" onClick={onClose}>
                            Cancelar
                        </DangerButton>
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Guardar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClubFound;
