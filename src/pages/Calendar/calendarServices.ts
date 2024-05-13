import { useService } from '@api/useServices'
import { ITableConfig } from 'types/tableConfig'

export const getTableCalendar = (tableConfig: ITableConfig) => {
  return useService().useGetTable('getDataTableCalendar', '/appointments/search', tableConfig)
}
export const postNewCalendar = () => {
  return useService().usePost('getDataTableCalendar', '/appointments')
}
export const deleteCalendar = (id?: number) => {
  return useService().useDelete('getDataTableCalendar', `/appointments/${id}`)
}
export const putUpdateCalendar = (id?: number) => {
  return useService().usePut('getDataTableCalendar', `/appointments/${id}`)
}
export const getServiceProvider = () => {
  return useService().useGet('getServiceProvider', '/service_providers', true)
}
