import React from 'react'
import LoginForm from './loginComponents/LoginForm'
import loginImg from '../../assets/bglogin.jpg'
const Login: React.FC = () => {
  return (
    <div className='h-screen flex flex-row'>
      <div className='  w-[70%]'>
        <img src={loginImg} alt="loginimg" className=' w-full h-full  bg-cover  bg-repeat' />
      </div>
      <div className='  w-[30%]  '>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login