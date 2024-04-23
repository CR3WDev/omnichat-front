import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'

import { useFormatCurrency } from '@hooks/useFormatCurrency'
import { selectorTheme } from '@redux/Reducers/themeReducer'
import { dashboardInformations, dataPie } from '@utils/mock/dashboard'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ChartHour } from './Component/Chart/ChartHour'
import { ChartPie } from './Component/Chart/ChartPie'
import { ChartWeek } from './Component/Chart/ChartWeek'

export const DashboardPage = () => {
  const theme = useSelector(selectorTheme)
  const dashboardI18n = getI18n('dashboard')

  const options = {
    labels: dataPie.labels,
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
  }

  const orders = [
    { id: '12345', customer: 'João Silva', status: 'Entregue', value: 'R$ 50,00' },
    { id: '12346', customer: 'Maria Oliveira', status: 'Preparando', value: 'R$ 30,00' },
    { id: '12347', customer: 'Carlos Pereira', status: 'Cancelado', value: 'R$ 25,00' },
    { id: '12348', customer: 'Ana Costa', status: 'A Caminho', value: 'R$ 45,00' },
    { id: '12349', customer: 'Roberto Souza', status: 'Entregue', value: 'R$ 70,00' },
  ]

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
              <span className="font-bold ml-2" style={{ color: '#008000' }}>
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
      <div className="flex mx-3 justify-content-between">
        <Card
          style={{
            width: 'calc(50% - 0.5rem)',
            marginRight: '0.5rem',
            borderColor: 'var(--surface-400)',
          }}
          className={`${theme === 'light' && 'border-1  border-round-lg'}`}
        >
          <h3 className="text-center">Vendas por Dia da Semana</h3>
          <ChartWeek />
        </Card>
        <Card
          style={{
            width: 'calc(50% - 0.5rem)',
            marginLeft: '0.5rem',
            borderColor: 'var(--surface-400)',
          }}
          className={`${theme === 'light' && 'border-1  border-round-lg'}`}
        >
          <h3 className="text-center">Vendas por Hora</h3>
          <ChartHour />
        </Card>
      </div>
      <div className="flex mx-3 justify-content-between my-3">
        <Card
          style={{
            width: 'calc(50% - 0.5rem)',
            marginRight: '0.5rem',
            borderColor: 'var(--surface-400)',
          }}
          className={`${theme === 'light' && 'border-1  border-round-lg'}`}
        >
          <div>
            <h3 className="text-center">Ultimos Pedidos</h3>
            <DataTable value={orders}>
              <Column field="id" header="Número de Pedido"></Column>
              <Column field="customer" header="Cliente"></Column>
              <Column field="status" header="Status"></Column>
              <Column field="value" header="Valor do Pedido"></Column>
            </DataTable>
          </div>
        </Card>
        <Card
          style={{
            width: 'calc(50% - 0.5rem)',
            marginLeft: '0.5rem',
            borderColor: 'var(--surface-400)',
          }}
          className={`${theme === 'light' && 'border-1  border-round-lg'}`}
        >
          <h3 className="text-center">Produtos Em Destaque</h3>
          <ChartPie data={dataPie} options={options} />
        </Card>
      </div>
    </div>
  )
}
