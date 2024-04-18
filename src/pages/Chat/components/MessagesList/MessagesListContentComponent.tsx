import { useEffect, useState } from 'react'
import { IChat } from 'types/chat'
import { IMessage } from 'types/message'
import { MessagesListInputComponent } from './MessagesListInputComponent'
import { MessagesListItemComponent } from './MessagesListItemComponent'
import { getMessagesByChatId } from './MessagesListServices'

type MessagesListContentProps = {
  chatSelected: IChat | undefined
}
export const MessagesListContentComponent = ({ chatSelected }: MessagesListContentProps) => {
  if (!chatSelected) return <></>
  const [messages, setMessages] = useState<IMessage[]>([])
  const { refetch: lastMessage } = getMessagesByChatId(chatSelected.id)
  // const { messages:messagesBySocket, sendMessage } = useSocketMessage('1')
  useEffect(() => {
    lastMessage().then((data) => {
      setMessages(data?.data?.data?.data)
    })
  }, [chatSelected])

  return (
    <div className="flex flex-column flex-grow-1">
      <div
        className="flex flex-grow-1 flex-column-reverse"
        style={{
          maxHeight: 'calc(100vh - 60px - 2.5rem - 48px - 62px - 2rem)',
          overflow: 'auto',
        }}
      >
        {messages.map((message: IMessage, index: number) => {
          return (
            <MessagesListItemComponent
              message={message}
              simpleMessage={message?.sender === messages[index + 1]?.sender}
              key={index}
            />
          )
        })}
      </div>
      <MessagesListInputComponent setMessages={setMessages} chatSelected={chatSelected} />
    </div>
  )
}
