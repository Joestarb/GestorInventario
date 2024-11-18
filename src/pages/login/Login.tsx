import React from 'react'
import LoginForm from './loginComponents/LoginForm';
import BgLogin from '../../assets/edificio.jpg';
import { useGetRolesQuery } from '../../features/roles/rolesApi';
import { useEffect, useState } from 'react';
const Login: React.FC = () => {
  const { data: rolesData, isLoading, error } = useGetRolesQuery();
  const [roles, setRoles] = useState<typeof rolesData>([]);

  useEffect(() => {
    if (rolesData && roles.length === 0) {
      setRoles(rolesData); // Guarda los roles al cargarlos
    }
  }, [rolesData]);

  if (isLoading && roles.length === 0) return <p>Cargando roles...</p>;
  if (error) return <p>Error al cargar los roles: {JSON.stringify(error)}</p>;
  
  console.log(roles)
 
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
