import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que buscas no existe, por ahora le enviaremos a la pantalla de login."
      extra={<Button type="primary"><Link to="/login">Volver al login</Link></Button>}
    />
  );
};

export default NotFoundPage;
