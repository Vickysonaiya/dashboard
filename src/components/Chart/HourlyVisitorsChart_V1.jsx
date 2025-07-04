// -- Animation Bar Chart --

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const HourlyVisitorsChart = () => {
//   const data = [
//     { hour: "9 AM", count: 8 },
//     { hour: "10 AM", count: 12 },
//     { hour: "11 AM", count: 15 },
//     { hour: "12 PM", count: 18 },
//     { hour: "1 PM", count: 11 },
//     { hour: "2 PM", count: 9 },
//     { hour: "3 PM", count: 6 },
//     { hour: "4 PM", count: 14 },
//     { hour: "5 PM", count: 10 },
//     { hour: "6 PM", count: 7 },
//   ];

//   const labels = data.map((item) => item.hour);
//   const counts = data.map((item) => item.count);

//   const today = new Date();
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const currentDate = String(today.getDate()).padStart(2, "0");
//   const currentMonth = monthNames[today.getMonth()];
//   const currentYear = String(today.getFullYear()).slice(-2);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: "Visitors",
//         data: counts,
//         backgroundColor: (context) => {
//           const chart = context.chart;
//           const { ctx, chartArea } = chart;
//           if (!chartArea) return null;

//           const gradient = ctx.createLinearGradient(
//             0,
//             chartArea.bottom,
//             0,
//             chartArea.top
//           );
//           gradient.addColorStop(0, "#d0eaff"); // Very light blue at bottom
//           gradient.addColorStop(0.5, "#5dade2"); // Light sky blue mid
//           gradient.addColorStop(1, "#21618c"); // Deep navy blue at top

//           return gradient;
//         },
//         borderRadius: 14,
//         barThickness: 32,
//         borderSkipped: false,
//         borderColor: "rgba(0, 0, 0, 0.05)", // subtle shadow border
//         borderWidth: 1.5,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     animation: {
//       duration: 800,
//       // duration: 1200,
//       easing: "easeOutQuart",
//       animateScale: false,
//       animateRotate: false,
//       delay: (ctx) => ctx.dataIndex * 80,
//       onProgress: function (animation) {
//         const chart = animation.chart;
//         const ctx = chart.ctx;
//         const chartArea = chart.chartArea;
//         ctx.save();
//       },
//       onComplete: function (animation) {
//         const chart = animation.chart;
//         const ctx = chart.ctx;
//         ctx.restore();
//       },
//     },

//     plugins: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: `Hourly Visitors ${currentDate}-${currentMonth}-${currentYear}`,
//         font: {
//           size: 20,
//           family: "Segoe UI, sans-serif",
//           weight: "600",
//         },
//         color: "#2c3e50",
//         padding: { bottom: 15 },
//       },
//       tooltip: {
//         backgroundColor: "#111",
//         titleFont: {
//           size: 15,
//           weight: "bold",
//         },
//         bodyFont: {
//           size: 13,
//         },
//         borderColor: "#333",
//         borderWidth: 1,
//         padding: 10,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 20,
//         ticks: {
//           stepSize: 2,
//           font: { size: 13, family: "'Segoe UI'" },
//           color: "#555",
//         },
//         grid: {
//           color: "rgba(0,0,0,0.04)",
//         },
//         title: {
//           display: true,
//           text: "Visitor Count",
//           font: { size: 14, weight: "600" },
//           color: "#444",
//         },
//       },
//       x: {
//         ticks: {
//           font: { size: 13, family: "'Segoe UI'" },
//           color: "#555",
//         },
//         grid: { display: false },
//         title: {
//           display: true,
//           text: "Hour",
//           font: { size: 14, weight: "600" },
//           color: "#444",
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ height: "100%", width: "100%" }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default HourlyVisitorsChart;

// -- Animation Bar Chart --

// Current Bar Chart On Display

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const HourlyVisitorsChart = () => {
  const data = [
    { hour: "9 AM", count: 8 },
    { hour: "10 AM", count: 12 },
    { hour: "11 AM", count: 15 },
    { hour: "12 PM", count: 18 },
    { hour: "1 PM", count: 11 },
    { hour: "2 PM", count: 9 },
    { hour: "3 PM", count: 6 },
    { hour: "4 PM", count: 14 },
    { hour: "5 PM", count: 10 },
    { hour: "6 PM", count: 7 },
  ];

  const labels = data.map((item) => item.hour);
  const counts = data.map((item) => item.count);

  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = String(today.getDate()).padStart(2, "0");
  const currentMonth = monthNames[today.getMonth()];
  const currentYear = String(today.getFullYear()).slice(-2);

  const chartData = {
    labels,
    datasets: [
      {
        label: "👥 Visitors",
        data: counts,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "#e3f2fd");
          gradient.addColorStop(0.5, "#42a5f5");
          gradient.addColorStop(1, "#1e88e5");
          return gradient;
        },
        borderRadius: {
          topLeft: 16,
          topRight: 16,
        },
        barThickness: 30,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeOutBack",
      delay: (ctx) => ctx.dataIndex * 100,
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Hourly Visitors  ${currentDate}-${currentMonth}-${currentYear}`,
        font: {
          size: 22,
          family: "Segoe UI, sans-serif",
          weight: "600",
        },
        color: "#0d47a1",
        padding: { bottom: 20 },
      },
      tooltip: {
        backgroundColor: "#1e1e2f",
        borderColor: "#42a5f5",
        borderWidth: 1,
        titleFont: {
          size: 15,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        callbacks: {
          label: (context) => ` 👤 ${context.raw} Visitors`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 2,
          font: { size: 13 },
          color: "#444",
        },
        grid: {
          color: "rgba(66, 165, 245, 0.1)",
        },
        title: {
          display: true,
          text: "Visitors Count",
          font: { size: 14, weight: "bold" },
          color: "#1565c0",
        },
      },
      x: {
        ticks: {
          font: { size: 13 },
          color: "#333",
        },
        grid: { display: false },
        title: {
          display: true,
          text: "Hour of Day",
          font: { size: 14, weight: "bold" },
          color: "#1565c0",
        },
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%", padding: "10px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default HourlyVisitorsChart;
