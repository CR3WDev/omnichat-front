import { ChatMessage, messagesMock } from '@pages/Chat/ChatMock'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { MdSend } from 'react-icons/md'
import { MessagesListItemComponent } from './MessagesListItemComponent'

export const MessagesListContentComponent = () => {
  // const { messages, sendMessage } = useSocketMessage('1')
  return (
    <div className="flex flex-column flex-grow-1">
      <div
        className="flex flex-grow-1 flex-column-reverse"
        style={{
          maxHeight: 'calc(100vh - 60px - 2.5rem - 48px - 62px - 2rem)',
          overflow: 'auto',
        }}
      >
        {messagesMock.map((message: ChatMessage, index: number) => {
          return (
            <MessagesListItemComponent
              message={message}
              simpleMessage={message?.user === messagesMock[index + 1]?.user}
              key={index}
            />
          )
        })}
      </div>
      <div
        className="flex"
        style={{
          paddingRight: '1.25rem',
          paddingBottom: '1rem',
          paddingLeft: '1.25rem',
          paddingTop: '1rem',
        }}
      >
        <span className="p-inputgroup w-full">
          <InputText placeholder="Pesquise por uma conversa!" className="w-full" />
          <Button icon={<MdSend />} />
        </span>
      </div>
    </div>
  )
}
