import moment from 'moment'
import { Avatar } from 'primereact/avatar'
import { IMessage } from 'types/message'

type MessagesListItemProps = {
  //** objeto de mensagem do chat */
  message: IMessage
  //** define se será mostrado a mensagem normal ou a mais complexa com a foto e hora */
  simpleMessage: boolean
}
export const MessagesListItemComponent = ({ message, simpleMessage }: MessagesListItemProps) => {
  const formartDate = (data: string): string => {
    const dataRecebida = moment(data)
    const hoje = moment().startOf('day')
    const ontem = moment().subtract(1, 'days').startOf('day')

    if (dataRecebida.isSame(hoje, 'd')) {
      return `Hoje às ${dataRecebida.format('HH:mm')}`
    } else if (dataRecebida.isSame(ontem, 'd')) {
      return `Ontem às ${dataRecebida.format('HH:mm')}`
    } else {
      return dataRecebida.format('DD/MM/YYYY às HH:mm')
    }
  }

  return (
    <div className={`flex ${!simpleMessage && 'mt-2'}`}>
      {!simpleMessage && (
        <div>
          <div className="mx-3">
            <Avatar label={message.sender[0]} size="normal" shape="circle" />
          </div>
        </div>
      )}
      <div
        className="flex flex-column"
        style={{ marginLeft: simpleMessage ? 'calc(32px + 2rem)' : '' }}
      >
        {!simpleMessage && (
          <div>
            <span className="font-bold mr-2">{message.sender}</span>
            <span className="opacity-30 text-sm">{formartDate(message.time)}</span>
          </div>
        )}
        <div>{message.text}</div>
      </div>
    </div>
  )
}
