import { useEffect, useRef, useState } from 'react'
import socketIOClient, { Socket } from 'socket.io-client'
import { IMessage } from 'types/message'

export const useSocketMessage = (roomId: string) => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const socketRef = useRef<Socket>()

  const SOCKET_SERVER_URL = import.meta.env.VITE_BASE_URL
  const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'

  const sendMessage = (messageBody: string) => {
    socketRef.current!.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current!.id,
    })
  }

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    })

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: IMessage) => {
      const incomingMessage: IMessage = {
        ...message,
      }
      setMessages((prevMessages) => [...prevMessages, incomingMessage])
    })

    return () => {
      socketRef.current!.disconnect()
    }
  }, [roomId])

  return { messages, sendMessage }
}
