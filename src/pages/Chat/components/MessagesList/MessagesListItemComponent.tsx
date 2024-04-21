import { selectorTheme } from '@redux/Reducers/themeReducer'
import moment from 'moment'
import { LuCheckCheck } from 'react-icons/lu'
import { useSelector } from 'react-redux'
import { IMessage } from 'types/message'

type MessagesListItemProps = {
  //** objeto de mensagem do chat */
  message: IMessage
  //** define se será mostrado a mensagem normal ou a mais complexa com a foto e hora */
  simpleMessage: boolean
}
export const MessagesListItemComponent = ({ message, simpleMessage }: MessagesListItemProps) => {
  const theme = useSelector(selectorTheme)
  const isOutgoing = message.type === 'outgoing'
  const formartDate = (data: string): string => {
    const dataRecebida = moment(data)

    return dataRecebida.format('HH:mm')
  }

  return (
    <div className={`flex ${isOutgoing ? 'justify-content-end' : 'justify-content-start'}`}>
      <div key={message.id} className={`flex ${!simpleMessage && 'mt-2'}`}>
        <div
          className={`flex flex-column p-card mx-5 p-2 mb-2 ${isOutgoing ? 'bg-primary' : ''} ${theme === 'light' && !isOutgoing && 'border-1  border-round-lg'}`}
          style={{ maxWidth: '500px', borderColor: 'var(--surface-400)' }}
        >
          <div>
            {(!isOutgoing || message.isBotMessage) && (
              <span className="font-bold mr-2">
                {message.isBotMessage ? 'Chatbot 🤖' : message.sender}
              </span>
            )}
          </div>
          <div className="flex">
            <div>{message.text}</div>
            <div className="ml-2 flex align-items-end">
              <span className="opacity-30 text-sm">{formartDate(message.time)}</span>
              {isOutgoing && <LuCheckCheck className="ml-1" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
