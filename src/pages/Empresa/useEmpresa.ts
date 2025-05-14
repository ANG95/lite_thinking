import axios from "axios";
import { useState } from "react";

const DataCompanyInitial = {
  data: {},
  isLoading: false,
  error: false
}

interface saveCompanyParams {
  nit: string,
  companyName: string,
  direccion: string,
  phoneNumber: string
}

const useCompany = () => {
  const [dataCompany, setDataCompany] = useState(DataCompanyInitial);

  const saveCompany = ({ nit, direccion, companyName, phoneNumber }: saveCompanyParams) => {
    try {
      setDataCompany((prev) => ({
        ...prev,
        isLoading: true
      }))
      const resultSaveCompany = axios.post('http:localhost:1995/saveCompany', {
        "nit": nit,
        "companyName": companyName,
        "address": direccion,
        "phoneNumber": phoneNumber
      })
      setDataCompany((prev) => ({
        ...prev,
        data: resultSaveCompany
      }))
    } catch (error) {
      console.log('error')
      setDataCompany((prev) => ({
        ...prev,
        isLoading: false,
        error: true
      }))
    } finally {
      setDataCompany((prev) => ({
        ...prev,
        isLoading: false,
      }))
    }
  }
  return {
    dataCompany,
    saveCompany
  }
}

export default useCompany;