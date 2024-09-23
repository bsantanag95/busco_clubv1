import { useState, useEffect } from "react";

const MultipleSelectEdit = ({
    nationalities,
    initialNationalities = [],
    setData,
    setError,
}) => {
    const [selectedNationalities, setSelectedNationalities] = useState([]);

    useEffect(() => {
        const initialSelections = initialNationalities.map((nat) => ({
            id: nat.id,
            value: nat.id,
        }));
        setSelectedNationalities(initialSelections);
        setData(
            "nationalities",
            initialSelections.map((n) => n.value)
        );
    }, [initialNationalities]);

    const handleAddNationality = () => {
        setSelectedNationalities([
            ...selectedNationalities,
            { id: Date.now(), value: "" },
        ]);
    };

    const handleRemoveNationality = (id) => {
        const updatedNationalities = selectedNationalities.filter(
            (n) => n.id !== id
        );
        setSelectedNationalities(updatedNationalities);
        setData(
            "nationalities",
            updatedNationalities
                .map((n) => n.value)
                .filter((value) => value !== "")
        );
    };

    const handleNationalityChange = (id, value) => {
        const isDuplicate = selectedNationalities.some(
            (n) => n.value === value
        );

        if (isDuplicate) {
            setError("nationalities", "El país ya ha sido seleccionado.");
            return;
        }

        const updatedNationalities = selectedNationalities.map((n) =>
            n.id === id ? { ...n, value } : n
        );

        setSelectedNationalities(updatedNationalities);
        setData(
            "nationalities",
            updatedNationalities
                .map((n) => n.value)
                .filter((value) => value !== "")
        );
        setError("nationalities", null);
    };

    return (
        <div>
            {selectedNationalities.map((nationality, index) => (
                <div className="mt-4 flex items-center" key={nationality.id}>
                    <select
                        name={`nationalities[${index}]`}
                        value={nationality.value}
                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        onChange={(e) =>
                            handleNationalityChange(
                                nationality.id,
                                e.target.value
                            )
                        }
                        required
                    >
                        <option value="" disabled>
                            Seleccionar país
                        </option>
                        {nationalities.map((nat) => (
                            <option key={nat.id} value={nat.id}>
                                {nat.country}
                            </option>
                        ))}
                    </select>
                    {selectedNationalities.length > 1 && (
                        <button
                            type="button"
                            onClick={() =>
                                handleRemoveNationality(nationality.id)
                            }
                            className="ml-2 bg-red-800 text-white px-2 rounded"
                        >
                            -
                        </button>
                    )}
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddNationality}
                className="mt-4 bg-blue-950 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
                +
            </button>
        </div>
    );
};

export default MultipleSelectEdit;
