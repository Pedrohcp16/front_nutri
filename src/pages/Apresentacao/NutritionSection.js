import React from 'react';
import './NutritionSection.scss';

const NutritionSection = () => {
return (
    <section className="nutrition-section">
        <div className="text-content">
            <h1>Nutrição como nunca antes !</h1>
            <p>
                Nada de fórmulas prontas. <br />
                Preparamos seu plano com seus <br />
                objetivos, gostos e, claro, muito <br />
                carinho!
            </p>
            <button>Agende sua consulta</button>
        </div>
    </section>
);
};

export default NutritionSection;