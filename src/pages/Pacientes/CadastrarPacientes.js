import React, { useState } from 'react';
import './Pacientes.scss';
import axios from 'axios';

const CadastrarPacientes = () => {
  const [form, setForm] = useState({
    nome: '',
    data: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/pacientes', form);
      alert('Cliente cadastrado com sucesso!');
      window.location.href = '/consultar';
    } catch (err) {
      alert('Erro ao cadastrar cliente');
    }
  };

  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button onClick={() => window.location.href = '/consultar'}>Consultar Paciente</button>
        <button className="active" onClick={() => window.location.href = '/cadastrar'}>Cadastrar Cliente</button>
        <button onClick={() => window.location.href = '/cadastrar-servico'}>Cadastrar Serviço</button>
        <button onClick={() => window.location.href = '/financeiro'}>Financeiro</button>
        <button onClick={() => window.location.href = '/'}>Home</button>
      </aside>

      <div className="main-content">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Cadastrar Cliente</h2>
          <input name="nome" type="text" placeholder="Nome" onChange={handleChange} required />
          <input name="data" type="date" onChange={handleChange} required />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarPacientes;



