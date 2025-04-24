import React from 'react';
import './Pacientes.scss'; // usa o mesmo estilo das outras telas com sidebar
import { Line } from 'react-chartjs-2';
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
  const data = {
    labels: ['05/06', '06/06', '07/06', '08/06', 'Total'],
    datasets: [
      {
        label: 'Receita (R$)',
        data: [360, 510, 410, 590, 2220],
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
          label: (context) => `R$${context.raw}`,
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
        <button onClick={() => window.location.href = '/'}>Home</button>
        <button className="active">Financeiro</button>
      </aside>

      <div className="main-content">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Financeiro;
