import React from 'react';
import './Header.scss';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <img
                src="https://imgur.com/dfVoMqF.png"
                alt="Logo"
                className="logo-img"
            />
            <nav className="nav">
                <a href="#">Sobre</a>
                <a href="#">Consulta</a>
                <a href="#">Dúvidas Frequentes</a>
                <a href="#">Contato</a>
            </nav>
            <div className="right-section">
                <button className="login-button" onClick={() => navigate('/login')}>
                    Login
                </button>
                <div className="icons">
                    <FaInstagram />
                    <FaWhatsapp />
                    <HiOutlineMail />
                </div>
            </div>
        </header>
    );
};

export default Header;
