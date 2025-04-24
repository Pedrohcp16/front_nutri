import React from 'react';
import './Consulta.scss';
import {BiBookReader} from "react-icons/bi";

const ConsultaSection = () => {
    return (
        <section className="consulta-section">
            <div className="consulta-header">
                <h2>Consulta</h2>
                <BiBookReader className="consulta-icon" />
            </div>
            <p className="consulta-text">
                As consultas são realizadas de forma totalmente online, com comodidade
                e flexibilidade para você, sem precisar sair de casa. Cada consulta tem
                duração média de 1 hora e é feita por chamada de vídeo, garantindo uma
                interação próxima e eficaz.
                <br />
                A consulta é uma oportunidade para que você tire todas as suas dúvidas,
                receba orientações práticas e se sinta amparado durante todo o processo.
                <br />
                A cada nova consulta, revisito seu progresso e, se necessário, faço
                ajustes no plano alimentar, garantindo que ele continue adequado às suas
                metas e à sua evolução.
            </p>
        </section>
    );
};

export default ConsultaSection;
