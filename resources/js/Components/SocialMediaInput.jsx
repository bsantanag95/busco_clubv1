import { useState } from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

const SocialMediaInput = ({
    label,
    id,
    prefix,
    setData,
    initialUsername,
    error,
    className = "",
}) => {
    const [username, setUsername] = useState(initialUsername);

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleBlur = () => {
        setData((prevData) => ({
            ...prevData,
            [id]: username ? `${prefix}${username}` : "",
        }));
    };

    return (
        <div className="mt-4">
            <InputLabel htmlFor={id} value={label} />
            <div className="flex w-full">
                <span className="px-3 flex items-center bg-gray-100 dark:bg-gray-700 border border-r-0 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-l-md">
                    {prefix}
                </span>
                <input
                    id={id}
                    name={id}
                    value={username}
                    className={
                        "block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-r-md shadow-sm " +
                        className
                    }
                    autoComplete={id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <InputError message={error} className="mt-2" />
        </div>
    );
};

export default SocialMediaInput;
