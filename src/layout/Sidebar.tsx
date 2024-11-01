import React, { useState } from 'react';
import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { PiUserSquareBold } from "react-icons/pi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { TbCheckupList } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import logo from '../assets/LOGOFLUXCORE1.png'
import banderaus from "../assets/united_flag.png"
import banderamx from "../assets/banderamx.jpg"
import avatar from "../assets/avatar.png"

interface LanguageToggleButtonProps {
    language: string;
    changeLanguage: (lang: string) => void;
}

const LanguageToggleButton: React.FC<LanguageToggleButtonProps> = ({ language, changeLanguage }) => {
    const toggleLanguage = () => {
        changeLanguage(language === 'es' ? 'en' : 'es');
    };
    const { isDarkMode } = useTheme();
    return (
        <button onClick={toggleLanguage} className="flex text-gray-500 mr-3 bg-transparent border-0 cursor-pointer">
            <img
                src={language === 'es' ? banderamx : banderaus}
                alt="Bandera"
                className="w-6 h-4 mt-1"
            />
            <span className={`${isDarkMode ? ' text-white' : 'text-gray-500'}`}>{language === 'es' ? 'Es' : 'Us'}</span>
        </button>
    );
};
const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { language, changeLanguage, translate } = useLanguage();
    const { isDarkMode, toggleTheme } = useTheme();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <section className={`min-h-screen bg-gray-50 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {/* Sidebar */}
                <nav className={`fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition-transform transform border-r-2 w-60 
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                    <a href="#" className="flex items-center px-4 py-5">
                        <img src={logo} alt="Kutty Logo" className="w-12" /> <span className='ml-2 text-xl '>Fluxcore</span>
                    </a>

                    <nav className="text-sm font-medium text-gray-500 p-2 " >
                        <Link to={"/"}>
                            <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:cursor-pointer hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href='#'>
                                <IoHomeSharp className='mr-1 w-4 h-4' />
                                <span className='font-sans '>{translate('dashboard')}</span>
                            </a>
                        </Link>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`}>
                            <MdOutlineInventory className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('inventory')}</span>
                        </a>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                            <BiSolidReport className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('reports')}</span>
                        </a>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                            <PiUserSquareBold className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('supliers')}</span>
                        </a>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                            <BsFillBoxSeamFill className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('orders')}</span>
                        </a>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                            <TbCheckupList className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('manageStore')}</span>
                        </a>
                    </nav>

                    {/* Lista de abajo*/}
                    <div className="absolute bottom-0 w-full text-sm font-medium text-gray-500 p-4 ">
                        <hr></hr>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#" onClick={toggleTheme}>
                            <FaSun className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('changeMode')}</span>
                        </a>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                            <IoSettingsSharp className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('setting')}</span>
                        </a>
                        <a className={`flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                            <MdLogout className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('logout')}</span>
                        </a>
                    </div>
                </nav>



                {/* Contenido Principal */}
                <div className="ml-0 transition md:ml-60">
                    <header className="flex items-center justify-between w-full px-4 h-14">
                        <div className="flex items-center w-full md:w-auto">
                            {/* Boton para movil */}
                            <button onClick={toggleSidebar} className="block md:hidden mr-3">
                                <span className="sr-only">Menu</span>
                                <svg className={`w-8 h-7  p-2 flex items-center justify-center bg-gray-200 hover:bg-gray-400 rounded ${isDarkMode ? ' text-black bg-gray-300' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Buscar */}
                            <div className="flex items-center w-48  md:w-80 ">
                                <svg className={`w-5 h-5 mr-1 text-black ${isDarkMode ? ' text-white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input className="w-72 bg-transparent border-1 form-input pl-2" placeholder={translate('searchPlaceholder')} />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <LanguageToggleButton language={language} changeLanguage={changeLanguage} />
                            <a href="#" className={`flex text-gray-500 ml-3 ${isDarkMode ? ' text-white' : 'text-gray-500'}`}>
                                <svg className="shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </a>
                            <a href="#" className="ml-4 avatar avatar-sm">
                                <img src={avatar} alt="Photo of Praveen Juge" />
                            </a>
                        </div>
                    </header>

                    <div className="p-4">
                        {/* Aqui va a ir el contenido */}
                        <div className={`-mt-2 border-2 rounded h-screen ${isDarkMode ? ' border-white' : 'border-gray-300'}`}>
                        </div>
                    </div>
                </div>
                
                {isSidebarOpen && (
                    <div
                        onClick={toggleSidebar}
                        className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden"
                    ></div>
                )}
            </section>
        </>
    );
};

export default Sidebar;
