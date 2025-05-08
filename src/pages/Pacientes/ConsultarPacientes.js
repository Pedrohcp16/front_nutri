import React, { useEffect, useState } from 'react';
import './Pacientes.scss';
import { FaEdit, FaTrash } from "react-icons/fa";



const ConsultarPacientes = () => {
  const [busca, setBusca] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const [editando, setEditando] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    servico: '',
    horario: '',
    preco: ''
  });

  useEffect(() => {
    buscarPacientes();
  }, []);

  const buscarPacientes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pacientes');
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  const deletarPaciente = async (id) => {
    if (!window.confirm('Deseja realmente excluir este paciente?')) return;
    try {
      await fetch(`http://localhost:5000/api/pacientes/${id}`, {
        method: 'DELETE'
      });
      buscarPacientes(); // Atualiza a lista
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
    }
  };

  const iniciarEdicao = (paciente) => {
    setEditando(paciente.id);
    setFormData({ ...paciente });
  };

  const cancelarEdicao = () => {
    setEditando(null);
    setFormData({
      nome: '',
      dataNascimento: '',
      servico: '',
      horario: '',
      preco: ''
    });
  };

  const salvarEdicao = async () => {
    try {
      await fetch(`http://localhost:5000/api/pacientes/${editando}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setEditando(null);
      buscarPacientes();
    } catch (error) {
      console.error('Erro ao editar paciente:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button className="active">Consultar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar'}>Cadastrar Paciente</button>
        <button>Financeiro</button>
      </aside>

      <div className="main-content">
      <div className="search-bar">
  <input
    type="text"
    placeholder="Consultar nome"
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
  />
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
          {pacientes
  .filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))
  .map((paciente) => (
                <tr key={paciente.id}>
                  <td>{paciente.id}</td>
                  <td>
                    {editando === paciente.id ? (
                      <input name="nome" value={formData.nome} onChange={handleChange} />
                    ) : (
                      paciente.nome
                    )}
                  </td>
                  <td>
                    {editando === paciente.id ? (
                      <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
                    ) : (
                      paciente.dataNascimento
                    )}
                  </td>
                  <td>
                    {editando === paciente.id ? (
                      <input name="servico" value={formData.servico} onChange={handleChange} />
                    ) : (
                      paciente.servico
                    )}
                  </td>
                  <td>
                    {editando === paciente.id ? (
                      <input type="time" name="horario" value={formData.horario} onChange={handleChange} />
                    ) : (
                      paciente.horario
                    )}
                  </td>
                  <td>
                    {editando === paciente.id ? (
                      <input type="number" name="preco" value={formData.preco} onChange={handleChange} />
                    ) : (
                      `R$${paciente.preco}`
                    )}
                  </td>
                  <td>
                    {editando === paciente.id ? (
                      <>
                        <button onClick={salvarEdicao}>Salvar</button>
                        <button onClick={cancelarEdicao}>Cancelar</button>
                      </>
                    ) : (
                      <FaEdit onClick={() => iniciarEdicao(paciente)} style={{ cursor: 'pointer' }} />
                    )}
                  </td>
                  <td>
                    <FaTrash
                      onClick={() => deletarPaciente(paciente.id)}
                      style={{ cursor: 'pointer', color: 'red' }}
                    />
                  </td>
                </tr>
              ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultarPacientes;


