import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './pages/Header/Header';
import NutritionSection from './pages/Apresentacao/NutritionSection';
import AboutSection from './pages/Sobre/AboutSection';
import ConsultaSection from './pages/Consulta/Consulta';
import DepoimentosSection from './pages/Depoimentos/Depoimentos';
import ContatoSection from './pages/Contato/Contato';
import Footer from './pages/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <NutritionSection/>
    <AboutSection/>
    <ConsultaSection/>
    <DepoimentosSection/>
    <ContatoSection/>
    <Footer/>     
  </React.StrictMode>
);


