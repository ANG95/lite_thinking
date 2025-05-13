import React from 'react';
import Header from '../components/atoms/Header';
import Sidebar from '../components/atoms/Sidebar';

const layoutStyles = {
  display: 'flex',
  minHeight: '100vh',
};

const contentStyles = {
  flex: 1,
  padding: '0rem',
  backgroundColor: '#f9f9f9',
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={layoutStyles}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={contentStyles}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
