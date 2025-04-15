import React, { useState } from 'react';
import './Contato.scss'; 

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    mensagem: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section className="contato-section">
      <div className="text-content">
        <h1>Para marcar um horário ou tirar uma dúvida, preencha o formulário ao lado</h1>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <textarea name="mensagem" placeholder="Digite sua mensagem aqui" value={formData.mensagem} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContatoSection;
