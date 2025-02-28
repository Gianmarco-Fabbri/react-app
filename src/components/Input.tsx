import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
    return (
        <div className="flex flex-col">
            {label && <label className="text-sm mb-1">{label}</label>}
            <input
                className={`border rounded px-2 py-1 ${error ? "border-red-500" : "border-gray-300"} ${className}`}
                {...props}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};

export default Input;
