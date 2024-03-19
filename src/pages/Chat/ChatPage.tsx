import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { ChatListComponent } from './components/ChatsList'
import { MessagesListComponent } from './components/MessagesList'

export const ChatPage = () => {
  const [showMessagesList, setShowMessagesList] = useState(false)

  return (
    <div className="page-container flex">
      <>
        <ChatListComponent
          setShowMessagesList={setShowMessagesList}
          showMessagesList={showMessagesList}
        />
        <Divider layout={'vertical'} className={'m-0 p-0 md:block hidden'} />
        <MessagesListComponent isVisible={showMessagesList} setIsVisible={setShowMessagesList} />
      </>
    </div>
  )
}
