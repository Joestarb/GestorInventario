import React from 'react'
import LoginForm from './loginComponents/LoginForm';
import BgLogin from '../../assets/edificio.jpg';

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${BgLogin})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-lg rounded-3xl p-6 md:p-10 lg:p-10 h-auto w-auto">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
