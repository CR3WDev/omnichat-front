import { useService } from '@api/useServices'

export const deleteLogout = () => {
  return useService().useDelete('deleteLogout', '/auth/logout')
}
