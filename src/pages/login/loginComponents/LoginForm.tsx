import React, { useState } from 'react';
import Input from '../../../components/Input';
import useLanguage from '../../../hooks/useLanguage';
import Button from '../../../components/Button';
import logo from '../../../assets/Component 1.png';
import { useLoginMutation } from "../../../features/Auth/authApi.ts";
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { useNavigate } from 'react-router-dom'; // Hook para redirección

const LoginForm: React.FC = () => {
    const { translate } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading, error }] = useLoginMutation();
    const navigate = useNavigate(); // Inicializa el hook para navegar

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await login({ mail_user: email, password_user: password }).unwrap();
            console.log('Login exitoso:', result.token);

            // Guarda el token en localStorage
            localStorage.setItem('userToken', JSON.stringify(result.token));

            // Muestra SweetAlert
            Swal.fire({
                title: translate('loginSuccess'), // Mensaje de éxito
                text: `${translate('welcome')} ${result.token.name_user}`,
                icon: 'success',
                confirmButtonText: translate('proceed'),
            }).then(() => {
                // Redirige al usuario al dashboard
                navigate('/dashboard');
            });

        } catch (err) {
            console.error('Error en el login:', err);

            // Muestra alerta de error
            Swal.fire({
                title: translate('loginFailed'), // Mensaje de error
                text: translate('loginError'),
                icon: 'error',
                confirmButtonText: translate('retry'),
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-10 md:pb-5 lg:pb-10">
                <h2 className="text-3xl lg:text-5xl pt-8 lg:pt-12 text-center text-white font-extrabold">
                    {translate('welcome')}
                </h2>
                <img src={logo} alt="logo" className="w-20 md:w-32 lg:w-32" />
            </div>
            <form
                onSubmit={handleLogin}
                className="flex flex-col w-full items-center gap-5 md:gap-7 lg:gap-10"
            >
                <Input
                    className="w-full text-white space-y-1 md:space-y-5 lg:space-y-5 font-bold"
                    inputClassname="bg-transparent border-0 border-b-2 border-white focus:outline-none"
                    label={`${translate('email')}`}
                    name="email"
                    type="email"
                    placeholder="chanchito@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    className="w-full text-white space-y-1 md:space-y-5 lg:space-y-5 font-bold"
                    inputClassname="bg-transparent border-0 border-b-2 border-white focus:outline-none"
                    label={`${translate('password')}`}
                    name="password"
                    placeholder="********"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    className="w-full"
                    buttonClassname="bg-orange-500 hover:bg-orange-700"
                    disabled={isLoading}
                >
                    {isLoading ? translate('loading') : translate('login')}
                </Button>
            </form>
            {error && <p className="text-red-500">{translate('loginError')}</p>}
        </div>
    );
};

export default LoginForm;
