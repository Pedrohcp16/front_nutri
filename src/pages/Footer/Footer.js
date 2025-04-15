import React from 'react';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">GA</div>
      <div className="info">
        <h2>Gabriela Andreazzi</h2>
        <p>Nutricionista</p>
      </div>
      <div className="contact">
        <h3>Entre em contato</h3>
        <p>WhatsApp: (11) 96559-2906</p>
        <p>Email: gabrielaandreazzi_@hotmail.com</p>
      </div>
      <div className="social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src='./assets/images/instagram_logo.png' alt="Instagram" />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
