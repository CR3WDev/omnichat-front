import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'

import { useFormatCurrency } from '@hooks/useFormatCurrency'
import { selectorTheme } from '@redux/Reducers/themeReducer'
import { darkColors, dashboardInformations, dataPie, legendTextColor } from '@utils/mock/dashboard'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ChartApexComponent } from './Component/Chart/ChartApexComponent'
import { ChartPierComponent } from './Component/Chart/ChartPierComponent'

export const DashboardPage = () => {
  const theme = useSelector(selectorTheme)
  const dashboardI18n = getI18n('dashboard')

  const options = {
    labels: dataPie.labels,
    colors: darkColors,
    legendTextColor: legendTextColor,
  }

  return (
    <div className="page-container">
      <h2 className="page-title">{dashboardI18n.title}</h2>
      <Card
        className={`${theme === 'light' && 'border-1  border-round-lg'} mt-3 mx-3`}
        style={{ borderColor: 'var(--surface-400)' }}
      >
        <div className="flex justify-content-between align-items-center">
          <div>
            <div>
              <h2 className="m-0 p-0">Turtle Pizza</h2>
              <span className="font-bold">Balanço semanal:</span>
              <span className="font-bold" style={{ color: '#008000' }}>
                + {useFormatCurrency(140)}
              </span>
            </div>
            <div>
              <span className="font-bold">Tempo Médio por Pedido:</span>
              <Tag className="ml-2" value="3:32 min" severity="danger" />
            </div>
          </div>
          <div>
            <Dropdown
              placeholder="semanal"
              defaultValue={'semanal'}
              options={['semanal', 'mensal']}
            ></Dropdown>
          </div>
        </div>
      </Card>
      <div className="flex lg:flex-row flex-column justify-content-center">
        {dashboardInformations.map((teste, index: number) => {
          return (
            <Card
              className={`${index === 0 && 'ml-3'} mr-3 my-4 col flex flex-column align-items-between ${theme === 'light' && 'border-1  border-round-lg'} `}
              style={{ maxWidth: '280px', borderColor: 'var(--surface-400)' }}
              key={index}
            >
              <div className="flex align-items-center justify-content-between">
                <div className="text-center">
                  <div className="text-lg">{teste.name}</div>
                  <div className="text-4xl">{teste.value}</div>
                </div>
                <div className="flex flex-grow-1 justify-content-end">
                  <div
                    style={{ borderColor: 'var(--surface-400)' }}
                    className={`p-2 surface-ground border-round-lg ${theme === 'light' && 'border-1'}`}
                  >
                    {teste.icon && teste.icon}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                {teste.porcent > 0 ? (
                  <div className="flex align-items-center">
                    <div className="mr-2">
                      <MdTrendingUp size="30" color={'#04B49C'} />
                    </div>
                    <div className="mr-3">
                      <span style={{ color: '#04B49C' }} className="text-lg">
                        +{teste.porcent}
                      </span>
                    </div>
                    <div>
                      <span>Semana Anterior</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex align-items-center justify-content-between">
                    <div className="flex align-items-center">
                      <div className="mr-2">
                        <MdTrendingDown size="30" color={'#B40404'} />
                      </div>
                      <div className="mr-3">
                        <span style={{ color: '#B40404' }} className="text-lg">
                          {teste.porcent}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span>Semana Anterior</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )
        })}
      </div>
      <div className="flex flex mx-2">
        <Card className={`${theme === 'light' && 'border-1  border-round-lg'} col-6`}>
          <ChartApexComponent />
        </Card>
        <Card className={`${theme === 'light' && 'border-1  border-round-lg'} col-6`}>
          <ChartPierComponent data={dataPie} options={options} />
        </Card>
      </div>
    </div>
  )
}
