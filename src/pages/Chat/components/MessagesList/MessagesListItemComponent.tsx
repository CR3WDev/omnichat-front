import moment from 'moment'
import { Avatar } from 'primereact/avatar'
import { useState } from 'react'
import { IMessage } from 'types/message'

type MessagesListItemProps = {
  //** objeto de mensagem do chat */
  message: IMessage
  //** define se será mostrado a mensagem normal ou a mais complexa com a foto e hora */
  simpleMessage: boolean
}
export const MessagesListItemComponent = ({ message, simpleMessage }: MessagesListItemProps) => {
  const [isHover, setIsHover] = useState(false)

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
  const formartDateSimple = (data: string): string => {
    const dataRecebida = moment(data)

    return dataRecebida.format('HH:mm')
  }

  return (
    <>
      <div
        key={message.id}
        className={`flex ${!simpleMessage && 'mt-2'} ${isHover ? 'surface-100' : ''}`}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        onMouseEnter={() => {
          setIsHover(true)
        }}
      >
        {!simpleMessage ? (
          <div>
            <div className="mx-3">
              <Avatar label={message.sender[0]} size="normal" shape="circle" />
            </div>
          </div>
        ) : (
          <div style={{ width: 'calc(36px + 0.25rem)' }}>
            <span className={`opacity-30 text-sm ml-1 ${!isHover && 'hidden'}`}>
              {formartDateSimple(message.time)}
            </span>
          </div>
        )}
        <div
          className="flex flex-column"
          style={{ marginLeft: simpleMessage ? 'calc(32px + 2rem - 35.8px - 0.25rem)' : '' }}
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
    </>
  )
}
