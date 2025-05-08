import React, { useState } from 'react';
import './Pacientes.scss';

const CadastrarPacientes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    servico: '',
    horario: '',
    preco: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const novoPaciente = await response.json();
        alert(`Paciente ${novoPaciente.nome} cadastrado com sucesso!`);

        setFormData({
          nome: '',
          dataNascimento: '',
          servico: '',
          horario: '',
          preco: ''
        });
      } else {
        alert('Erro ao cadastrar paciente');
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      alert('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button onClick={() => window.location.href = '/consultar'}>Consultar Paciente</button>
        <button className="active">Cadastrar Paciente</button>
        <button>Financeiro</button>
      </aside>

      <div className="main-content">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Cadastrar Paciente</h2>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="servico"
            placeholder="Serviço"
            value={formData.servico}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="preco"
            placeholder="Preço"
            value={formData.preco}
            onChange={handleChange}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarPacientes;

