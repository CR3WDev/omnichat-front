import { useService } from '@api/useServices'

export const getServiceProviders = () => {
  const { data, ...rest } = useService().useGet('getServiceProviders', '/service_providers', true)

  const providerNames = data?.data.map((provider: { name: string }) => provider.name)

  return { ...rest, data: providerNames }
}
