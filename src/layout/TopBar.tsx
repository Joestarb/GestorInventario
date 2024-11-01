import React from 'react';
import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';
import Input from '../components/Input';
import { FaBell, FaSun } from "react-icons/fa";

const TopBar: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme(); 
    const { translate } = useLanguage();

    return (
        <div className={`w-screen flex items-center justify-evenly pt-3 ${isDarkMode ? 'dark-components' : 'light-components'} pb-4`}>
            <Input
                placeholder={`${translate("email")}`}
                label=''
                name='Search'
                className='w-1/2'
            />
            <div className='flex text-2xl gap-3'>
                <FaBell />
                <FaSun onClick={toggleTheme} className="cursor-pointer" /> 
            </div>
        </div>
    );
};

export default TopBar;
