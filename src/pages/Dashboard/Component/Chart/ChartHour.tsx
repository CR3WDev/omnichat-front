import { selectorTheme } from '@redux/Reducers/themeReducer'
import ReactApexChart, { Props } from 'react-apexcharts'
import { useSelector } from 'react-redux'

export const ChartHour = () => {
  const theme = useSelector(selectorTheme)

  const seriesData = [
    {
      name: 'Agendamentos',
      data: [10, 30, 45, 52, 38, 60, 75, 55, 38, 20, 15, 5], // Exemplo de vendas por hora
    },
  ]

  const chartOptions: Props = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        distributed: true, // Habilita cores distintas para cada barra
      },
    },
    colors: [
      // Definindo cores específicas para cada barra
      '#FF4560',
      '#008FFB',
      '#00E396',
      '#FEB019',
      '#775DD0',
      '#FF4560',
      '#008FFB',
      '#00E396',
      '#FEB019',
      '#775DD0',
      '#3F51B5',
      '#03A9F4',
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      show: true,
      labels: {
        colors: ['#8b5cf6'], // Ajuste conforme necessário
        useSeriesColors: false,
      },
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif',
    },
    xaxis: {
      categories: [
        '11h',
        '12h',
        '13h',
        '14h',
        '15h',
        '18h',
        '19h',
        '20h',
        '21h',
        '22h',
        '23h',
        '00h',
      ],
      labels: {
        style: {
          fontSize: '16px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
        },
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '16px',
      },
    },
    theme: {
      mode: theme,
    },
  }

  return <ReactApexChart options={chartOptions} series={seriesData} type="bar" height={350} />
}
