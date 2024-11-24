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
                className={`${isDarkMode? 'bg-gray-700 border':' bg-white border'} w-full p-2 shadow-sm focus:border-blue-500 focus:outline-none`}
            >
                {placeholder && <option className={`${isDarkMode? 'text-white':' text-black'}`} value="" disabled>{placeholder}</option>}
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
