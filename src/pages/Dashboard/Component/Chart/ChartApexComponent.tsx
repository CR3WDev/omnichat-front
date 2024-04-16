import ReactApexChart from 'react-apexcharts';


export const ChartApexComponent = () => {
  const seriesData = [{ data: [21, 22, 10] }];

  const chartOptions = {
    chart: {
      height: 350,
      type: 'bar' as 'bar',
    },
    colors: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['Telegram'],
        ['Whatszap'],
        ['Instagram'],
      ],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      x: {
        show: true,
        format: 'dd/MM/yy HH:mm',
        formatter: function(value: any) {
          return value.join(', ');
        }
      },
    },
    // Defina o tema aqui
    theme: {
      mode: 'dark' as 'dark',
    },
  };

  return (
      <ReactApexChart options={chartOptions} series={seriesData} type="bar" height={200} />
  );
}
