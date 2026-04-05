import React from 'react';
import Chart from 'react-apexcharts';

export default function GraphDemo() {
  const series = [
    { name: 'Facebook', data: [20, 70, 40, 55, 40, 75, 30] },
    { name: 'Twitter', data: [10, 30, 40, 35, 20, 40, 30] },
    { name: 'Youtube', data: [40, 25, 20, 15, 60, 10, 5] }
  ];

  const options = {
    chart: {
      type: 'area',
      width: '100%',
      toolbar: { show: false }, 
      sparkline: { enabled: true },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100]
      }
    },
    colors: ['#673ab7', '#2196f3', '#f44336'], 
    legend: {
      show: false 
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      theme: 'light',
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="custom-tooltip">' +
            '<div class="tooltip-header">' + (dataPointIndex + 1) + '</div>' +
            '<div class="tooltip-body">' +
              '<ul>' +
                '<li><span class="dot fb"></span> Facebook: <b>' + series[0][dataPointIndex] + '</b></li>' +
                '<li><span class="dot tw"></span> Twitter: <b>' + series[1][dataPointIndex] + '</b></li>' +
                '<li><span class="dot yt"></span> Youtube: <b>' + series[2][dataPointIndex] + '</b></li>' +
              '</ul>' +
            '</div>' +
          '</div>'
        );
      }
    }
  };

  return (
    <div className="chart-wrapper" style={{ width: '100%', display: 'block' }}>
      <Chart 
        options={options} 
        series={series} 
        type="area" 
        width="100%" 
        height={260} 
      />
      
      <style>{`
        .custom-tooltip {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
          background: #fff;
        }
        .tooltip-header {
          background: #f1f3f4;
          padding: 8px 12px;
          color: #5f6368;
          font-weight: 600;
          font-size: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .tooltip-body {
          padding: 12px;
        }
        .tooltip-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tooltip-body li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: #4a5568;
          margin-bottom: 8px;
          min-width: 140px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
        }
        .fb { background: #673ab7; }
        .tw { background: #2196f3; }
        .yt { background: #f44336; }

        /* Ensure the SVG itself doesn't cause overflow on mobile */
        .apexcharts-canvas {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}