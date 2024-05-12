import { Crud } from '@components/Crud'
import { useDefaultTableConfig } from '@hooks/useDefaultTableConfig'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICalendar } from 'types/calendar'
import { ITableConfig } from 'types/tableConfig'
import { deleteUsers, getTableUsers } from './UsersServices'
import { CalendarForm } from './components/CalendarForm'

export const CalendarPage = () => {
  const mode = useSelector(selectorMode)
  const usersI18n = getI18n('calendar')
  const dispatch = useDispatch()
  const [rowSelected, setRowSelected] = useState<ICalendar | undefined>()
  const [tableConfig, setTableConfig] = useState<ITableConfig>(useDefaultTableConfig('username'))
  const { refetch: getProducts, data } = getTableUsers(tableConfig)
  const { mutateAsync: removeProducts } = deleteUsers(rowSelected?.id)

  const columns = [
    { field: 'customerUser', header: 'Nome do Cliente' },
    { field: 'agendamento', header: 'Data do Agendamento' },
    { field: 'systemUser', header: 'Prestador de Serviço' },
  ]
  const columnsSearch = [
    { field: 'customerUser', header: 'Nome do Cliente' },
    { field: 'agendamento', header: 'Data do Agendamento', type: 'date' },
    { field: 'systemUser', header: 'Prestador de Serviço' },
  ]

  const handleOnDelete = async (_row: any) => {
    await removeProducts()
  }

  useEffect(() => {
    getProducts()
  }, [tableConfig])

  return (
    <Crud.Root title={usersI18n.title} setRowSelected={setRowSelected}>
      {(mode === 'edit' || mode === 'create') && (
        <CalendarForm rowSelected={rowSelected} setRowSelected={setRowSelected} />
      )}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={columnsSearch} setTableConfig={setTableConfig}></Crud.SearchBar>
          <Card className="m-3">
            <Button
              label="cadastrar"
              onClick={() => {
                dispatch(setMode('create'))
              }}
            ></Button>
          </Card>
          <Crud.Table
            data={data?.data.data || []}
            columns={columns}
            setRowSelected={setRowSelected}
            setTableConfig={setTableConfig}
            onDelete={handleOnDelete}
            tableConfig={tableConfig}
            totalRecords={data?.data.totalRecords || 0}
          ></Crud.Table>
        </>
      )}
    </Crud.Root>
  )
}
