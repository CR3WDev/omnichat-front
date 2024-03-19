import { ChatMock } from '@pages/Chat/ChatMock'
import { useIsMobile } from '@redux/Reducers/isMobileReducer'
import { Ripple } from 'primereact/Ripple'
import { Avatar } from 'primereact/avatar'
import { InputText } from 'primereact/inputtext'
import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'

type ChatListProps = {
  /** useState que define se vai mostrar as mensagens ou não */
  setShowMessagesList: Dispatch<SetStateAction<boolean>>
  /** define se vai mostrar as mensagens ou não */
  showMessagesList: boolean
}
export const ChatListComponent = ({ setShowMessagesList, showMessagesList }: ChatListProps) => {
  const isMobile = useSelector(useIsMobile)

  if (showMessagesList && isMobile) return <></>
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
        {ChatMock.map((user: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => {
                setShowMessagesList(true)
              }}
              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
            >
              <div className="flex w-full">
                <div className="mr-3">
                  <Avatar label={user.firstLetter} size="xlarge" shape="circle" />
                </div>
                <div className="w-full  flex flex-column justify-content-center">
                  <div className="flex justify-content-between w-full">
                    <div>
                      <span className="font-bold">{user.username}</span>
                    </div>
                    <div>
                      <span>{user.lastMessageDate}</span>
                    </div>
                  </div>
                  <div>
                    <span>{user.lastMessage}</span>
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
