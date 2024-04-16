import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'

import { darkColors, dashboardInformations, dataPie, legendTextColor } from '@utils/mock/dashboard'
import { MdGroup, MdTrendingDown, MdTrendingUp } from 'react-icons/md'
import { ChartApexComponent } from './Component/Chart/ChartApexComponent'
import { ChartPierComponent } from './Component/Chart/ChartPierComponent'
import { DashboardDataViewComponent } from './Component/DashboardDataViewComponent'
import { DashboardDropdownComponent } from './Component/DashboardDropdownComponent'

export const DashboardPage = () => {
  const dashboardI18n = getI18n('dashboard')

  const options = {
    labels: dataPie.labels,
    colors: darkColors,
    legendTextColor: legendTextColor,
  }

  return (
    <div className="page-container">
      <h2 className="page-title">{dashboardI18n.title}</h2>
      <div className="flex lg:flex-row flex-column justify-content-center">
        {dashboardInformations.map((teste, index: number) => {
          return (
            <Card className="mr-3 my-4" key={index}>
              <div className="flex align-items-center justify-content-between">
                <div>
                  <div className="text-lg">{teste.name}</div>
                  <div className="text-4xl">{teste.value}</div>
                </div>
                <div className="flex flex-grow-1 justify-content-center">
                  <MdGroup size="40" />
                </div>
              </div>
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
                    Em Relação à <br /> semana passada.
                  </div>
                </div>
              ) : (
                <div className="flex align-items-center">
                  <div>
                    <MdTrendingDown size="30" color={'#B40404'} />
                  </div>
                  <div className="mr-3">
                    <span style={{ color: '#B40404' }} className="text-lg">
                      {teste.porcent}
                    </span>
                  </div>
                  <div>
                    Em Relação à <br /> semana passada.
                  </div>
                </div>
              )}
            </Card>
          )
        })}
      </div>
      <div className="w-full flex justify-content-center">
        <div className="lg:w-full w-10 flex lg:flex-row flex-column lg:justify-content-around justify-content-center">
          <div className="lg:w-4 lg:mb-0 mb-2 ">
            <div className="p-card">
              <div className="p-card w-full bg-primary flex justify-content-center align-items-center">
                <p className="p-0 m-0 text-white">Balanço</p>
                <DashboardDropdownComponent />
              </div>
              <div className="flex w-full justify-content-center">
                <h2 className="text-green-500">+ 140$</h2>
              </div>
            </div>
            <div className="p-card w-full bg-primary flex justify-content-center align-items-center">
              <p className="text-white">Ultimos 5 pedidos</p>
            </div>
            <div>
              <DashboardDataViewComponent />
            </div>
          </div>
          <div className="lg:w-6 flex flex-column">
            <div className="w-12 ">
              <Card>
                <ChartApexComponent />
              </Card>
            </div>
            <div className="w-12 mt-2 ">
              <Card>
                <ChartPierComponent data={dataPie} options={options} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
