import { useService } from '@api/useServices'
import { ITableConfig } from 'types/tableConfig'

export const getTableUsers = (tableConfig: ITableConfig) => {
  return useService().useGetTable('getDataTableUsers', '/system_users/search', tableConfig)
}
export const postNewUsers = () => {
  return useService().usePost('getDataTableUsers', '/system_users')
}
export const deleteUsers = (id?: number) => {
  return useService().useDelete('getDataTableUsers', `/system_users/${id}`)
}
export const putUpdateUsers = (id?: number) => {
  return useService().usePut('getDataTableUsers', `/system_users/${id}`)
}
