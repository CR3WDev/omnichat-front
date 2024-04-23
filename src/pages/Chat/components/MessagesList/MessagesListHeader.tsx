import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { Dispatch, SetStateAction } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectorIsMobile } from 'redux/Reducers/isMobileReducer'
import { IChat } from 'types/chat'

type MessagesListHeaderProps = {
  //** define se a lista será visível ou não no mobile */
  chatSelected: IChat | undefined
  setChatSelected: Dispatch<SetStateAction<IChat | undefined>>
}
export const MessagesListHeader = ({ chatSelected, setChatSelected }: MessagesListHeaderProps) => {
  const isMobile = useSelector(selectorIsMobile)
  return (
    <div className="flex mx-3 mt-3">
      {isMobile && (
        <div className="flex mr-2">
          <Button
            icon={<MdArrowBack size="20" />}
            text
            onClick={() => {
              setChatSelected(undefined)
            }}
            style={{ width: 'auto', padding: 0, margin: 0 }}
          ></Button>
        </div>
      )}
      <div className={'mr-2'}>
        <Avatar label={chatSelected?.customerName[0]} size="large" shape="circle" />
      </div>
      <div className={'flex align-items-center'}>
        <div className="flex flex-column">
          <span className={'font-bold'}>{chatSelected?.customerName}</span>
          <span className="opacity-40 text-sm">{chatSelected?.customerWhatsappNumber}</span>
        </div>
      </div>
    </div>
  )
}
