import React from 'react';
import './Pacientes.scss';
import { FaEdit, FaTrash } from "react-icons/fa";

const ConsultarPacientes = () => {
  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button className="active">Consultar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar'}>Cadastrar Paciente</button>
        <button>Financeiro</button>
      </aside>

      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Consultar nome" />
          <button>Consultar ID</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data</th>
              <th>Serviço</th>
              <th>Horário</th>
              <th>Preço</th>
              <th>Alt</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {Array(5).fill().map((_, index) => (
              <tr key={index}>
                <td>00{index}</td>
                <td>Paciente {index + 1}</td>
                <td>01/01/2025</td>
                <td>Consulta</td>
                <td>10h</td>
                <td>R$100</td>
                <td><FaEdit /></td>
                <td><FaTrash /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultarPacientes;
