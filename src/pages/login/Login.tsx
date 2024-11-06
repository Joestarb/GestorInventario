// Login.tsx
import React from 'react'
import LoginForm from './loginComponents/LoginForm'
import loginImg from '../../assets/bglogin.jpg'

const Login: React.FC = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-[60%]">
        <img
          src={loginImg}
          alt="login background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center p-4 bg-white">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
