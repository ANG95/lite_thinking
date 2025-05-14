import { useRef, useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import EmpresaForm, { EmpresaFormRef, Empresa } from './components/EmpresaForm';
import { Button, Row, Col } from 'antd';
import EmpresaTable from './components/EmpresaTable';

const EmpresaPage = () => {
  const formRef = useRef<EmpresaFormRef>(null);
  const [companies, setCompanies] = useState<Empresa[]>([]);

  // Función que carga desde localStorage
  const getCompanies = () => {
    const stored = JSON.parse(localStorage.getItem('empresas') || '[]');
    setCompanies(stored);
  };

  useEffect(() => {
    getCompanies(); // carga inicial
  }, []);

  const handleGetValues = () => {
    const values = formRef.current?.getValues();

    if (values) {
      const updated = [...companies, values];
      localStorage.setItem('empresas', JSON.stringify(updated));
      setCompanies(updated); // 🔁 ACTUALIZA estado → se refleja en tabla

      console.log('Empresa guardada:', values);
      formRef.current?.submit(); // limpia formulario (opcional)
    }
  };

  const handleClear = () => {
    localStorage.removeItem('empresas');
    setCompanies([]); // limpiar estado
  };

  return (
    <MainLayout>

      <Row gutter={16}>
        <Col span={12}>
          {/* <EmpresaForm /> */}
          <EmpresaForm ref={formRef} />
        </Col>

        <Col span={12}>
          {/* <EmpresaTable companies={companies} /> */}
          <EmpresaTable companies={companies} />
        </Col>
      </Row>

      <Button type="primary" onClick={handleGetValues}>
        Guardar empresa
      </Button>

      <Button
        type="default"
        danger
        onClick={handleClear}
        style={{ marginLeft: '10px' }}
      >
        Eliminar todas las empresas
      </Button>

    </MainLayout>
  );
};

export default EmpresaPage;
