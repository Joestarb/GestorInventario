import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Función para verificar si el usuario está autenticado
const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('userToken');
    return !!token; // Devuelve true si hay un token, de lo contrario, false
};

// Componente para proteger rutas públicas
const PublicRoute: React.FC = () => {
    if (isAuthenticated()) {
        // Si el usuario ya está autenticado, redirige a "/dashboard" u otra ruta protegida
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />; // Permite el acceso a las rutas públicas si no está autenticado
};

// Componente de ruta protegida existente
const ProtectedRoute: React.FC<{ roleRequired?: 'Administrator' }> = ({ roleRequired }) => {
    if (!isAuthenticated()) {
        // Si el usuario no está autenticado, lo redirige al login
        return <Navigate to="/login" replace />;
    }

    if (roleRequired && !hasAdminRole()) {
        // Si el rol requerido es "Administrator" y el usuario no tiene ese rol, redirige al dashboard
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />; // Permite el acceso si está autenticado y cumple los requisitos
};

// Función para verificar si el usuario tiene el rol de Administrador
const hasAdminRole = (): boolean => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
        return false; // Si no hay token, no tiene acceso
    }

    try {
        const user = JSON.parse(userToken); // Parseamos el token
        return user?.role === 'Administrator';
    } catch (error) {
        return false; 
    }
};

export { isAuthenticated, hasAdminRole }; 
export { PublicRoute, ProtectedRoute };
