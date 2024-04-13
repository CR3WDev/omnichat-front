import React, { useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';

interface PieChartProps {
  data: {
    labels: string[];
    series: number[];
  };
  options?: {
    labels?: string[];
    colors?: string[];
    legendTextColor?: string;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current && options) {
      chartRef.current.chart.updateOptions({
        labels: options.labels,
        colors: options.colors,
        legend: {
          labels: {
            colors: options.legendTextColor,
          },
        },
        theme: {
          mode: 'dark' as 'dark',
        },

      });
    }
  }, [options]);

  const defaultOptions = {
    labels: data.labels,
  };

  const chartOptions = options ? { ...defaultOptions, ...options } : defaultOptions;

  return (
    <div>
      <Chart options={chartOptions} series={data.series} type="pie" height={200} ref={chartRef} />
    </div>
  );
};

export default PieChart;
