import React from 'react';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="text-content">
          <h1>Olá, sou a Gabriela</h1>
          <div className="paragraphs-container">
            <p>
              Sou nutricionista desde 2020 e sou apaixonada por ajudar as pessoas a encontrarem o equilíbrio alimentar e o bem-estar. Desde sempre, tive um carinho muito especial por cuidar dos outros, e o universo saudável tem sido uma verdadeira paixão na minha vida.
            </p>
            <p>
              Fora do ambiente profissional, a atividade física é uma prioridade para mim. Nos meus momentos livres, gosto de passar tempo de qualidade com minha família e amigos, e também de me conectar comigo mesma, buscando sempre o equilíbrio mental e emocional.
            </p>
          </div>
          <button className="learn-more">Saiba mais</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;