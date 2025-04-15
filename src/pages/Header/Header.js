import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">GA</div>
        <nav className="navigation">
          <a href="#sobre">Sobre</a>
          <a href="#consulta">Consulta</a>
          <a href="#duvidas-frequentes">Dúvidas Frequentes</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="right-section">
          <div className="social-media">
            <a href="https://js.pngtree.com/a5/static/qc26tp.DsQm_9BT.jpg" target="_blank" rel="noopener noreferrer">
              <img src='./assets/images/instagram_logo.png' alt="Instagram" />
            </a>
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;