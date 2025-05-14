import { useState, useEffect } from "react";
import axios from "axios";

interface Company {
    nit: string;
    companyName: string;
    address: string;
    phoneNumber: string;
}

const useGetCompanies = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    // Función para obtener las empresas
    const getCompanies = () => {
        setIsLoading(true);
        try {
            // Simulamos la llamada al backend (obtenemos de localStorage)
            const storedCompanies = JSON.parse(localStorage.getItem('empresas') || '[]');
            setCompanies(storedCompanies);
            // const response = await axios.get("http://localhost:1995/companies"); // <--- CAMBIA AQUÍ
            // setCompanies(response.data);
        } catch (error) {
            console.error('Error al obtener empresas:', error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCompanies();
    }, []);

    return {
        companies,
        isLoading,
        error,
        getCompanies
    };
};

export default useGetCompanies;
