// src/components/Input.tsx
import React from "react";
import { InputProps } from "../models/dtos/components/componentsProps";
import useTheme from '../hooks/useTheme';





const Input: React.FC<InputProps> = ({

  label,
  type = "text",
  value,
  placeholder = "",
  name,
  onChange,
  className = "",
  disabled = false,
}) => {
const { isDarkMode } = useTheme(); 

  return (
    <div className={`input-wrapper ${className}`}>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
        ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}${isDarkMode  ? 'dark-components' : 'bg-light'}`}
      />
    </div>
  );
};

export default Input;
