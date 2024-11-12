import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Inventory from './pages/inventory/Inventory';
import Reports from './pages/reports/Reports';
import Suppliers from './pages/suppliers/Suppliers';
import Details from './pages/suppliers/Details';
import Orders from './pages/orders/Orders';
import ManageStore from './pages/manageStore/ManageStore';
import Settings from './pages/settings/Settings';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
