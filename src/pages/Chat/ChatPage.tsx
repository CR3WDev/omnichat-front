import { selectorIsMobile } from '@redux/Reducers/isMobileReducer'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { SocketService } from '../../api/SocketService'
import { ChatListComponent } from './components/ChatsList'
import { MessagesListComponent } from './components/MessagesList'

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
        <SocketService/>
        {showDivider && <Divider layout={'vertical'} className={'m-0 p-0 md:block hidden'} />}
        <MessagesListComponent isVisible={showMessagesList} setIsVisible={setShowMessagesList} />
      </>
    </div>
  )
}
