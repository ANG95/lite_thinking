import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ background: '#1890ff', padding: '0 1rem' }}>
      <Title level={4} style={{ color: '#fff', margin: 0, lineHeight: '64px' }}>
        Lite Thinking App - Panel
      </Title>
    </Header>
  );
};

export default AppHeader;
