import { useService } from '@api/useServices'
import { ITableConfig } from '../../types/tableConfig.ts'

export const getServiceProviders = () => {
  const { data, ...rest } = useService().useGet('getServiceProviders', '/service_providers', true)

  const providerNames = data?.data.map((provider: { name: string }) => provider.name)

  return { ...rest, data: providerNames }
}

export const getTableAppointments= (tableConfig: ITableConfig) => {
  return useService().useGetTable('getDataTableAppointments', '/appointments/search', tableConfig)
}
