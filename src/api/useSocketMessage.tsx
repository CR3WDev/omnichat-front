import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { IChat } from 'types/chat'
import { IMessage } from 'types/message'

export const useSocketMessage = (chatSelected: IChat) => {
  const socket = io(import.meta.env.VITE_BASE_URL)
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    if (!chatSelected) {
      console.log('entrou')
      socket.off('response')
      return
    }
    socket.on('response', (response) => {
      console.log(response)
    })

    return () => {
      socket.off('response')
    }
  }, [chatSelected])

  return { messages }
}
