import { useService } from '@api/useServices'
import { ITableConfig } from 'types/tableConfig'

export const getTableProducts = (tableConfig: ITableConfig) => {
  return useService().useGetTable('getTableProducts', '/products/search', tableConfig)
}

export const postNewProducts = () => {
  return useService().usePost('getTableProducts', '/products')
}
export const deleteProducts = (id?: number) => {
  return useService().useDelete('getTableProducts', `/products/${id}`)
}
