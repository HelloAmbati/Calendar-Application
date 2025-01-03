import React from 'react';
import { Bar } from 'react-chartjs-2';

const ReportDashboard = () => {
  const data = {
    labels: ['Email', 'Phone', 'LinkedIn'],
    datasets: [
      {
        label: 'Frequency of Communication Methods',
        data: [30, 20, 50],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFEB3B'],
      },
    ],
  };

  return (
    <div>
      <h3>Report Dashboard</h3>
      <Bar data={data} />
    </div>
  );
};

export default ReportDashboard;

