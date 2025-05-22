import React, { useEffect, useState } from 'react';
import './Pacientes.scss';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';
import EditarPacienteModal from './EditarPacienteModal.js';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConsultarPacientes = () => {
  const [pacientesComServicos, setPacientesComServicos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [pacienteEditando, setPacienteEditando] = useState(null);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [expandido, setExpandido] = useState({});

  // Agrupar os serviços por paciente
  const agruparPorPaciente = (dados) => {
  const mapa = new Map();

  dados.forEach(item => {
    const id = item.paciente_id; // 👈 Aqui está a mudança principal

    if (!mapa.has(id)) {
      mapa.set(id, {
        id: id,
        nome: item.nome,
        data: item.data,
        servicos: []
      });
    }

    if (item.servico) {
      mapa.get(id).servicos.push({
        servico: item.servico,
        horario: item.horario,
        preco: item.preco
      });
    }
  });

  return Array.from(mapa.values());
};


  

  // Buscar pacientes ao carregar
  useEffect(() => {
    const atualizarPacientes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/pacientes');
        const agrupados = agruparPorPaciente(res.data);
        setPacientesComServicos(agrupados);
      } catch (err) {
        console.error('Erro ao buscar pacientes:', err);
      }
    };

    atualizarPacientes();
  }, []);

  const atualizarPacientes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/pacientes');
      const agrupados = agruparPorPaciente(res.data);
      setPacientesComServicos(agrupados);
    } catch (err) {
      console.error('Erro ao buscar pacientes:', err);
    }
  };

  const deletarPaciente = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/pacientes/${pacienteSelecionado.id}`);
      fecharModal();
      await atualizarPacientes();
    } catch (erro) {
      console.error('Erro ao deletar paciente:', erro);
    }
  };

  const abrirModal = (paciente) => {
    setPacienteSelecionado(paciente);
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setPacienteSelecionado(null);
  };

  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR');
  };

  const pacientesFiltrados = pacientesComServicos.filter(p =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

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
              onSave={atualizarPacientes}
            />
          )}

          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data</th>
              <th colSpan={3}>Serviços</th>
              <th>Alt</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {pacientesFiltrados.map(p => (
              <React.Fragment key={`paciente-${p.id}`}>
                <tr>
                  <td>{p.id}</td>
                  <td>{p.nome}</td>
                  <td>{formatarData(p.data)}</td>
                  <td colSpan={3}>
                    {p.servicos.length > 0 ? (
                      <button onClick={() =>
                        setExpandido(prev => ({ ...prev, [p.id]: !prev[p.id] }))
                      }>
                        {expandido[p.id] ? 'Ocultar serviços' : 'Ver serviços'}
                      </button>
                    ) : (
                      'Sem serviços'
                    )}
                  </td>
                  <td>
                    <FaEdit onClick={() => setPacienteEditando(p)} style={{ cursor: 'pointer' }} />
                  </td>
                  <td>
                    <FaTrash onClick={() => abrirModal(p)} style={{ cursor: 'pointer' }} />
                  </td>
                </tr>

                {expandido[p.id] && p.servicos.map((s, i) => (
                  <tr key={`servico-${p.id}-${i}`} className="sub-servico">
                    <td colSpan={3}></td>
                    <td>{s.servico}</td>
                    <td>{s.horario}</td>
                    <td>R${s.preco}</td>
                    <td colSpan={2}></td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {mostrarModal && pacienteSelecionado && (
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
        )}
      </div>
    </div>
  );
};

export default ConsultarPacientes;
