import React, { useState, useEffect } from 'react';
import circles from '../../../assets/circles.png';
import CircleOrange from '../../../assets/orange.png';
import CirclePurple from '../../../assets/purple.png';
import EclipsePurple from '../../../assets/Eclipse.png';
import EclipseOrange from '../../../assets/difuminado.png';
import StarOne from '../../../assets/star 1.png';
import StarTwo from '../../../assets/star 2.png';
import StarThree from '../../../assets/star 3.png';
import Logo from '../../../assets/LOGOFLUXCORE1.png';

const IntroSection: React.FC = () => {
  const [bgStyles, setBgStyles] = useState({
    backgroundSize: '8%, auto, auto, auto, auto, auto, auto, auto, auto, cover',
    backgroundPosition: 'center 5%, 3% center, 15% 30%, 85% 10%, 93% 17%, 65% 95%, 5% top, right 70%, right 70%, center center',
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgStyles({
          backgroundSize: '22%, 15%, 15%, 10%, 15%, 15%, auto, 40%, auto, cover',
          backgroundPosition: 'center 5%, 5% 25%, 10% 5%, 83% 15%, 95% 20%, 20% 90%, center top, right 95%, right 20%, center center',
        });

        if (window.matchMedia("(orientation: landscape)").matches) {
          setBgStyles({
            backgroundSize: '0%, 7%, 5%, 5%, 5%, 5%, 35%, 15%, 50%, cover',
            backgroundPosition: 'center 8%, 5% 45%, 7% 10%, 90% 10%, 95% 20%, 15% 95%, left top, right 90%, right 20%, center center',
          });
        }
      } else {
        setBgStyles({
          backgroundSize: '8%, auto, auto, auto, auto, auto, auto, auto, auto, cover',
          backgroundPosition: 'center 5%, 3% center, 15% 30%, 85% 10%, 93% 17%, 65% 95%, 5% top, right 70%, right 70%, center center',
        });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Logo}), url(${CircleOrange}), url(${StarOne}), url(${StarTwo}), url(${StarThree}), url(${StarOne}), url(${EclipseOrange}), url(${CirclePurple}), url(${EclipsePurple}), url(${circles})`,
        backgroundPosition: bgStyles.backgroundPosition,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundSize: bgStyles.backgroundSize,
      }}
    >
      <div className="text-center space-y-5">
        <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-7xl">
          Software de <br /> Gestión de <br /> Inventario
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg">
          "Si buscas una solución para llevar un control preciso de inventarios con métricas <br /> detalladas y una gestión eficiente de proveedores, ¡somos la opción ideal <br /> para optimizar tu operación!"
        </p>
        <button className="text-white bg-gradient-to-r from-[#F66B0E] to-purple-500 h-12 w-32 rounded-2xl">
          EMPEZAR
        </button>
      </div>
    </div>
  );
};

export default IntroSection;