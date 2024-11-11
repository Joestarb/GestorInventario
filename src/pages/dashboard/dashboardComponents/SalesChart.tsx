import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import useTheme from '../../../hooks/useTheme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart: React.FC = () => {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12300, 15000, 13400, 20000, 17600, 19000, 21385],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Ventas Semanales',
      },
    },
  };

  return <Line data={data} options={options} />;
};

const Chart: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2 ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex-shrink-0">
          <span className="text-2xl sm:text-3xl leading-none font-bold">$45,385</span>
          <h3 className="text-base font-normal">Sales this week</h3>
        </div>
        <div className="flex items-center justify-end flex-1 text-green-500 text-base font-extrabold">
          12.5%
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div id="main-chart">
        <SalesChart />
      </div>
    </div>
  );
};

export default Chart;
