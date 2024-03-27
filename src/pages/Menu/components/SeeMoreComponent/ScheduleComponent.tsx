import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

export const ScheduleComponent = () => {
  const menuI18n = getI18n('menu')
  const scheduleData = [
    { day: 'Segunda-feira', open: '18:00', close: '23:00' },
    { day: 'Terça-feira', open: '18:00', close: '23:00' },
    { day: 'Quarta-feira', open: '18:00', close: '23:00' },
    { day: 'Quinta-feira', open: '18:00', close: '23:00' },
    { day: 'Sexta-feira', open: '18:00', close: '00:00' },
    { day: 'Sábado', open: '12:00', close: '00:00' },
    { day: 'Domingo', open: '12:00', close: '23:00' },
  ]

  const renderDay = (rowData: any) => {
    return (
      <div className="p-d-flex p-ai-center">
        <span className="p-ml-2">{rowData.day}</span>
      </div>
    )
  }

  const renderTime = (rowData: any) => {
    return (
      <div className="p-d-flex p-ai-center">
        <span className="p-ml-2">
          {rowData.open} - {rowData.close}
        </span>
      </div>
    )
  }

  return (
    <Card className="w-20rem">
      <DataTable value={scheduleData} header={menuI18n.opening_hours}>
        <Column header={menuI18n.day} body={renderDay}></Column>
        <Column header={menuI18n.schedule} body={renderTime}></Column>
      </DataTable>
    </Card>
  )
}
