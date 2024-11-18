import React, { useState, useEffect } from 'react';
import Adaptability from '../../../assets/adaptabilidad.png';
import Metrics from '../../../assets/metricas.png';
import Innovation from '../../../assets/innovacion.png';
import StarOne from '../../../assets/star 1.png';
import StarTwo from '../../../assets/star 2.png';
import Header from '../../../assets/header.png';

const BenefitsSection: React.FC = () => {
    const [bgStyles, setBgStyles] = useState({
        backgroundSize: 'auto, auto, auto, auto, 3%',
        backgroundPosition: '7% center, center center, 93% center, 12% 95%, 10% 83%',
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                if (window.matchMedia("(orientation: landscape)").matches) {
                    setBgStyles({
                        backgroundSize: '30%, 30%, 30%, 5%, 5%, auto',
                        backgroundPosition: '5% center, center center, 95% center, 15% 85%, 20% 95%, top center',
                    });
                } else {
                    setBgStyles({
                        backgroundSize: '65%, 65%, 65%, 15%, 10%, auto',
                        backgroundPosition: 'center top, center center, center bottom, 95% 70%, 10% 30%, top center',
                    });
                }
            } else {
                setBgStyles({
                    backgroundSize: 'auto, auto, auto, auto, 3%, 100%',
                    backgroundPosition: '7% center, center center, 93% center, 12% 95%, 10% 83%, top center',
                });
            }
        };

        handleResize(); // Llamada inicial
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Agregar un array de dependencias vacío

    return (
        <div
            className='w-full h-screen'
            style={{
                backgroundImage: `url(${Adaptability}), url(${Metrics}), url(${Innovation}), url(${StarOne}), url(${StarTwo}), url(${Header})`,
                backgroundPosition: bgStyles.backgroundPosition,
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
                backgroundSize: bgStyles.backgroundSize,
            }}
        ></div>
    );
};

export default BenefitsSection;
