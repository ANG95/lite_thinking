import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Form, Input, Button, Typography, message, Card } from 'antd';

const { Title } = Typography;

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    const success = login(email, password);
    if (success) {
      navigate('/empresa');
    } else {
      message.error('Credenciales inválidas');
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
      <Card style={{ width: 350 }}>
        <Title level={3} style={{ textAlign: 'center' }}>Iniciar Sesión</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
          >
            <Input placeholder="Correo electrónico" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
