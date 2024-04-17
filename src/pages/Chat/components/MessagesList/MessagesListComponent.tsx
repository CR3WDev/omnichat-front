import { Divider } from 'primereact/divider'
import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { selectorIsMobile } from 'redux/Reducers/isMobileReducer'
import { MessagesListContentComponent } from './MessagesListContentComponent'
import { MessagesListHeaderComponent } from './MessagesListHeaderComponent'

type MessagesListProps = {
  //** define o chat Selecionado */
  chatSelected: boolean
  //** useState define o chat Selecionado */
  setChatSelected: Dispatch<SetStateAction<boolean>>
}
export const MessagesListComponent = ({ chatSelected, setChatSelected }: MessagesListProps) => {
  const isMobile = useSelector(selectorIsMobile)
  const isShowMessages = () => {
    if (isMobile && !chatSelected) return 'hidden '
    return 'flex '
  }

  return (
    <div className={isShowMessages() + 'h-full w-full flex-column justify-content-between'}>
      <MessagesListHeaderComponent setChatSelected={setChatSelected} chatSelected={chatSelected} />
      <Divider />
      <MessagesListContentComponent />
    </div>
  )
}
