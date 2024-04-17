import { useEffect, useRef, useState } from 'react'
import socketIOClient, { Socket } from 'socket.io-client'
import { Message } from 'types/message'

interface IncomingMessage extends Message {
  ownedByCurrentUser: boolean
}

export const useSocketMessage = (roomId: string) => {
  const [messages, setMessages] = useState<IncomingMessage[]>([])
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

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: Message) => {
      const incomingMessage: IncomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current!.id,
      }
      setMessages((prevMessages) => [...prevMessages, incomingMessage])
    })

    return () => {
      socketRef.current!.disconnect()
    }
  }, [roomId])

  return { messages, sendMessage }
}
