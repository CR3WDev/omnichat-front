import { Ripple } from 'primereact/Ripple'
import { IMenuOption } from '@pages/Home/components/SidebarHome/MenuOptions.ts'
import { useNavigate } from 'react-router-dom'

type SidebarItemProps = {
  menuOption: IMenuOption
  onHide?: () => void
}

export const SidebarItemComponent = ({ menuOption, onHide }: SidebarItemProps) => {
  const navigate = useNavigate()

  return (
    <div
      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
      onClick={() => {
        navigate(menuOption.to)
        onHide && onHide()
      }}
    >
      <i className="pi pi-folder mr-2"></i>
      <span className="font-medium">{menuOption?.label}</span>
      <Ripple />
    </div>
  )
}
