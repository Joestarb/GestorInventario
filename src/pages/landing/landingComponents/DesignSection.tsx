import React, { useState, useEffect } from 'react';
import Footer from '../../../assets/footer.png';
import Inventory from '../../../assets/Inventory.png';
import Dashboard from '../../../assets/Dashboard.png';
import EclipseBlue from '../../../assets/eclipseblue.png';
import { Link } from 'react-router-dom';

const DesignSections: React.FC = () => {
    const [bgStyles, setBgStyles] = useState({
        backgroundSize: '35%, 40%, auto, 100%',
        backgroundPosition: '90% 80%, 75% 20%, top right, bottom center'
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setBgStyles({
                    backgroundSize: '65%, 80%, auto, auto',
                    backgroundPosition: '85% 85%, center 65%, top center, bottom center'
                });

                if (window.matchMedia("(orientation: landscape)").matches) {
                    setBgStyles({
                      backgroundSize: '25%, 30%, auto, 100%',
                      backgroundPosition: '75% 85%, 95% 50%, left center, bottom center'
                    });
                }
            } else {
                setBgStyles({
                    backgroundSize: '35%, 40%, auto, 100%',
                    backgroundPosition: '90% 80%, 75% 20%, top right, bottom center'
                });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize)
        } 
    },[])
    
    return (
        <div className='w-full h-screen'
            style={{
                backgroundImage: `url(${Dashboard}), url(${Inventory}), url(${EclipseBlue}), url(${Footer})`,
                backgroundPosition: bgStyles.backgroundPosition,
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
                backgroundSize: bgStyles.backgroundSize
            }}
        >
            <div className="w-full h-screen flex justify-start py-20 md:items-center lg:items-center px-20">
                <div className='text-center space-y-5'>
                    <h1 className='text-white font-extrabold text-4xl md:text-5xl lg:text-5xl'>Atención al cliente 24/7</h1>
                    <p className='text-white text-base md:text-base lg:text-lg'>“Exotismo en cada detalle, responsabilidad en cada acción”</p>
                    <button className="text-white bg-gradient-to-r from-[#F66B0E] to-purple-500 h-12 w-32 rounded-2xl">
                        <Link to="/login">
                            EMPEZAR
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesignSections