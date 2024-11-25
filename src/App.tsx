import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Inventory from './pages/inventory/Inventory';
import ProductDetail from './pages/inventory/ProductDetail';
import Details from './pages/suppliers/suppliersComponents/Details';
import Login from './pages/login/Login';
import ManageStore from './pages/manageStore/ManageStore';
import Orders from './pages/orders/Orders';
import Reports from './pages/reports/Reports';
import Settings from './pages/settings/Settings';
import Suppliers from './pages/suppliers/Suppliers';
import Landing from './pages/landing/Landing';
import Category from './pages/category/Category';
import CategoryDetails from './pages/category/categoryComponents/CategoryDetails';
import Errors from './pages/errors/Errors';
import ProtectedRoute from './Routes/ProtectedRoute.tsx'; // Importa el componente

const Layout: React.FC = () => {
    return (
        <>
            <div>
                <Sidebar />
            </div>
        </>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Errors />} />

                {/* Rutas protegidas */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/suppliers" element={<Suppliers />} />
                        <Route path="/suppliers/details/:name" element={<Details />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/manage-store" element={<ManageStore />} />
                        <Route path="/setting" element={<Settings />} />
                        <Route path="/products" element={<ProductDetail />} />
                    </Route>
                </Route>

                {/* Rutas solo para administradores */}
                <Route element={<ProtectedRoute roleRequired="Administrator" />}>
                    <Route element={<Layout />}>
                        <Route path="/category" element={<Category />} />
                        <Route path="/category/:categoryName" element={<CategoryDetails isDarkMode={false} />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
