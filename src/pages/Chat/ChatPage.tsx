import { selectorIsMobile } from '@redux/Reducers/isMobileReducer'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatListComponent } from './components/ChatsList'
import { MessagesListComponent } from './components/MessagesList'

export const ChatPage = () => {
  const [chatSelected, setChatSelected] = useState<any>()
  const isMobile = useSelector(selectorIsMobile)
  const showDivider = !(!!chatSelected && isMobile)

  return (
    <div className="page-container flex">
      <>
        <ChatListComponent chatSelected={chatSelected} setChatSelected={setChatSelected} />

        {showDivider && <Divider layout={'vertical'} className={'m-0 p-0 md:block hidden'} />}
        {chatSelected || isMobile ? (
          <MessagesListComponent chatSelected={chatSelected} setChatSelected={setChatSelected} />
        ) : (
          <div className="flex align-items-center justify-content-center w-full">
            <span className="text-center">Selecione um chat para iniciar uma conversa!</span>
          </div>
        )}
      </>
    </div>
  )
}
