import { Crud } from '@components/Crud'
import { showToastSuccess } from '@components/GlobalToast'
import { useDefaultTableConfig } from '@hooks/useDefaultTableConfig'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode } from '@redux/Reducers/modeReducer'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { UsersForm } from './components/UsersForm'

export const UsersPage = () => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('users')
  const [_rowSelected, setRowSelected] = useState()
  const [tableConfig, setTableConfig] = useState(useDefaultTableConfig('username'))
  const cols = [
    { field: 'username', header: 'Nome do Usuário' },
    { field: 'email', header: 'Email' },
    { field: 'type', header: 'Tipo' },
  ]

  const users = [
    {
      id: 1,
      username: 'pizzaLover123',
      email: 'pizzalover123@example.com',
      type: 'COMUM',
    },
    {
      id: 2,
      username: 'ovenMaster',
      email: 'ovenmaster@example.com',
      type: 'ADMINISTRADOR',
    },
    {
      id: 3,
      username: 'cheesySlice',
      email: 'cheesyslice@example.com',
      type: 'COMUM',
    },
    {
      id: 4,
      username: 'doughTwister',
      email: 'doughtwister@example.com',
      type: 'COMUM',
    },
    {
      id: 5,
      username: 'adminPizza',
      email: 'adminpizza@example.com',
      type: 'ADMINISTRADOR',
    },
    {
      id: 6,
      username: 'sliceOfHeaven',
      email: 'sliceofheaven@example.com',
      type: 'COMUM',
    },
    {
      id: 7,
      username: 'toppingMaster',
      email: 'toppingmaster@example.com',
      type: 'COMUM',
    },
    {
      id: 8,
      username: 'crustCruncher',
      email: 'crustcruncher@example.com',
      type: 'COMUM',
    },
    {
      id: 9,
      username: 'sauceSorcerer',
      email: 'saucesorcerer@example.com',
      type: 'ADMINISTRADOR',
    },
    {
      id: 10,
      username: 'cheeseChampion',
      email: 'cheesechampion@example.com',
      type: 'COMUM',
    },
  ]

  const handleOnDelete = () => {
    showToastSuccess(getI18n('default_success_message'))
  }

  return (
    <Crud.Root title={productsI18n.title}>
      {(mode === 'edit' || mode === 'create') && <UsersForm />}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={cols} setTableConfig={setTableConfig}></Crud.SearchBar>
          <Crud.Table
            setRowSelected={setRowSelected}
            tableConfig={tableConfig}
            setTableConfig={setTableConfig}
            data={users}
            columns={cols}
            onDelete={handleOnDelete}
            totalRecords={999}
          ></Crud.Table>
        </>
      )}
    </Crud.Root>
  )
}
