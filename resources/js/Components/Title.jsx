import React from "react";

const Title = ({ titulo }) => {
    return (
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="text-green-500">
                <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </span>
            <span className="tracking-wide">{titulo}</span>
        </div>
    );
};

export default Title;
