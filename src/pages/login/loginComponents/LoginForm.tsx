// LoginForm.tsx
import React from 'react'
import Input from '../../../components/Input'
import useLanguage from '../../../hooks/useLanguage'
import Button from '../../../components/Button'
import logo from '../../../assets/LOGOFLUXCORE1.png'

const LoginForm: React.FC = () => {
  const { translate } = useLanguage()

  const handleSubmit = () => {
    return 0
  }

  return (
    <div className="flex flex-col items-center pt-8 px-4 h-full lg:pt-12">
      <img src={logo} alt="logo" className="w-24 lg:w-32" />
      <h2 className="text-3xl lg:text-5xl pt-8 lg:pt-12 text-center">
        {translate("welcome")}!
      </h2>
      <p className="pb-12 lg:pb-24 text-center">{translate("welcomeMessage")}</p>
      <form className="flex flex-col w-full max-w-sm items-center gap-6 lg:gap-12 h-full">
        <Input
          className="w-full"
          label={`${translate("search")}`}
          name="email"
          placeholder="Correo@correo.com"
        />
        <Input
          className="w-full"
          label={`${translate("password")}`}
          name="password"
          placeholder="••••••••"
          type="password"
        />
        <Button onClick={handleSubmit} className="w-full lg:w-48">
          {translate("login")}
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
