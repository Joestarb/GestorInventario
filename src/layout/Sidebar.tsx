// App.tsx
import React from 'react';
import useLanguage from '../hooks/useLanguage';
import { FaHome } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaCircleUser } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import useTheme from '../hooks/useTheme';
import { Link } from 'react-router-dom';
const Sidebar: React.FC = () => {
    const { isDarkMode } = useTheme();
    const { language, changeLanguage, translate } = useLanguage();

    return (
        //dark component is a global variable to change the color of all things like assets or sideabar
        <div className={` w-[12%]  fixed  h-screen flex-col justify-between gap-3 items-center flex py-12 ${isDarkMode ? 'dark-components' : 'ligth-components'}`}>
            <section className=' flex w-full  pl-8  h-full  justify-evenly  flex-col gap-2 '>

                <Link to={"/"}>
                    <button className={`flex items-center ${isDarkMode ? ' hover:text-indigo-700' : 'hover:text-blue-400'} duration-500 gap-2 text-2xl`}>
                        <FaHome className="   text-[1.2em]" />

                        <p className=' '>{translate('dashboard')}</p>

                    </button>
                </Link>

                <Link to={"/inventory"}>
                    <button className={`flex items-center ${isDarkMode ? ' hover:text-indigo-700' : 'hover:text-blue-400'} duration-500 gap-2 text-2xl`}>
                        <FaBoxOpen className="   text-[1.2em]" />

                        <p className=' '>{translate('inventory')}</p>

                    </button>
                </Link>

                <Link to={"/reports"}>
                    <button className={`flex items-center ${isDarkMode ? ' hover:text-indigo-700' : 'hover:text-blue-400'} duration-500 gap-2 text-2xl`}>
                        <DiGoogleAnalytics className="   text-[1.2em]" />
                        <p className=' '>{translate('reports')}</p>
                    </button>
                </Link>

                <Link to={"/suppliers"}>
                    <button className={`flex items-center ${isDarkMode ? ' hover:text-indigo-700' : 'hover:text-blue-400'} duration-500 gap-2 text-2xl`}>
                        <FaCircleUser className="   text-[1.2em]" />
                        <p className=' '>{translate('supliers')}</p>
                    </button>
                </Link>

                <Link to={"/orders"}>
                    <button className={`flex items-center ${isDarkMode ? ' hover:text-indigo-700' : 'hover:text-blue-400'} duration-500 gap-2 text-2xl`}>
                        <FaBoxes className="   text-[1.2em]" />
                        <p className=' '>{translate('orders')}</p>
                    </button>
                </Link>

<Link to={"/manage-store"}>
                <button className={`flex ${isDarkMode ? ' hover:text-indigo-700' : 'hover:text-blue-400'}     duration-500 text-2xl  whitespace-pre-wrap  items-center`}>
                    <FaClipboardList className="   text-[1.2em]" />
                    <p className='   pr-9'>{translate('manageStore')}</p>
                </button>
                </Link>

            </section>

            <section>
                <div className='flex    gap-3 text-2xl'>
                    <button className='hover:text-indigo-700     duration-500 flex items-center gap-3'>
                        <CiLogout className="text-[1.2em]" />
                        log out
                    </button>
                </div>
                <br />
                <button className='hover:text-indigo-700     duration-500' onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}>
                    {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </button>
            </section>

        </div >
    );
};

export default Sidebar;
