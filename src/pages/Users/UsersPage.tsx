import { Crud } from '@components/Crud'
import { useDefaultTableConfig } from '@hooks/useDefaultTableConfig'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITableConfig } from 'types/tableConfig'
import { IUsers } from 'types/users'
import { UsersForm } from './components/UsersForm'
import { deleteUsers, getTableUsers } from './UsersServices'

export const UsersPage = () => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('products')
  const dispatch = useDispatch()
  const [rowSelected, setRowSelected] = useState<IUsers | undefined>()
  const [tableConfig, setTableConfig] = useState<ITableConfig>(useDefaultTableConfig('username'))
  const { refetch: getProducts, data } = getTableUsers(tableConfig)
  const { mutateAsync: removeProducts } = deleteUsers(rowSelected?.id)

  const columns = [
    { field: 'username', header: 'Nome de Usuário' },
    { field: 'email', header: 'Email' },
    { field: 'userType', header: 'Tipo de Usuário' },
  ]
  const columnsSearch = [
    { field: 'username', header: 'Nome de Usuário' },
    { field: 'email', header: 'Email' },
  ]

  const handleOnDelete = (_row: any) => {
    removeProducts()
  }

  useEffect(() => {
    getProducts()
  }, [tableConfig])

  return (
    <Crud.Root title={productsI18n.title}>
      {(mode === 'edit' || mode === 'create') && (
        <UsersForm rowSelected={rowSelected} setRowSelected={setRowSelected} />
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
