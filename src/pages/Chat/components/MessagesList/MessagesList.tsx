import { Divider } from 'primereact/divider'
import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { selectorIsMobile } from 'redux/Reducers/isMobileReducer'
import { IChat } from 'types/chat'
import { MessagesListContent } from './MessagesListContent'
import { MessagesListHeader } from './MessagesListHeader'

type MessagesListProps = {
  //** define o chat Selecionado */
  chatSelected: IChat | undefined
  //** useState define o chat Selecionado */
  setChatSelected: Dispatch<SetStateAction<IChat | undefined>>
}
export const MessagesList = ({ chatSelected, setChatSelected }: MessagesListProps) => {
  const isMobile = useSelector(selectorIsMobile)
  const isShowMessages = () => {
    if (isMobile && !chatSelected) return 'hidden '
    return 'flex '
  }

  return (
    <div className={isShowMessages() + 'h-full w-full flex-column justify-content-between'}>
      <MessagesListHeader setChatSelected={setChatSelected} chatSelected={chatSelected} />
      <Divider />
      <MessagesListContent chatSelected={chatSelected} />
    </div>
  )
}
