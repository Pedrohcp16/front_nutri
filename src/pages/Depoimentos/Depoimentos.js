import React from 'react';
import './Depoimentos.scss';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const DepoimentosSection = () => {
    return (
        <section className="depoimentos-section">
            <div className="depoimentos-header">
                <FaChevronLeft className="depoimento-icon" />
                <h2>Depoimentos</h2>
                <FaChevronRight className="depoimento-icon" />
            </div>
            <p className="depoimentos-text">
                Recentemente, tive a oportunidade de consultar uma nutricionista e foi
                uma experiência extremamente positiva. Desde o início, fui recebido com
                muita simpatia e profissionalismo. A nutricionista fez uma avaliação
                detalhada do meu histórico de saúde, hábitos alimentares e estilo de
                vida.
                <br />
                Durante a consulta, ela explicou de forma clara e acessível a
                importância de uma alimentação equilibrada e personalizada. Juntos,
                estabelecemos metas realistas e um plano alimentar adaptado às minhas
                necessidades e preferências. Além disso, ela forneceu dicas práticas
                para melhorar minha alimentação no dia a dia, sem deixar de lado os
                alimentos que gosto.
            </p>
        </section>
    );
};

export default DepoimentosSection;
