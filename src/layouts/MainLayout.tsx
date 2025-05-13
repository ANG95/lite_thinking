import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/atoms/Sidebar';
import AppHeader from '../components/atoms/Header';

const { Content } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout style={{ marginLeft: 200, }}>
        <AppHeader />
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 'calc(88vh)' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
