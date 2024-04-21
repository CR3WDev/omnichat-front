import { Crud } from '@components/Crud'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode } from '@redux/Reducers/modeReducer'
import { useSelector } from 'react-redux'
import { ProductsFormComponent } from './components/ProductsForm'

export const ProductsPage = () => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('products')

  const cols = [
    { field: 'product', header: 'Produto' },
    { field: 'description', header: 'Descrição' },
    { field: 'price', header: 'Preço', type: 'currency' },
  ]
  const colsPesquisa = [{ field: 'product', header: 'Produto' }]
  const products = [
    {
      id: 1,
      product: 'Margherita',
      description: 'Molho de tomate, queijo mozzarella, tomates frescos e manjericão.',
      price: 35,
    },
    {
      id: 2,
      product: 'Pepperoni',
      description: 'Molho de tomate, queijo mozzarella e rodelas de pepperoni.',
      price: 40,
    },
    {
      id: 3,
      product: 'Quatro Queijos',
      description: 'Molho de tomate, mozzarella, gorgonzola, parmesão e catupiry.',
      price: 45,
    },
    {
      id: 4,
      product: 'Frango com Catupiry',
      description: 'Molho de tomate, frango desfiado, catupiry e azeitonas.',
      price: 42,
    },
    {
      id: 5,
      product: 'Portuguesa',
      description: 'Molho de tomate, queijo mozzarella, presunto, ovos, cebola e azeitonas.',
      price: 43,
    },
  ]

  const handleOnDelete = () => {
    showToastSuccess(getI18n('default_success_message'))
  }

  return (
    <Crud.Root title={productsI18n.title}>
      {(mode === 'edit' || mode === 'create') && <ProductsFormComponent />}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={colsPesquisa}></Crud.SearchBar>
          <Crud.Table
            data={products}
            cols={cols}
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
