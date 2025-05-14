import { useRef } from 'react';
import MainLayout from '../../layouts/MainLayout';
import EmpresaForm, { EmpresaFormRef } from './components/EmpresaForm';
import useCompany from './useEmpresa';
import { Button } from 'antd';

const EmpresaPage = () => {
  const { saveCompany } = useCompany()

  const formRef = useRef<EmpresaFormRef>(null);

  const handleExternalSubmit = () => {
    formRef.current?.submit();
  };

  const handleGetValues = () => {
    const values = formRef.current?.getValues();
    saveCompany(values)
    formRef.current?.submit();

    console.log('Valores actuales:', values);
  };

  return (
    <MainLayout>
      <EmpresaForm ref={formRef} />
      <Button type="primary" onClick={() => handleGetValues()}>
        Guardar empresa
      </Button>
    </MainLayout>
  );
};

export default EmpresaPage;
