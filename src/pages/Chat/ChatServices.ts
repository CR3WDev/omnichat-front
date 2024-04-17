import { useService } from '@api/useServices'

export const getChatByUser = () => {
  return useService().useGet('getChatByUser', '/chats', true)
}
