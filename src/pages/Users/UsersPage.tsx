import { Crud } from '@components/Crud'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode } from '@redux/Reducers/modeReducer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UsersFormComponent } from './components/UsersForm'

export const UsersPage = () => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('users')

  const colsSearch = [
    { field: 'username', header: 'Nome do Usuário' },
    { field: 'email', header: 'Email' },
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

  useEffect(() => {
    console.log(mode)
  }, [mode])

  return (
    <Crud.Root title={productsI18n.title}>
      {(mode === 'edit' || mode === 'create') && <UsersFormComponent />}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={colsSearch}></Crud.SearchBar>
          <Crud.Table
            data={users}
            cols={colsSearch}
            currentPage={0}
            onDelete={handleOnDelete}
            rowsPerPage={20}
            totalRecords={999}
            onPageChange={(event) => console.log('Página alterada:', event)}
          ></Crud.Table>
        </>
      )}
    </Crud.Root>
  )
}
