import { useService } from '@api/useServices'

export const getTableProducts = () => {
  return useService().useGetTable('getTableProducts', '/products/search')
}

export const postNewProducts = () => {
  return useService().usePost('getTableProducts', '/products')
}
