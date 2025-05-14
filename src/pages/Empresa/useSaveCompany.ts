import axios from "axios";
import { useState } from "react";

const DataCompanyInitial = {
    data: {},
    isLoading: false,
    error: false
}

interface SaveCompanyParams {
    nit: string;
    companyName: string;
    address: string;
    phoneNumber: string;
}

const useSaveCompany = () => {
    const [dataCompany, setDataCompany] = useState(DataCompanyInitial);

    // Función para guardar la empresa
    const saveCompany = async ({ nit, companyName, address, phoneNumber }: SaveCompanyParams) => {
        try {
            setDataCompany((prev) => ({
                ...prev,
                isLoading: true
            }));

            // Simulamos la llamada a la API (guardamos en localStorage)
            const resultSaveCompany = await axios.post('http://localhost:1995/saveCompany', {
                nit,
                companyName,
                address,
                phoneNumber,
            });

            setDataCompany((prev) => ({
                ...prev,
                data: resultSaveCompany.data,
            }));

            // Guardar en localStorage para simular el backend
            const empresas = JSON.parse(localStorage.getItem('empresas') || '[]');
            const updated = [...empresas, resultSaveCompany.data];
            localStorage.setItem('empresas', JSON.stringify(updated));

        } catch (error) {
            console.error('Error al guardar empresa:', error);
            setDataCompany((prev) => ({
                ...prev,
                isLoading: false,
                error: true
            }));
        } finally {
            setDataCompany((prev) => ({
                ...prev,
                isLoading: false,
            }));
        }
    };

    return {
        dataCompany,
        saveCompany,
    };
};

export default useSaveCompany;