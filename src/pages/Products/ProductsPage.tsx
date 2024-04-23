import { Crud } from '@components/Crud'
import { showToastSuccess } from '@components/GlobalToast'
import { useDefaultTableConfig } from '@hooks/useDefaultTableConfig'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITableConfig } from 'types/tableConfig'
import { ProductsFormComponent } from './components/ProductsForm'
import { getTableProducts } from './ProductsServices'

export const ProductsPage = () => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('products')
  const dispatch = useDispatch()
  const [tableConfig, setTableConfig] = useState<ITableConfig>(useDefaultTableConfig('title'))
  const { refetch: getProducts, data } = getTableProducts()

  const cols = [
    { field: 'product', header: 'Produto' },
    { field: 'description', header: 'Descrição' },
    { field: 'price', header: 'Preço', type: 'currency' },
  ]
  const colsPesquisa = [{ field: 'product', header: 'Produto' }]

  const handleOnDelete = () => {
    showToastSuccess(getI18n('default_success_message'))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Crud.Root title={productsI18n.title}>
      {(mode === 'edit' || mode === 'create') && <ProductsFormComponent />}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={colsPesquisa}></Crud.SearchBar>
          <Card className="m-3">
            <Button
              label="cadastrar"
              onClick={() => {
                dispatch(setMode('create'))
              }}
            ></Button>
          </Card>
          <Crud.Table
            data={data?.data.data}
            cols={cols}
            setTableConfig={setTableConfig}
            onDelete={handleOnDelete}
            tableConfig={tableConfig}
            totalRecords={data?.data.totalRecords}
          ></Crud.Table>
        </>
      )}
    </Crud.Root>
  )
}
