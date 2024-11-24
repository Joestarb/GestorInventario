import React from 'react';
import { ButtonProps } from '../models/dtos/components/componentsProps';
import useTheme from '../hooks/useTheme';


const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    buttonClassname = ''
}) => {
    const { isDarkMode } = useTheme();
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-1 rounded-md font-semibold transition-colors text-base
                  ${disabled ? 'bg-gray-400 cursor-not-allowed' : ' '} ${className}
                  ${isDarkMode ? ' bg-blue-700 hover:bg-[#4a88e6]  ' : 'bg-blue-500 text-white hover:bg-blue-700'}
                  ${buttonClassname}
                  `}
        >
            {children}
        </button>
    );
};

export default Button;
