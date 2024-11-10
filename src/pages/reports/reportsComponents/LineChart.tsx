import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import 'chart.js/auto';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { LineChartProps } from '../../../models/dtos/reports/LineChartProps';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChart: React.FC<LineChartProps> = ({ revenueData, profitData, labels, isDarkMode }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueData,
        borderColor: isDarkMode ? '#2876d2' : '#4A90E2', // Color de la línea de Revenue
        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(74, 144, 226, 0.2)',
        tension: 0.4, // Suavizado de la línea
      },
      {
        label: 'Profit',
        data: profitData,
        borderColor: isDarkMode ? '#fa5211' : '#F3B97D', // Color de la línea de Profit
        backgroundColor: isDarkMode ? 'rgba(204, 204, 204, 0.2)' : 'rgba(243, 185, 125, 0.2)',
        tension: 0.4, // Suavizado de la línea
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom' as const, // Posición de la leyenda
        labels: {
          color: isDarkMode ? '#FFFFFF' : '#333333', // Color de la leyenda
          usePointStyle: true, // Usa puntos en lugar de cuadros
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}`;
          },
        },
        backgroundColor: isDarkMode ? '#333333' : '#FFFFFF', // Color del fondo del tooltip
        titleColor: isDarkMode ? '#FFFFFF' : '#333333', // Color del texto del tooltip
        bodyColor: isDarkMode ? '#FFFFFF' : '#333333',
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? '#FFFFFF' : '#333333', // Color de las etiquetas en el eje X
        },
        grid: {
          color: isDarkMode ? '#555555' : '#e0e0e0', // Color de las líneas de la cuadrícula en el eje X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode ? '#FFFFFF' : '#333333', // Color de las etiquetas en el eje Y
          callback: (value: number | string) => `₹${value}`, // Formato en el eje Y
        },
        grid: {
          color: isDarkMode ? '#555555' : '#e0e0e0', // Color de las líneas de la cuadrícula en el eje Y
        },
      },
    },
  };

  return (
    <div className="  lg:p-10 mx-auto  ">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
