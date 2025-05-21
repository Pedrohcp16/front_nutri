import React, { useEffect, useState } from 'react';
import './Pacientes.scss';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import EditarPacienteModal from './EditarPacienteModal.js';
import Modal from 'react-modal';
Modal.setAppElement('#root'); 



const ConsultarPacientes = () => {
  const [pacientes, setPacientes] = React.useState([]);
  const [filtro, setFiltro] = useState('');
  const [pacienteEditando, setPacienteEditando] = useState(null);
  const [modalAberto, setModalAberto] = React.useState(false);
  const [pacienteParaDeletar, setPacienteParaDeletar] = React.useState(null);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pacientes')
      .then(res => setPacientes(res.data))
      .catch(err => console.error('Erro ao carregar pacientes:', err));
  }, []);

  const buscarPacientes = async () => {
    try {
      const resposta = await fetch('http://localhost:5000/api/pacientes');
      const dados = await resposta.json();
      setPacientes(dados);
    } catch (erro) {
      console.error('Erro ao buscar pacientes:', erro);
    }
  };
  React.useEffect(() => {
    buscarPacientes();
  }, []);
    

  

  const pacientesFiltrados = pacientes.filter(p =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const fetchPacientes = async () => {
    const res = await fetch('http://localhost:5000/api/pacientes');
    const data = await res.json();
    setPacientes(data);
  };
  
  useEffect(() => {
    fetchPacientes();
  }, []);

  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR');
  };

  
  
  const abrirModal = (paciente) => {
    setPacienteParaDeletar(paciente);
    setModalAberto(true);
    setPacienteSelecionado(paciente);
    setMostrarModal(true);
  };
  
  const fecharModal = () => {
    setModalAberto(false);
    setPacienteParaDeletar(null);
    setPacienteSelecionado(null);
    setMostrarModal(false);
  };
  
  const deletarPaciente = async () => {
    try {
      await fetch(`http://localhost:5000/api/pacientes/${pacienteSelecionado.id}`, {
        method: 'DELETE',
      });
      fecharModal();
      buscarPacientes();
    } catch (erro) {
      console.error('Erro ao deletar paciente:', erro);
    }
  };
  

  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button className="active">Consultar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar'}>Cadastrar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar-servico'}>Cadastrar Serviço</button>
        <button onClick={() => window.location.href = '/financeiro'}>Financeiro</button>
        <button onClick={() => window.location.href = '/'}>Home</button>
      </aside>

      <div className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Consultar nome"
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          />
        </div>

        <table>
        {pacienteEditando && (
  <EditarPacienteModal
    paciente={pacienteEditando}
    onClose={() => setPacienteEditando(null)}
    onSave={fetchPacientes}
  />
)}

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
          {pacientesFiltrados.map((p) => (
  <tr key={p.id}>
    <td>{p.id}</td>
    <td>{p.nome}</td>
    <td>{formatarData(p.data)}</td>
    <td>{p.servico}</td>
    <td>{p.horario}</td>
    <td>R${p.preco}</td>
    <td><FaEdit onClick={() => setPacienteEditando(p)} style={{ cursor: 'pointer' }} /></td>
    <td><FaTrash onClick={() => abrirModal(p)} /></td>
  </tr>
))}

          </tbody>
        </table>
        {mostrarModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Confirmar exclusão</h3>
              <p>Tem certeza que deseja deletar <strong>{pacienteSelecionado.nome}</strong>?</p>
              <div className="modal-actions">
                <button onClick={deletarPaciente} style={{ background: 'red', color: '#fff' }}>Deletar</button>
                <button onClick={fecharModal}>Cancelar</button>
                </div>
      </div>
    </div>
  )};
  </div>
  </div>
  );
}

export default ConsultarPacientes;



