import { useState } from 'react';
import { Button, Table, Form, Input, Row, Col, message } from 'antd';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import MainLayout from "../../layouts/MainLayout";

const InventarioPage = () => {
  const [productos, setProductos] = useState<any[]>([
    { codigo: 'P001', nombre: 'Producto 1', caracteristicas: 'Característica 1', precio: 100 },
    { codigo: 'P002', nombre: 'Producto 2', caracteristicas: 'Característica 2', precio: 150 },
    { codigo: 'P003', nombre: 'Producto 3', caracteristicas: 'Característica 3', precio: 200 },
  ]);
  const [email, setEmail] = useState<string>('');

  const columns = [
    { title: 'Código', dataIndex: 'codigo', key: 'codigo' },
    { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
    { title: 'Características', dataIndex: 'caracteristicas', key: 'caracteristicas' },
    { title: 'Precio', dataIndex: 'precio', key: 'precio' },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Inventario', 20, 10);

    doc.autoTable({
      head: [['Código', 'Nombre', 'Características', 'Precio']],
      body: productos.map(producto => [producto.codigo, producto.nombre, producto.caracteristicas, producto.precio]),
    });

    doc.save('Inventario.pdf');
  };

  const sendPDFByEmail = async () => {
  try {
    const pdf = new jsPDF();
    pdf.text('Inventario', 20, 10);

    pdf.autoTable({
      head: [['Código', 'Nombre', 'Características', 'Precio']],
      body: productos.map(producto => [producto.codigo, producto.nombre, producto.caracteristicas, producto.precio]),
    });

    // Convertimos el PDF a base64 para enviarlo por correo
    const pdfData = pdf.output('datauristring').split(',')[1];  // Elimina el prefijo "data:application/pdf;base64,"
    
    // Hacemos la petición POST al backend (FastAPI)
    const response = await axios.post('http://localhost:8000/send-email', {
      email,
      pdfData,
    });

    // Mostrar mensaje de éxito
    message.success(response.data.message);
  } catch (error) {
    // Mostrar mensaje de error
    message.error('Hubo un error al enviar el PDF.');
  }
};

  return (
    <MainLayout>
      <h1>Vista Inventario</h1>
      
      <Row gutter={16}>
        <Col span={8}>
          <Form
            onFinish={sendPDFByEmail}
            initialValues={{ email: '' }}
          >
            <Form.Item
              name="email"
              label="Correo Electrónico"
              rules={[{ required: true, type: 'email', message: 'Por favor ingresa un correo válido!' }]}
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo a donde enviar el PDF"
              />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Enviar PDF
            </Button>
          </Form>
        </Col>
        <Col span={16}>
          <Table
            id="productosTable"
            columns={columns}
            dataSource={productos}
            rowKey="codigo"
            pagination={false}
          />
        </Col>
      </Row>

      <Button onClick={generatePDF} type="primary" style={{ marginTop: '20px' }}>
        Descargar PDF
      </Button>
    </MainLayout>
  );
};

export default InventarioPage;
