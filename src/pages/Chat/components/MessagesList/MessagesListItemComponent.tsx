import { ChatMessage } from '@pages/Chat/ChatMock'
import { Avatar } from 'primereact/avatar'

type MessagesListItemProps = {
  //** objeto de mensagem do chat */
  message: ChatMessage
  //** define se será mostrado a mensagem normal ou a mais complexa com a foto e hora */
  simpleMessage: boolean
}
export const MessagesListItemComponent = ({ message, simpleMessage }: MessagesListItemProps) => {
  return (
    <div className={`flex ${!simpleMessage && 'mt-2'}`}>
      {!simpleMessage && (
        <div>
          <div className="mx-3">
            <Avatar label={message.user[0]} size="normal" shape="circle" />
          </div>
        </div>
      )}
      <div
        className="flex flex-column"
        style={{ marginLeft: simpleMessage ? 'calc(32px + 2rem)' : '' }}
      >
        {!simpleMessage && (
          <div>
            <span className="font-bold mr-2">{message.user}</span>
            <span className="opacity-30 text-sm"> Hoje às {message.time}</span>
          </div>
        )}
        <div>{message.message}</div>
      </div>
    </div>
  )
}
