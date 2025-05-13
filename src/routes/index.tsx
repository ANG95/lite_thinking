import { JSX } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import LoginPage from '../pages/Login/LoginPage';
import EmpresaPage from '../pages/Empresa/EmpresaPage';
import ProductosPage from '../pages/Productos/ProductosPage';
import InventarioPage from '../pages/Inventario/InventarioPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/empresa" element={<ProtectedRoute><EmpresaPage /></ProtectedRoute>} />
    <Route path="/productos" element={<ProtectedRoute><ProductosPage /></ProtectedRoute>} />
    <Route path="/inventario" element={<ProtectedRoute><InventarioPage /></ProtectedRoute>} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
