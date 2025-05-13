import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyles = {
  width: '200px',
  background: '#eeeeee',
  padding: '1rem',
  height: '100vh',
};

const Sidebar = () => {
  return (
    <aside style={sidebarStyles}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/empresa">Empresa</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/inventario">Inventario</Link></li>
          <li><Link to="/login">Salir</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
