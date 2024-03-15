import { IMenuOption } from '@pages/Home/components/SidebarHome/MenuOptions.ts'
import { Ripple } from 'primereact/Ripple'
import { useNavigate } from 'react-router-dom'

type SidebarItemProps = {
  //** item do menu */
  menuOption: IMenuOption
  //** onHide para fechar a sidebar no modo celular */
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
