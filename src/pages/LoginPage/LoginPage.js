import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin' && senha === 'admin') {
      navigate('/cadastrar');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="Usuário"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="login-input"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin} className="login-button">Entrar</button>
    </div>
  );
};

export default LoginPage;
