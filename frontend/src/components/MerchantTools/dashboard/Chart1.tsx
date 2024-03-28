"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

export const options = {
  responsive: true,

  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      border: {
        display: false,
        dash: [10, 8],
      },
    },
  },

  barPercentage: 0.1,
};

const price = [
  { number: "0" },
  { number: "100000" },
  { number: "200000" },
  { number: "300000" },
  { number: "400000" },
];
const labels = ["01/06", "01/07", "01/08", "01/09", "01/10", "01/11", "01/12"];

export const data = {
  labels,
  datasets: [
    {
      data: price.map((item) => item.number),
      backgroundColor: "rgba(0,0,0,1)",
      barRoundness: 100,
      borderRadius: 100,
      borderWidth: 1,
      borderSkipped: false,
    },
  ],
};

export function ChartFirst() {
  return <Bar options={options} data={data} />;
}
