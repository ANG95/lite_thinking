import React, { useState } from 'react';

export interface Empresa {
  nit: string;
  nombre: string;
  direccion: string;
  telefono: string;
}

const EmpresaForm = () => {
  const [formData, setFormData] = useState<Empresa>({
    nit: '',
    nombre: '',
    direccion: '',
    telefono: '',
  });

  const [empresas, setEmpresas] = useState<Empresa[]>(() => {
    const stored = localStorage.getItem('empresas');
    return stored ? JSON.parse(stored) : [];
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nit || !formData.nombre) {
      alert('NIT y Nombre son obligatorios');
      return;
    }

    const updatedEmpresas = [...empresas, formData];
    setEmpresas(updatedEmpresas);
    localStorage.setItem('empresas', JSON.stringify(updatedEmpresas));
    setFormData({ nit: '', nombre: '', direccion: '', telefono: '' });
  };

  return (
    <div>
      <h2>Registrar Empresa</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nit"
          placeholder="NIT"
          value={formData.nit}
          onChange={handleChange}
          required
        />
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>

      <h3>Empresas registradas</h3>
      <ul>
        {empresas.map((e) => (
          <li key={e.nit}>
            <strong>{e.nombre}</strong> - {e.nit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpresaForm;
