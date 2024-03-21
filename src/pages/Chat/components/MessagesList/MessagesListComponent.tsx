import { Divider } from 'primereact/divider'
import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { useIsMobile } from 'redux/Reducers/isMobileReducer'
import { MessagesListContentComponent } from './MessagesListContentComponent'
import { MessagesListHeaderComponent } from './MessagesListHeaderComponent'

type MessagesListProps = {
  //** define se a lista será visível ou não no mobile */
  isVisible: boolean
  //** useState define se a lista será visível ou não no mobile */
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
export const MessagesListComponent = ({ isVisible, setIsVisible }: MessagesListProps) => {
  const isMobile = useSelector(useIsMobile)
  const isShowMessages = () => {
    if (isMobile && !isVisible) return 'hidden '
    return 'flex '
  }

  return (
    <div className={isShowMessages() + 'h-full w-full flex-column justify-content-between'}>
      <MessagesListHeaderComponent setIsVisible={setIsVisible} />
      <Divider />
      <MessagesListContentComponent />
    </div>
  )
}
