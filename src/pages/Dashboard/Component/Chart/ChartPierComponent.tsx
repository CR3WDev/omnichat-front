import { selectorTheme } from '@redux/Reducers/themeReducer'
import { useEffect, useRef } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

interface PieChartProps {
  data: {
    labels: string[]
    series: number[]
  }
  options?: {
    labels?: string[]
    colors?: string[]
    legendTextColor?: string
  }
}

export const ChartPierComponent = ({ data, options }: PieChartProps) => {
  const theme = useSelector(selectorTheme)
  const chartRef = useRef<any>(null)

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
          mode: theme,
        },
      })
    }
  }, [options])

  const defaultOptions = {
    labels: data.labels,
  }

  const chartOptions = options ? { ...defaultOptions, ...options } : defaultOptions

  return (
    <Chart options={chartOptions} series={data.series} type="pie" height={400} ref={chartRef} />
  )
}
