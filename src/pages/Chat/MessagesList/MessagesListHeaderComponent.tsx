import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { Dispatch, SetStateAction } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useIsMobile } from 'redux/Reducers/isMobileReducer'

type MessagesListHeaderProps = {
  setIsVisible: Dispatch<SetStateAction<boolean>>
}
export const MessagesListHeaderComponent = ({ setIsVisible }: MessagesListHeaderProps) => {
  const isMobile = useSelector(useIsMobile)
  return (
    <div className="flex mx-3 mt-3">
      {isMobile && (
        <div className="flex mr-2">
          <Button
            icon={<MdArrowBack size="20" />}
            text
            onClick={() => {
              setIsVisible(false)
            }}
            style={{ width: 'auto', padding: 0, margin: 0 }}
          ></Button>
        </div>
      )}
      <div className={'mr-2'}>
        <Avatar label={'M'} size="large" shape="circle" />
      </div>
      <div className={'flex align-items-center'}>
        <div className="flex flex-column">
          <span className={'font-bold'}>Marcelo Victor</span>
          <span className="opacity-40 text-sm">85 9 9407-8873</span>
        </div>
      </div>
    </div>
  )
}
