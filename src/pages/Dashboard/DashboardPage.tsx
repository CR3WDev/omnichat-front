import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'

import { darkColors, dashboardInformations, dataPie, legendTextColor } from '@utils/mock/dashboard'
import { MdGroup, MdTrendingDown, MdTrendingUp } from 'react-icons/md'
import { ApexChart } from './Component/ApexChart'
import { DashboardDataView } from './Component/DashboardDataView'
import { CustomDropdown } from './Component/Dropdown'
import PieChart from './Component/PierChart'

export const DashboardPage = () => {
  const dashboardI18n = getI18n('dashboard')

  const options = {
    labels: dataPie.labels,
    colors: darkColors,
    legendTextColor: legendTextColor,
  };

  return (
    <div className="page-container">
      <h2 className="page-title">{dashboardI18n.title}</h2>
      <div className="flex justify-content-center">
        {dashboardInformations.map((teste, index: number) => {
          return (
            <Card className="mr-3 light-rounded my-4" key={index}>
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
      <div className='w-full flex justify-content-around'>
        <div className='w-3 h-full light-roundedsm'>
          <div className='p-card'>
            <div className='p-card w-full bg-primary flex justify-content-center align-items-center'>
              <p className='p-0 m-0 text-white'>Balanço</p>
              <CustomDropdown/>
            </div>
            <div className='flex w-full justify-content-center'>
              <h2 className='text-green-500'>+ 140$</h2>
            </div>
          </div>
          <div className='p-card w-full bg-primary flex justify-content-center align-items-center'>
            <p className='text-white'>Ultimos 5 pedidos</p>
          </div>
          <div className=' '>
            <DashboardDataView />
          </div>
          <div>
          </div>
        </div>
        <div className='w-4 light-roundedsm'>
          <Card>
            <ApexChart/>
          </Card>
        </div>
        <div className='w-4 light-roundedsm'>
          <Card>
            <PieChart data={dataPie} options={options}/>
          </Card>
        </div>
      </div>
    </div>
  )
}
