import { useService } from '@api/useServices'

export const getMessagesByChatId = (chatId: number) => {
  return useService().useGet('getMessagesByChatId', `/messages/${chatId}`, false)
}
export const postSendMessage = () => {
  return useService().usePost('postSendMessage', `/messages`)
}
