import React from 'react';
import { ButtonProps } from '../models/dtos/components/componentsProps';
import useTheme from '../hooks/useTheme';


const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = ''
}) => {
    const { isDarkMode } = useTheme();
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-md font-semibold transition-colors 
                  ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
                  text-white ${className}
                  ${isDarkMode ? ' bg-[#130159] text-white' : 'hover:text-blue-400'}
                  `}
        >
            {children}
        </button>
    );
};

export default Button;
