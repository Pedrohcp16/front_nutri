import React from 'react';
import './Footer.scss';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src="https://imgur.com/dfVoMqF.png"
          alt="Logo GA"
          className="logo-img"
        />
        <p className="footer-subtitle">
          GABRIELA ANDREAZZI<br />NUTRICIONISTA
        </p>
      </div>

      <div className="footer-contact">
        <h3>Entre em contato</h3>
        <p><strong>WhatsApp:</strong> (11) 96559-2906</p>
        <p><strong>Email:</strong> gabrielaandreazzi_@hotmail.com</p>
      </div>

      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/5511965592906" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:gabrielaandreazzi_@hotmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;



