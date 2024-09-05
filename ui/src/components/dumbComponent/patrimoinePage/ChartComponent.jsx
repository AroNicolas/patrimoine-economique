import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function ChartComponent({ data, x }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const jours = [];
  for (let i = 0; i < data.length; i++) {
    jours.push(i * x);
  }

  data = {
    labels: jours,
    datasets: [
      {
        label: "Afficher la valeur du patrimoine",
        data: data,
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderColor: "blue",
        borderWidth: 1,
        pointBackgroundColor: "blue",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Jour",
        },
      },
      y: {
        title: {
          display: true,
          text: "Valeur du patrimoine",
        },
      },
    },
  };
  return (
    <div style={{height: "60vh" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ChartComponent;
