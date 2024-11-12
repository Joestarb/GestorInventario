import React from 'react';
import { SelectProps } from '../models/dtos/components/componentsProps';
import useTheme from '../hooks/useTheme';
const Select: React.FC<SelectProps> = ({ options, value, onChange, label, placeholder,  }) => {
    const { isDarkMode } = useTheme()
    return (
        <div className="  w-44">
            {label && <label className="block text-sm font-medium  mb-1">{label}</label>}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${isDarkMode? 'bg-[#130159]':' bg-white border'} w-full p-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent`}
            >
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
