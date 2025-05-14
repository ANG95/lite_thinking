import React from "react";
import { Table } from "antd";
import { Empresa } from "./EmpresaForm";

interface Props {
    companies: Empresa[];
}

const EmpresaTable: React.FC<Props> = ({ companies }) => {
    return (
        <div style={{ padding: '20px' }}>
            <Table
                dataSource={companies}
                pagination={false} 
                columns={[
                    { title: 'NIT', dataIndex: 'nit', key: 'nit' },
                    { title: 'Nombre', dataIndex: 'companyName', key: 'companyName' },
                    { title: 'Dirección', dataIndex: 'address', key: 'address' },
                    { title: 'Teléfono', dataIndex: 'phoneNumber', key: 'phoneNumber' },
                ]}
                rowKey="nit"
            />
        </div>
    );
};

export default EmpresaTable;
