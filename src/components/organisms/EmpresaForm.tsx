import React, { useState } from 'react';
import { Form, Input, Button, Typography, List, Card, message } from 'antd';

export interface Empresa {
  nit: string;
  nombre: string;
  direccion: string;
  telefono: string;
}

const { Title } = Typography;

const EmpresaForm = () => {
  const [form] = Form.useForm();
  const [empresas, setEmpresas] = useState<Empresa[]>(() => {
    const stored = localStorage.getItem('empresas');
    return stored ? JSON.parse(stored) : [];
  });

  const handleSubmit = (values: Empresa) => {
    const updatedEmpresas = [...empresas, values];
    setEmpresas(updatedEmpresas);
    localStorage.setItem('empresas', JSON.stringify(updatedEmpresas));
    form.resetFields();
    message.success('Empresa registrada exitosamente');
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', paddingTop: 40 }}>
      <Card>
        <Title level={3}>Registrar Empresa</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ nit: '', nombre: '', direccion: '', telefono: '' }}
        >
          <Form.Item
            label="NIT"
            name="nit"
            rules={[{ required: true, message: 'El NIT es obligatorio' }]}
          >
            <Input placeholder="NIT" />
          </Form.Item>

          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: 'El nombre es obligatorio' }]}
          >
            <Input placeholder="Nombre de la empresa" />
          </Form.Item>

          <Form.Item label="Dirección" name="direccion">
            <Input placeholder="Dirección" />
          </Form.Item>

          <Form.Item label="Teléfono" name="telefono">
            <Input placeholder="Teléfono" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <div style={{ marginTop: 40 }}>
        <Title level={4}>Empresas registradas</Title>
        <List
          bordered
          dataSource={empresas}
          renderItem={(empresa) => (
            <List.Item>
              <strong>{empresa.nombre}</strong> - {empresa.nit}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default EmpresaForm;
