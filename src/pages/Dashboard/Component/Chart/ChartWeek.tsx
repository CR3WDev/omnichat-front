import { selectorTheme } from '@redux/Reducers/themeReducer'
import ReactApexChart, { Props } from 'react-apexcharts'
import { useSelector } from 'react-redux'

export const ChartWeek = () => {
  const theme = useSelector(selectorTheme)
  const seriesData = [
    {
      name: 'Agendamentos',
      data: [45, 52, 38, 24, 33, 26, 21], // Dados de vendas ao longo dos dias da semana
    },
  ]

  const chartOptions: Props = {
    chart: {
      height: 350,
      type: 'line', // Tipo do gráfico como 'line'
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
    ], // Alterado para azul escuro
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth', // Linhas suavizadas
    },

    legend: {
      show: true,
      labels: {
        colors: ['#8b5cf6'], // Cor da fonte da legenda, se necessário
        useSeriesColors: false, // Não usar cores das séries para a legenda
      },
      fontSize: '16px', // Tamanho da fonte da legenda
      fontFamily: 'Arial, sans-serif', // Família da fonte da legenda
    },
    xaxis: {
      categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
      labels: {
        style: {
          fontSize: '16px', // Tamanho da fonte das legendas no eixo X
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '16px', // Tamanho da fonte das legendas no eixo Y
          fontFamily: 'Arial, sans-serif', // Família da fonte das legendas no eixo Y
        },
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '16px',
      },
      x: {
        show: true,
      },
    },
    theme: {
      mode: theme, // Tema selecionado
    },
  }

  return <ReactApexChart options={chartOptions} series={seriesData} type="bar" height={350} />
}
