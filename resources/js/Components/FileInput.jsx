import InputLabel from "./InputLabel";
import InputError from "./InputError";

const FileInput = ({ label, id, setData, error, className = "" }) => {
    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setData((prevData) => ({
            ...prevData,
            [id]: selectedFile,
        }));
    };

    return (
        <div className="mt-4">
            <InputLabel htmlFor={id} value={label} />
            <input
                type="file"
                id={id}
                name={id}
                className={`mt-1 block w-full text-sm text-gray-900 dark:text-gray-300 
                            file:mr-4 file:py-2 file:px-4 
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-indigo-50 dark:file:bg-gray-700 file:text-indigo-600 dark:file:text-gray-300
                            hover:file:bg-indigo-100 dark:hover:file:bg-gray-600
                            ${className}`}
                onChange={handleChange}
            />
            {error && <InputError message={error} className="mt-2" />}
        </div>
    );
};

export default FileInput;
