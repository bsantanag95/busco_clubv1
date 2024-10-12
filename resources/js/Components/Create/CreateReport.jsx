import { useState } from "react";
import InputLabel from "../InputLabel";
import { Rating } from "@mui/material";
import { useForm } from "@inertiajs/react";
import InputError from "../InputError";
import TextInput from "../TextInput";
import DangerButton from "../DangerButton";
import PrimaryButton from "../PrimaryButton";

const CreateReport = ({ player, onClose }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        player_id: player.id,
        review: "",
        observation: "",
        improvement: "",
        strength: "",
        weakness: "",
        skill: "",
        comment: "",
        conclusion: "",
        author: "",
        stars: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("reports.store"), {
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

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10"
            onClick={handleOverlayClick}
        >
            <div className="w-full sm:max-w-md px-6 py-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg overflow-y-auto max-h-[90vh]">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <InputLabel htmlFor="review" value="Reseña" />
                            <textarea
                                id="review"
                                name="review"
                                value={data.review}
                                onChange={(e) =>
                                    setData("review", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.review}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="observation"
                                value="Observaciones"
                            />
                            <textarea
                                id="observation"
                                name="observation"
                                value={data.observation}
                                onChange={(e) =>
                                    setData("observation", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.observation}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="improvement" value="Mejoras" />
                            <textarea
                                id="improvement"
                                name="improvement"
                                value={data.improvement}
                                onChange={(e) =>
                                    setData("improvement", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.improvement}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="strength" value="Fortalezas" />
                            <textarea
                                id="strength"
                                name="strength"
                                value={data.strength}
                                onChange={(e) =>
                                    setData("strength", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.strength}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="weakness"
                                value="Debilidades"
                            />
                            <textarea
                                id="weakness"
                                name="weakness"
                                value={data.weakness}
                                onChange={(e) =>
                                    setData("weakness", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.weakness}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="skill" value="Habilidades" />
                            <textarea
                                id="skill"
                                name="skill"
                                value={data.skill}
                                onChange={(e) =>
                                    setData("skill", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.skill}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="comment" value="Comentarios" />
                            <textarea
                                id="comment"
                                name="comment"
                                value={data.comment}
                                onChange={(e) =>
                                    setData("comment", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.comment}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel
                                htmlFor="conclusion"
                                value="Conclusión"
                            />
                            <textarea
                                id="conclusion"
                                name="conclusion"
                                value={data.conclusion}
                                onChange={(e) =>
                                    setData("conclusion", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.conclusion}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="author" value="Autor" />
                            <TextInput
                                id="author"
                                name="author"
                                value={data.author}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                required
                            />
                            <InputError
                                message={errors.author}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-2">
                            <InputLabel htmlFor="stars" value="Evaluación" />
                            <Rating
                                name="half-rating"
                                precision={0.5}
                                value={data.stars}
                                onChange={(_, newValue) =>
                                    setData("stars", newValue)
                                }
                            />
                            <InputError
                                message={errors.stars}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-center mt-6 col-span-2">
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

export default CreateReport;
