import { getChatByUser } from '@pages/Chat/ChatServices'
import { selectorIsMobile } from '@redux/Reducers/isMobileReducer'
import moment from 'moment'
import { Ripple } from 'primereact/Ripple'
import { Avatar } from 'primereact/avatar'
import { InputText } from 'primereact/inputtext'
import { Dispatch, SetStateAction } from 'react'
import { LuCheckCheck } from 'react-icons/lu'
import { useSelector } from 'react-redux'
import { IChat } from 'types/chat'

type ChatListProps = {
  /** useState que define o chat que vai ser mostrado */
  setChatSelected: Dispatch<SetStateAction<IChat | undefined>>
  /** define o chat que vai ser mostrado */
  chatSelected: IChat | undefined
}
export const ChatListComponent = ({ setChatSelected, chatSelected }: ChatListProps) => {
  const isMobile = useSelector(selectorIsMobile)

  const { data } = getChatByUser()

  function formatarDataComMoment(dataString: string) {
    moment.locale('pt-br')

    const dataMensagem = moment(dataString)
    const agora = moment()

    if (dataMensagem.isSame(agora, 'day')) {
      return `${dataMensagem.format('HH:mm')}`
    } else {
      return dataMensagem.format('DD/MM/YYYY')
    }
  }

  if (chatSelected && isMobile) return <></>
  return (
    <div className=" h-full p-3 lg:w-30rem w-full">
      <div className="mb-3">
        <div>
          <h2>Chats</h2>
        </div>
        <div className="w-full">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputText placeholder="Pesquise por uma conversa!" className="w-full" />
          </span>
        </div>
      </div>
      <div style={{ maxHeight: 'calc(100vh - 48px - 150px - 2rem)', overflow: 'auto' }}>
        {data?.data.data.map((chat: IChat, index: number) => {
          return (
            <div
              key={index}
              onClick={() => {
                setChatSelected(chat)
              }}
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
            >
              <div className="flex w-full">
                <div className="mr-3">
                  <Avatar label={chat?.customerName[0]} size="xlarge" shape="circle" />
                </div>
                <div className="w-full  flex flex-column justify-content-center">
                  <div className="flex justify-content-between w-full">
                    <div>
                      <span className="font-bold">{chat?.customerName}</span>
                    </div>
                    <div>
                      <span className="text-sm">
                        {formatarDataComMoment(chat?.lastMessagetime)}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '200px',
                      overflowX: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {chat?.lastMessageType === 'outgoing' && (
                      <LuCheckCheck size={20} className="mr-1" />
                    )}
                    <span>{chat?.lastMessage}</span>
                  </div>
                </div>
              </div>
              <Ripple />
            </div>
          )
        })}
      </div>
    </div>
  )
}
