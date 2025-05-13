import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  return (
    <Sider
      width={200}
      style={{ background: '#fff', height: '99vh', position: 'fixed', left: 0 }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="/empresa" icon={<HomeOutlined />}>
          <Link to="/empresa">Empresa</Link>
        </Menu.Item>
        <Menu.Item key="/productos" icon={<AppstoreOutlined />}>
          <Link to="/productos">Productos</Link>
        </Menu.Item>
        <Menu.Item key="/inventario" icon={<DatabaseOutlined />}>
          <Link to="/inventario">Inventario</Link>
        </Menu.Item>
        <Menu.Item key="/login" icon={<LogoutOutlined />}>
          <Link to="/login">Salir</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
