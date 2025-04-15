import React from 'react';
import './NutritionSection.scss';

const NutritionSection = () => {
  return (
    <section className="nutrition-section">
      <div className="overlay"></div>
      <div className="content-container">
        <div className="text-content">
          <h1>Nutrição como nunca antes!</h1>
          <p>
            Nada de fórmulas prontas. Preparamos seu plano com seus objetivos, gostos e, claro, muito carinho!
          </p>
          <button className="schedule-button">Agende sua consulta</button>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;