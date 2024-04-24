import { useService } from '@api/useServices'
import { ITableConfig } from 'types/tableConfig'

export const getTableProducts = (tableConfig: ITableConfig) => {
  return useService().useGetTable('getDataTableProducts', '/products/search', tableConfig)
}
export const postNewProducts = () => {
  return useService().usePost('getDataTableProducts', '/products')
}
export const deleteProducts = (id?: number) => {
  return useService().useDelete('getDataTableProducts', `/products/${id}`)
}
export const putUpdateProducts = (id?: number) => {
  return useService().usePut('getDataTableProducts', `/products/${id}`)
}
