import React from 'react';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <input type="email" placeholder="Email" className="login-input" />
      <input type="password" placeholder="Senha" className="login-input" />
    </div>
  );
};

export default LoginPage;
