import React, { useState, useEffect } from 'react';
import './Pacientes.scss';
import axios from 'axios';

const CadastrarServico = () => {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({
    paciente_id: '',
    servico: '',
    data: '',
    horario: '',
    preco: ''
  });

  useEffect(() => {
    const buscarClientes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/pacientes');
        setClientes(res.data);
      } catch (err) {
        alert('Erro ao carregar clientes');
      }
    };

    buscarClientes();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(form); // Veja o que está indo
  try {
    await axios.post('http://localhost:5000/api/servicos', form);
    alert('Serviço cadastrado com sucesso!');
    window.location.href = '/consultar';
  } catch (err) {
    console.error('Erro ao cadastrar serviço:', err.response?.data || err.message);
    alert('Erro ao cadastrar serviço');
  }
};


  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button onClick={() => window.location.href = '/consultar'}>Consultar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar'}>Cadastrar Cliente</button>
        <button className="active" onClick={() => window.location.href = '/cadastrar-servico'}>Cadastrar Serviço</button>
        <button onClick={() => window.location.href = '/financeiro'}>Financeiro</button>
        <button onClick={() => window.location.href = '/'}>Home</button>
      </aside>

      <div className="main-content">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Cadastrar Serviço</h2>

          <select name="paciente_id" value={form.paciente_id} onChange={handleChange} required>
            <option value="">Selecione o Cliente</option>
            {clientes.map((c) => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>

          <input name="servico" type="text" placeholder="Serviço" onChange={handleChange} required />
          <input name="data" type="date" onChange={handleChange} required />
          <input name="horario" type="time" onChange={handleChange} required />
          <input name="preco" type="number" placeholder="Preço" onChange={handleChange} required />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarServico;

