"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ChartData } from "chart.js";

// Register required Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the data type explicitly for the chart
const VerticalBarChart: React.FC = () => {
  // Define chart data
  const data: ChartData<"bar"> = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [120, 200, 150, 80, 100],
        backgroundColor: "#cfceff",
        borderColor: "#cfceffc4",
        borderWidth: 1,
      },
      {
        label: "Downsales",
        data: [-30, -40, -25, -20, -35], // Negative values for downsales
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Different color for contrast
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Define chart options with proper TypeScript types
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default VerticalBarChart;
