import { Crud } from '@components/Crud'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { selectorMode } from '@redux/Reducers/modeReducer'
import { useSelector } from 'react-redux'
import { OrdersForm } from './components/OrdersForm'

export const OrdersPage = () => {
  const mode = useSelector(selectorMode)
  const orderI18n = getI18n('order')

  const cols = [
    { field: 'orderNumber', header: 'Número de Pedido' },
    { field: 'client', header: 'Cliente' },
    { field: 'status', header: 'Status' },
    { field: 'price', header: 'Valor do Pedido', type: 'currency' },
  ]
  const colsSearch = [
    { field: 'orderNumber', header: 'Número de Pedido' },
    { field: 'client', header: 'Cliente' },
    { field: 'status', header: 'Status' },
  ]
  const orders = [
    {
      orderNumber: 10000,
      client: 'João Silva',
      status: 'Em preparação',
      price: 50,
    },
    {
      orderNumber: 10001,
      client: 'Maria Oliveira',
      status: 'Pronto para entrega',
      price: 70,
    },
    {
      orderNumber: 10002,
      client: 'Carlos Souza',
      status: 'A caminho',
      price: 65,
    },
    {
      orderNumber: 10003,
      client: 'Ana Costa',
      status: 'Entregue',
      price: 55,
    },
    {
      orderNumber: 10004,
      client: 'Roberto Lima',
      status: 'Em preparação',
      price: 80,
    },
    {
      orderNumber: 10005,
      client: 'Fernanda Rocha',
      status: 'Pronto para entrega',
      price: 45,
    },
    {
      orderNumber: 10006,
      client: 'Lucas Andrade',
      status: 'A caminho',
      price: 75,
    },
    {
      orderNumber: 10007,
      client: 'Patrícia Mendes',
      status: 'Entregue',
      price: 85,
    },
    {
      orderNumber: 10008,
      client: 'Eduardo Pereira',
      status: 'Em preparação',
      price: 60,
    },
    {
      orderNumber: 10009,
      client: 'Sofia Gonçalves',
      status: 'Pronto para entrega',
      price: 95,
    },
  ]

  const handleOnDelete = () => {
    showToastSuccess(getI18n('default_success_message'))
  }
  return (
    <Crud.Root title={orderI18n.title}>
      {(mode === 'edit' || mode === 'create') && <OrdersForm />}
      {mode === 'search' && (
        <>
          <Crud.SearchBar columns={colsSearch}></Crud.SearchBar>
          {/* <Crud.Table
            data={orders}
            cols={cols}
            currentPage={0}
            onDelete={handleOnDelete}
            rowsPerPage={20}
            totalRecords={99}
            onPageChange={(event) => console.log('Página alterada:', event)}
          ></Crud.Table> */}
        </>
      )}
    </Crud.Root>
  )
}
