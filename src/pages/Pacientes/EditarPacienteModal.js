import React, { useState } from 'react';
import './Pacientes.scss';

const EditarPacienteModal = ({ paciente, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nome: paciente.nome,
    servico: paciente.servico,
    preco: paciente.preco,
    horario: paciente.horario,
    data: paciente.data,
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/pacientes/${paciente.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onSave(); // atualiza a lista no componente pai
        onClose();
      } else {
        alert('Erro ao atualizar paciente');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Editar Paciente</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
          <input type="date" name="data" value={formData.data} onChange={handleChange} />
          <input type="text" name="servico" value={formData.servico} onChange={handleChange} placeholder="Serviço" />
          <input type="time" name="horario" value={formData.horario} onChange={handleChange} />
          <input type="number" name="preco" value={formData.preco} onChange={handleChange} placeholder="Preço" />
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default EditarPacienteModal;
