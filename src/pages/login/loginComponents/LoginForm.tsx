import React from 'react'
import Input from '../../../components/Input'
import useLanguage from '../../../hooks/useLanguage'
import Button from '../../../components/Button';
import logo from '../../../assets/LOGOFLUXCORE1.png'
const LoginForm: React.FC = () => {
  const { translate } = useLanguage();

  const handleSubmit = () =>{
    return 0
  }
  return (
    <div className=' flex  flex-col items-center  pt-12  h-full '>
      <img src={logo} alt="logo"  className=' w-32'/>
      <h2 className=' text-5xl  pt-12'> {translate("welcome")}! </h2>
      <p className='pb-24'>{translate("welcomeMessage")}</p>
      <form action="" className=' flex flex-col w-full items-center  gap-12 h-full'>
      <Input
        className='  w-96'
        label={`${translate("search")}`}
        name='email'
        placeholder='Correo@correo.com'
      />
      <Input
        className='  w-96'
        label={`${translate("password")}`}
        name='email'
        placeholder='Correo@correo.com'
      />
      <Button
      onClick={handleSubmit}
      >
         {translate("login")}
      </Button>
      </form>

    </div>
  )
}

export default LoginForm