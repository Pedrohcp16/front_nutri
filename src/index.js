import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './pages/Header/Header';
import NutritionSection from './pages/Apresentacao/NutritionSection';
import AboutSection from './pages/Sobre/AboutSection';
import ConsultaSection from './pages/Consulta/Consulta';
import DepoimentosSection from './pages/Depoimentos/Depoimentos';
import ContatoSection from './pages/Contato/Contato';
import Footer from './pages/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import CadastrarPacientes from './pages/Pacientes/CadastrarPacientes';
import ConsultarPacientes from './pages/Pacientes/ConsultarPacientes';
import Financeiro from './pages/Pacientes/Financeiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <NutritionSection />
            <AboutSection />
            <ConsultaSection />
            <DepoimentosSection />
            <ContatoSection />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/consultar" element={<ConsultarPacientes />} />
<Route path="/cadastrar" element={<CadastrarPacientes />} />
<Route path="/financeiro" element={<Financeiro />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



