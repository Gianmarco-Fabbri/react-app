import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, className = "", ...props }) => {
  return (
      <button type="button" className={`px-4 py-2 rounded ${className}`} {...props}>
        {label}
      </button>
  );
};

export default Button;
