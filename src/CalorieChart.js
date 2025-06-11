import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CalorieChart = ({ meals }) => {
  const data = {
    labels: meals.map((_, i) => `Meal ${i + 1}`),
    datasets: [
      {
        label: 'Calories',
        data: meals,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderRadius: 6
      }
    ]
  };

  return <Bar data={data} />;
};

export default CalorieChart;
