import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Función para verificar si el usuario está autenticado
const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('userToken');
    return !!token; // Devuelve true si hay un token, de lo contrario, false
};

// Función para verificar si el usuario tiene el rol de Administrador
const hasAdminRole = (): boolean => {
    const user = JSON.parse(localStorage.getItem('userToken') || '{}');
    return user?.role === 'Administrator'; // Verifica si el rol es "Administrator"
};

// Componente de ruta protegida
const ProtectedRoute: React.FC<{ roleRequired?: 'Administrator' }> = ({ roleRequired }) => {
    if (!isAuthenticated()) {
        // Si el usuario no está autenticado, lo redirige al login
        return <Navigate to="/login" replace />;
    }

    if (roleRequired && !hasAdminRole()) {
        // Si el rol requerido es "Administrator" y el usuario no tiene ese rol, redirige a otra página (por ejemplo, Dashboard)
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />; // Si está autenticado y tiene el rol adecuado, permite el acceso a las rutas
};

export default ProtectedRoute;
