import React from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'
const Errors: React.FC = () => {

    const { isDarkMode } = useTheme()
    return (
        <>
            <div className={`min-h-screen flex items-center ${isDarkMode ? ' bg-gray-600' : 'bg-white'}`}>
                <div className="container mx-auto p-4 flex flex-wrap items-center">
                    <div className="w-full md:w-6/12 text-center p-4 ">
                        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" alt="Not Found" />
                    </div>
                    <div className="w-full md:w-6/12 text-center md:text-left p-4">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500">404</h1>
                        <div className="text-xl md:text-3xl font-medium mb-4">
                            Ups. Esta página no ha sido encontrada.
                        </div>
                        <div className="text-lg mb-8 sm:text-center lg:text-start">
                            Parece que algo salió mal. Tal vez escribiste mal la dirección o la página ya no está aquí.
                        </div>
                        <Link to="/inventory">
                            <a className={`border border-blue-500 rounded p-4 ${isDarkMode ? ' hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>Regresar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errors