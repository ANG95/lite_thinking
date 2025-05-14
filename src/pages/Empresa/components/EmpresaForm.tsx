import { useImperativeHandle, forwardRef } from 'react';
import { Form, Input, Typography, message } from 'antd';

export interface Empresa {
  nit: string;
  companyName: string;
  address: string;
  phoneNumber: string;
}

export interface EmpresaFormRef {
  submit: () => void;
  getValues: () => Empresa;
}

const { Title } = Typography;

const EmpresaForm = forwardRef<EmpresaFormRef>((_, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    submit: () => form.submit(),
    getValues: () => form.getFieldsValue() as Empresa,
  }));

  const handleSubmit = (values: Empresa) => {
    const empresas = JSON.parse(localStorage.getItem('empresas') || '[]');
    const updated = [...empresas, values];
    localStorage.setItem('empresas', JSON.stringify(updated));
    message.success('Empresa registrada exitosamente');
    form.resetFields();
  };

  return (
    <div style={{ paddingRight: '20px'}}>
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
          name="companyName"
          rules={[{ required: true, message: 'El nombre es obligatorio' }]}
        >
          <Input placeholder="Nombre de la empresa" />
        </Form.Item>

        <Form.Item label="Dirección" name="address">
          <Input placeholder="Dirección" />
        </Form.Item>

        <Form.Item label="Teléfono" name="phoneNumber">
          <Input placeholder="Teléfono" />
        </Form.Item>
      </Form>
    </div>
  );
});

export default EmpresaForm;