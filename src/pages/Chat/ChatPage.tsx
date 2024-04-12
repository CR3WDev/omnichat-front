import { selectorIsMobile } from '@redux/Reducers/isMobileReducer'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatListComponent } from './components/ChatsList'
import { MessagesListComponent } from './components/MessagesList'
import { SocketComponent } from './components/Socket'

export const ChatPage = () => {
  const [showMessagesList, setShowMessagesList] = useState(false)
  const isMobile = useSelector(selectorIsMobile)
  const showDivider = !(showMessagesList && isMobile)
  return (
    <div className="page-container flex">
      <>
        <ChatListComponent
          setShowMessagesList={setShowMessagesList}
          showMessagesList={showMessagesList}
        />
         <SocketComponent/>
        {showDivider && <Divider layout={'vertical'} className={'m-0 p-0 md:block hidden'} />}
        <MessagesListComponent isVisible={showMessagesList} setIsVisible={setShowMessagesList} />
      </>
    </div>
  )
}
