import React from 'react';
import './Pacientes.scss';

const CadastrarPacientes = () => {
  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button onClick={() => window.location.href = '/consultar'}>Consultar Paciente</button>
        <button className="active">Cadastrar Paciente</button>
        <button>Financeiro</button>
      </aside>

      <div className="main-content">
        <form className="form">
          <h2>Cadastrar Paciente</h2>
          <input type="text" placeholder="Nome" />
          <input type="date" />
          <input type="text" placeholder="Serviço" />
          <input type="time" />
          <input type="number" placeholder="Preço" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarPacientes;
