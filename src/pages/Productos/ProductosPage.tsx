import { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, Row, Col } from 'antd';
import MainLayout from "../../layouts/MainLayout";

const { Option } = Select;

const ProductosPage = () => {
  const [form] = Form.useForm();
  const [productos, setProductos] = useState<any[]>([]);

  const handleSubmit = (values: any) => {
    setProductos([...productos, values]);
    form.resetFields();
    console.log('Producto añadido:', values);
  };

  return (
    <MainLayout>
      <h1>Vista Productos</h1>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          precioUSD: 0,
          precioEUR: 0,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="codigo"
              label="Código"
              rules={[{ required: true, message: 'Por favor ingresa el código del producto' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="nombre"
              label="Nombre del producto"
              rules={[{ required: true, message: 'Por favor ingresa el nombre del producto' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="caracteristicas"
              label="Características"
              rules={[{ required: true, message: 'Por favor ingresa las características del producto' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="precioUSD"
              label="Precio en USD"
              rules={[{ required: true, message: 'Por favor ingresa el precio en USD' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="precioEUR"
              label="Precio en EUR"
              rules={[{ required: true, message: 'Por favor ingresa el precio en EUR' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="empresa"
              label="Empresa"
              rules={[{ required: true, message: 'Por favor selecciona la empresa' }]}
            >
              <Select placeholder="Selecciona una empresa">
                <Option value="empresa1">Empresa 1</Option>
                <Option value="empresa2">Empresa 2</Option>
                <Option value="empresa3">Empresa 3</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Guardar Producto
          </Button>
        </Form.Item>
      </Form>

      <h3>Productos Registrados</h3>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <strong>{producto.nombre}</strong> ({producto.codigo}) - {producto.precioUSD} USD, {producto.precioEUR} EUR
            <br />
            <small>Características: {producto.caracteristicas}</small>
            <br />
            <small>Empresa: {producto.empresa}</small>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default ProductosPage;
