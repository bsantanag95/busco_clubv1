import Select, { components } from "react-select";

const ClubOption = (props) => (
    <components.Option {...props}>
        <div className="flex items-center">
            <img
                src={`/storage/${props.data.nationality.flag}`}
                alt={`Flag of ${props.data.nationality.name}`}
                className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            {props.data.label}
        </div>
    </components.Option>
);

const ClubSingleValue = (props) => (
    <components.SingleValue {...props}>
        <div className="flex items-center">
            <img
                src={`/storage/${props.data.nationality.flag}`}
                alt={`Flag of ${props.data.nationality.name}`}
                className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            {props.data.label}
        </div>
    </components.SingleValue>
);

const ClubSelect = ({
    clubs,
    data,
    setData,
    fieldName,
    menuPlacement = "top",
}) => {
    const clubOptions = clubs.map((club) => ({
        value: club.id,
        label: club.name,
        nationality: club.nationality,
    }));

    const handleChange = (selectedOption) => {
        setData(fieldName, selectedOption ? selectedOption.value : null);
    };

    const customStyles = {
        singleValue: (provided) => ({
            ...provided,
            color: "#D1D5DB",
            fontSize: "0.9rem",
        }),
        control: (provided) => ({
            ...provided,
            minHeight: "36px",
            height: "36px",
            borderColor: "#D1D5DB",
            backgroundColor: "#111827",
            transition: "all 0.2s ease",
            fontSize: "0.9rem",
            "&:hover": {
                borderColor: "#D1D5DB",
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#111827",
            color: "#D1D5DB",
            fontSize: "0.9rem",
            maxHeight: "50vh",
            overflowY: "auto",
        }),
        option: (provided) => ({
            ...provided,
            backgroundColor: "#111827",
            padding: "10px 14px",
            fontSize: "0.9rem",
            "&:hover": {
                backgroundColor: "#1b42b5",
            },
        }),
        valueContainer: (provided) => ({
            ...provided,
            height: "36px",
            padding: "0 5px",
        }),
        input: (provided) => ({
            ...provided,
            margin: "0px",
            fontSize: "0.9rem",
            color: "#D1D5DB",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#D1D5DB",
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
        indicatorsContainer: () => ({
            height: "36px",
        }),
    };

    return (
        <Select
            options={clubOptions}
            value={clubOptions.find(
                (option) => option.value === data[fieldName]
            )}
            onChange={handleChange}
            menuPlacement={menuPlacement}
            menuPosition="fixed"
            isSearchable={true}
            styles={customStyles}
            classNamePrefix="custom-select"
            placeholder="Seleccionar club"
            components={{ Option: ClubOption, SingleValue: ClubSingleValue }}
            theme={(theme) => ({
                ...theme,
            })}
        />
    );
};

export default ClubSelect;
