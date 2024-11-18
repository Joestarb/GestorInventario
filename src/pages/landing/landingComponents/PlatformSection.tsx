import React, { useState, useEffect } from 'react';
import Circles from '../../../assets/Strip-Patterns.png';
import EclipsePurple from '../../../assets/Eclipse.png';
import EclipseBlue from '../../../assets/eclipseblue.png';
import StarOne from '../../../assets/star 1.png';
import StarTwo from '../../../assets/star 2.png';
import StarThree from '../../../assets/star 3.png';
import { Link } from 'react-router-dom';

const PlatformSection: React.FC = () => {
    const [bgStyles, setBgStyles] = useState({
        backgroundSize: 'auto, auto, auto, auto, auto, auto, cover',
        backgroundPosition: '15% 30%, 85% 10%, 93% 17%, 65% 95%, left top, right 10%, center center'
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setBgStyles({
                    backgroundSize: '15%, 10%, 10%, auto, auto, auto, cover',
                    backgroundPosition: '15% 5%, 75% 20%, 82% 24%, center 95%, center top, right top, center center'
                });

                if (window.matchMedia("(orientation: landscape)").matches) {
                    setBgStyles({
                      backgroundSize: '5%, 5%, 5%, 5%, 50%, auto, cover',
                      backgroundPosition: '5% 10%, 95% 5%, 90% 15%, center 95%, left top, right top, center center'
                    });
                }
            } else {
                setBgStyles({
                    backgroundSize: 'auto, auto, auto, auto, auto, auto, cover',
                    backgroundPosition: '15% 30%, 85% 10%, 93% 17%, 65% 95%, left top, right 10%, center center'
                });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleResize);
        } 
    },[])

    return (
        <div
            style={{
                backgroundImage: `url(${StarOne}), url(${StarTwo}), url(${StarThree}), url(${StarOne}), url(${EclipseBlue}), url(${EclipsePurple}), url(${Circles})`,
                backgroundPosition: bgStyles.backgroundPosition,
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
                backgroundSize: bgStyles.backgroundSize
            }}  
        >
            <div className="w-full h-screen flex justify-center items-center">
                <div className='text-center space-y-5'>
                    <h1 className='text-white font-extrabold text-4xl md:text-5xl lg:text-6xl'>Conoce nuestra plataforma: <br/> Intuitiva y Eficaz</h1>
                    <p className='text-white text-sm md:text-base lg:text-lg'>"Con una interfaz diseñada para simplificar cada proceso, nuestro software <br/> te ofrece una experiencia visual clara y accesible para gestionar <br/> tu inventario sin complicaciones."</p>
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

export default PlatformSection