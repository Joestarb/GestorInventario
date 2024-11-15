// LoginForm.tsx
import React from 'react'
import Input from '../../../components/Input'
import useLanguage from '../../../hooks/useLanguage'
import Button from '../../../components/Button'
import logo from '../../../assets/Component 1.png'

const LoginForm: React.FC = () => {
  const { translate } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='flex space-x-10 md:pb-5 lg:pb-10'>
        <h2 className="text-3xl lg:text-5xl pt-8 lg:pt-12 text-center text-white font-extrabold">
          {translate("welcome")}
        </h2>
        <img src={logo} alt="logo" className="w-20 md:w-32 lg:w-32" />
      </div>
      <form className="flex flex-col w-full items-center gap-5 md:gap-7 lg:gap-10">
        <Input
          className="w-full text-white space-y-1 md:space-y-5 lg:space-y-5 font-bold"
          inputClassname='bg-transparent border-0 border-b-2 border-white focus:outline-none'
          label={`${translate("email")}`}
          name="email"
          placeholder="chanchito@gmail.com"
        />
        <Input
          className="w-full text-white space-y-1 md:space-y-5 lg:space-y-5 font-bold"
          inputClassname='bg-transparent border-0 border-b-2 border-white focus:outline-none'
          label={`${translate("password")}`}
          name="password"
          placeholder="********"
          type="password"
        />
        <Button className="w-full" buttonClassname='bg-orange-500 hover:bg-orange-700'>
          {translate("login")}
        </Button>
      </form>
    </div>
  )
}

export default LoginForm