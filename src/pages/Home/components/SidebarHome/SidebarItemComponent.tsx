import { IMenuOption } from '@pages/Home/components/SidebarHome/MenuOptions.ts'
import { Ripple } from 'primereact/Ripple'
import { useLocation, useNavigate } from 'react-router-dom'

type SidebarItemProps = {
  //** item do menu */
  menuOption: IMenuOption
  //** onHide para fechar a sidebar no modo celular */
  onHide?: () => void
}

export const SidebarItemComponent = ({ menuOption, onHide }: SidebarItemProps) => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const isActiveOption = location.includes(menuOption.to)

  return (
    <div
      className={`p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 ${isActiveOption ? '' : 'hover:surface-100'} transition-duration-150 transition-colors w-full ${isActiveOption && 'bg-primary'}`}
      onClick={() => {
        navigate(menuOption.to)
        onHide && onHide()
      }}
    >
      <span className="font-medium">{menuOption?.label}</span>
      <Ripple />
    </div>
  )
}
