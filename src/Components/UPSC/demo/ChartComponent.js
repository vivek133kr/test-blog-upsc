import React, { useEffect, useRef, useState } from "react";
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const ChartComponent = ({ report }) => {
  const chartRef = useRef(null);
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  });

  useEffect(() => {
    let chartInstance = null;

    const createChart = () => {
      const ctx = chartRef.current.getContext("2d");

      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Correct", "Wrong", "Unattempted"],
          datasets: [
            {
              label: "Count",
              data: [report?.correct, report?.wrong, report?.unattempted],
              backgroundColor: ["#27B446", "#E00000", "#BFC4CE"],
            },
          ],
        },
        options: {
          indexAxis: "y",
          responsive: true,
          scales: {
            x: {
              display: true,
              beginAtZero: true,
            },
            y: {
              display: true,
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };

    createChart();

    return () => {
      destroyChart();
    };
  }, [report, dimensions]);

  return (
    <div className="w-full">
      <p className="text-center text-sm">Quiz Result Analysis Graph</p>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
