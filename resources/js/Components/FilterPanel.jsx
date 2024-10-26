import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Select from "react-select";

const FilterPanel = ({ positions, nationalities, clubs, onFilterChange }) => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        positions: [],
        nationalities: [],
        minAge: "",
        maxAge: "",
        gender: "",
        club: "",
    });

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const handleClearFilters = () => {
        const clearedFilters = {
            positions: [],
            nationalities: [],
            minAge: "",
            maxAge: "",
            gender: "",
            club: "",
        };
        setFilters(clearedFilters);
        onFilterChange(clearedFilters);
    };

    return (
        <>
            <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center bg-gray-200 p-1 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                {filterOpen ? (
                    <FilterAltOffIcon
                        fontSize="small"
                        className="text-gray-700 dark:text-gray-300"
                    />
                ) : (
                    <FilterAltIcon
                        fontSize="small"
                        className="text-gray-700 dark:text-gray-300"
                    />
                )}
            </button>
            {filterOpen && (
                <div className="absolute left-0 mt-2 w-full z-10 bg-white dark:bg-gray-900 shadow-lg p-4 rounded">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <Select
                                isMulti
                                options={positions.map((pos) => ({
                                    value: pos.short_name,
                                    label: pos.name,
                                }))}
                                value={filters.positions}
                                onChange={(selectedOptions) =>
                                    handleFilterChange(
                                        "positions",
                                        selectedOptions
                                    )
                                }
                                className="mb-2"
                                placeholder="Seleccionar posiciones"
                            />
                        </div>
                        <div>
                            <Select
                                isMulti
                                options={nationalities.map((nat) => ({
                                    value: nat.country,
                                    label: nat.country,
                                }))}
                                value={filters.nationalities}
                                onChange={(selectedOptions) =>
                                    handleFilterChange(
                                        "nationalities",
                                        selectedOptions
                                    )
                                }
                                className="mb-2"
                                placeholder="Seleccionar nacionalidades"
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                value={filters.minAge}
                                onChange={(e) =>
                                    handleFilterChange("minAge", e.target.value)
                                }
                                placeholder="Edad mínima"
                                className="block mb-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                value={filters.maxAge}
                                onChange={(e) =>
                                    handleFilterChange("maxAge", e.target.value)
                                }
                                placeholder="Edad máxima"
                                className="block mb-2 border rounded w-full"
                            />
                        </div>
                        <div>
                            <select
                                value={filters.gender}
                                onChange={(e) =>
                                    handleFilterChange("gender", e.target.value)
                                }
                                className="block mb-2 border rounded w-full"
                            >
                                <option value="">Seleccionar género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div>
                            <select
                                value={filters.club}
                                onChange={(e) =>
                                    handleFilterChange("club", e.target.value)
                                }
                                className="block mb-2 border rounded w-full"
                            >
                                <option value="">Seleccionar club</option>
                                {clubs.map((club) => (
                                    <option key={club.id} value={club.name}>
                                        {club.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={handleClearFilters}
                        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}
        </>
    );
};

export default FilterPanel;
