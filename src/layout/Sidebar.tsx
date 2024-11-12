import React, { useState } from 'react';
import { BiSolidReport } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import { MdLogout, MdOutlineInventory } from "react-icons/md";
import { PiUserSquareBold } from "react-icons/pi";
import { TbCheckupList } from "react-icons/tb";
import { Link, Outlet, useLocation } from 'react-router-dom';
import avatar from "../assets/avatar.png";
import banderamx from "../assets/banderamx.jpg";
import logo from '../assets/LOGOFLUXCORE1.png';
import banderaus from "../assets/united_flag.png";
import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';
import { LanguageToggleButtonProps } from '../models/dtos/components/componentsProps';


const LanguageToggleButton: React.FC<LanguageToggleButtonProps> = () => {
    const { language, changeLanguage } = useLanguage();
    const { isDarkMode } = useTheme();

    const toggleLanguage = () => {
        changeLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <button onClick={toggleLanguage} className="flex text-gray-500 mr-3 bg-transparent border-0 cursor-pointer">
            <img
                src={language === 'es' ? banderamx : banderaus}
                alt="Bandera"
                className="w-6 h-4 mt-1"
            />
            <span className={`${isDarkMode ? 'text-white' : 'text-gray-500'} ml-1`}>
                {language === 'es' ? 'Es' : 'Us'}
            </span>
        </button>
    );
};

const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { language, translate } = useLanguage();
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <section className={`min-h-screen  ${isDarkMode ? 'dark-components' : 'ligth-components'}`}>
                {/* Sidebar */}
                <nav className={`fixed top-0 left-0 z-20 h-full overflow-y-auto transition-transform transform border-r-2 w-60 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${isDarkMode ? 'dark-components' : 'ligth-components'} flex flex-col justify-between`}>
                    <div className="flex flex-col">

                        <a href="#" className="flex items-center px-4 py-5">
                            <img src={logo} alt="" className="w-12" /> <span className='ml-2 text-xl '>Fluxcore</span>
                        </a>

                        <nav className="text-sm font-medium text-gray-500 " >
                            <Link to="/">
                                <a className={`flex items-center p-4 transition cursor-pointer  group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200' : 'text-gray-500'}`}>
                                    <IoHomeSharp className='mr-1 w-4 h-4' />
                                    <span className='font-sans'>{translate('dashboard')}</span>
                                </a>
                            </Link>
                            <Link to={"/inventory"}>
                                <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/inventory' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200' : 'text-gray-500'}`}>
                                    <MdOutlineInventory className='mr-1 w-4 h-4' />
                                    <span className='font-sans'>{translate('inventory')}</span>
                                </a>
                            </Link>
                            <Link to={"/reports"}>
                                <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/reports' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                                    <BiSolidReport className='mr-1 w-4 h-4' />
                                    <span className='font-sans'>{translate('reports')}</span>
                                </a>
                            </Link>
                            <Link to={"/suppliers"}>
                                <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/suppliers' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                                    <PiUserSquareBold className='mr-1 w-4 h-4' />
                                    <span className='font-sans'>{translate('supliers')}</span>
                                </a>
                            </Link>
                            <Link to={"/orders"}>
                                <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/orders' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                                    <BsFillBoxSeamFill className='mr-1 w-4 h-4' />
                                    <span className='font-sans'>{translate('orders')}</span>
                                </a>
                            </Link>
                            <Link to={"/manage-store"}>
                                <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/manage-store' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
                                    <TbCheckupList className='mr-1 w-4 h-4' />
                                    <span className='font-sans'>{translate('manageStore')}</span>
                                </a>
                            </Link>
                        </nav>
                    </div>

                    {/* Lista de abajo*/}
                    <div className="text-sm font-medium text-gray-500">
                        <hr></hr>
                        <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200 hover:bg-gray-700' : 'text-gray-500'}`} href="#" onClick={toggleTheme}>
                            <FaSun className='mr-1 w-4 h-4' />
                            <span className='font-sans'>{translate('changeMode')}</span>
                        </a>
                        <Link to={"/setting"}>
                            <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${location.pathname === '/setting' ? 'bg-blue-600 text-white' : isDarkMode ? ' text-gray-200 hover:bg-gray-700' : 'text-gray-500'}`} href="#">
                                <IoSettingsSharp className='mr-1 w-4 h-4' />
                                <span className='font-sans'>{translate('setting')}</span>
                            </a>
                        </Link>
                        <a className={`flex items-center p-4 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200 ${isDarkMode ? ' text-gray-200' : 'text-gray-500'}`} href="#">
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
                                <svg className={`w-8 h-7  p-2 flex items-center justify-center bg-gray-200 hover:bg-gray-700 rounded ${isDarkMode ? ' text-white bg-gray-800' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                            <LanguageToggleButton language={language} />
                            <a href="#" className={`flex text-gray-500 ml-5 sm:ml-2 ${isDarkMode ? ' text-white' : 'text-gray-500'}`}>
                                <svg className="shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </a>
                            <a href="#" className="ml-2.5 sm:ml-4 avatar avatar-sm">
                                <img src={avatar} alt="Photo of Praveen Juge" />
                            </a>
                        </div>
                    </header>

                    <div className="p-4">
                        <div className={`-mt-2 border-2 rounded h-full overflow-auto ${isDarkMode ? ' border-white' : 'border-gray-300'}`}>
                            <Outlet />
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
