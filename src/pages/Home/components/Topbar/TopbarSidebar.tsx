import { Sidebar } from 'primereact/sidebar'
import { IMenuOption, menuOptions } from '../SidebarHome/MenuOptions'
import { SidebarFooter } from '../SidebarHome/SidebarFooter'
import { SidebarHeader } from '../SidebarHome/SidebarHeader'
import { SidebarItem } from '../SidebarHome/SidebarItem'

type TopbarMenuProps = {
  //** define se vai mostrar a sidebar da topbar */
  visible: boolean
  //** fecha a sidebar da topbar */
  onHide: () => void
}
export const TopbarSidebar = ({ visible, onHide }: TopbarMenuProps) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      className="w-full surface-ground"
      header={() => {
        return <SidebarHeader />
      }}
    >
      <div
        style={{ height: 'calc(100vh - 202px - 1.25rem - 2rem)' }}
        className="flex flex-column px-3"
      >
        <div>
          {menuOptions.map((menuOption: IMenuOption, index: number) => {
            return <SidebarItem menuOption={menuOption} onHide={onHide} key={index} />
          })}
        </div>
      </div>
      <SidebarFooter isTopbarFooter />
    </Sidebar>
  )
}
