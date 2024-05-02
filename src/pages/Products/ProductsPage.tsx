import { Crud } from '@components/Crud'
import { useDefaultTableConfig } from '@hooks/useDefaultTableConfig'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from 'types/product'
import { ITableConfig } from 'types/tableConfig'
import { ProductsForm } from './components/ProductsForm'
import { deleteProducts, getTableProducts } from './ProductsServices'

export const ProductsPage = () => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('products')
  const dispatch = useDispatch()
  const [rowSelected, setRowSelected] = useState<IProduct | undefined>()
  const [tableConfig, setTableConfig] = useState<ITableConfig>(useDefaultTableConfig('name'))
  const { refetch: getProducts, data } = getTableProducts(tableConfig)
  const { mutateAsync: removeProducts } = deleteProducts(rowSelected?.id)

  const cols = [
    { field: 'name', header: 'Produto' },
    { field: 'price', header: 'Preço', type: 'currency' },
    { field: 'description', header: 'Descrição' },
  ]
  const colsPesquisa = [{ field: 'name', header: 'Produto' }]

  const handleOnDelete = async (_row: any) => {
    await removeProducts()
  }

  useEffect(() => {
    getProducts()
  }, [tableConfig])

  return (
    <Crud.Root title={productsI18n.title} setRowSelected={setRowSelected}>
      {(mode === 'edit' || mode === 'create') && (
        <ProductsForm rowSelected={rowSelected} setRowSelected={setRowSelected} />
      )}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={colsPesquisa} setTableConfig={setTableConfig}></Crud.SearchBar>
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
            columns={cols}
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
