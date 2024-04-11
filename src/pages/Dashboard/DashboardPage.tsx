import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'
import { MdGroup, MdTrendingDown, MdTrendingUp } from 'react-icons/md'

export const DashboardPage = () => {
  const dashboardI18n = getI18n('dashboard')

  const dashboardInformations = [
    {
      name: 'Clientes',
      value: 38,
      porcent: 8.5,
    },
    {
      name: 'Pedidos',
      value: 17,
      porcent: -4.1,
    },
    {
      name: 'Concluídos',
      value: 14,
      porcent: 1.4,
    },
    {
      name: 'Cancelados',
      value: 3,
      porcent: -0.9,
    },
  ]
  return (
    <div className="page-container">
      <h2 className="page-title">{dashboardI18n.title}</h2>
      <div className="flex">
        {dashboardInformations.map((teste) => {
          return (
            <Card className="mr-2">
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
    </div>
  )
}
