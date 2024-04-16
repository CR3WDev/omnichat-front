import { Crud } from '@components/Crud'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { ProductsPage } from '@pages/Products'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { useDispatch, useSelector } from 'react-redux'

export const UsersPage = () => {
  const mode = useSelector(selectorMode)
  const dispatch = useDispatch()
  const productsI18n = getI18n('products')

  const cols = [
    { field: 'id', header: 'ID' },
    { field: 'marca', header: 'Marca' },
    { field: 'modelo', header: 'Modelo' },
    { field: 'ano', header: 'Ano' },
  ]
  const cars = [
    { id: 1, marca: 'Toyota ', modelo: 'Corolla', ano: 2022 },
    { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2021 },
    { id: 3, marca: 'Ford', modelo: 'Focus', ano: 2020 },
  ]

  const handleCreate = () => {
    dispatch(setMode('create'))
  }

  const handleOnDelete = () => {
    showToastSuccess(getI18n('default_success_message'))
  }
  return (
    <Crud.Root title={productsI18n.title}>
      {(mode === 'edit' || mode === 'create') && <ProductsPage />}
      {mode === 'search' && (
        <>
          <Crud.Table
            data={cars}
            cols={cols}
            currentPage={0}
            onDelete={handleOnDelete}
            rowsPerPage={20}
            totalRecords={cars.length}
            onPageChange={(event) => console.log('Página alterada:', event)}
          ></Crud.Table>
        </>
      )}
    </Crud.Root>
  )
}
