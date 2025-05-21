import React, { useEffect, useState } from 'react';
import './Pacientes.scss';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Financeiro = () => {
  const [labels, setLabels] = useState([]);
  const [valores, setValores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pagamentos/totais')
      .then((res) => {
        const dias = res.data.map(item => item.dia);
        const totais = res.data.map(item => item.total);
        setLabels([...dias, 'Total']);
        const soma = totais.reduce((acc, val) => acc + Number(val), 0);
        setValores([...totais, soma]);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados financeiros:', err);
      });
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Receita (R$)',
        data: valores,
        borderColor: '#000',
        backgroundColor: '#c08b89',
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `R$${context.raw}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `R$${value}`
        }
      }
    }
  };

  return (
    <div className="pacientes-container">
      <aside className="sidebar">
        <button onClick={() => window.location.href = '/consultar'}>Consultar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar'}>Cadastrar Paciente</button>
        <button onClick={() => window.location.href = '/cadastrar-servico'}>Cadastrar Serviço</button>
        <button onClick={() => window.location.href = '/'}>Home</button>
        <button className="active">Financeiro</button>
      </aside>

      <div className="main-content">
        <h2>Relatório Financeiro</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Financeiro;
