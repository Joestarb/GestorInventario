import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Inventory from './pages/inventory/Inventory';
import ProductDetail from './pages/inventory/ProductDetail';
import Details from './pages/suppliers/Details';
import Login from './pages/login/Login';
import ManageStore from './pages/manageStore/ManageStore';
import Orders from './pages/orders/Orders';
import Reports from './pages/reports/Reports';
import Settings from './pages/settings/Settings';
import Suppliers from './pages/suppliers/Suppliers';

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
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/details/:name" element={<Details />} /> 
          <Route path="/orders" element={<Orders />} />
          <Route path="/manage-store" element={<ManageStore />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/products" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
