import { IMenuOption, menuOptions } from '@pages/Home/components/SidebarHome/MenuOptions.ts'
import { SidebarFooterComponent } from '@pages/Home/components/SidebarHome/SidebarFooterComponent.tsx'
import { SidebarHeaderComponent } from '@pages/Home/components/SidebarHome/SidebarHeaderComponent.tsx'
import { SidebarItemComponent } from '@pages/Home/components/SidebarHome/SidebarItemComponent.tsx'
import { Sidebar } from 'primereact/sidebar'

type TopbarMenuProps = {
  //** define se vai mostrar a sidebar da topbar */
  visible: boolean
  //** fecha a sidebar da topbar */
  onHide: () => void
}
export const TopbarSidebarComponent = ({ visible, onHide }: TopbarMenuProps) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      className="lg:w-18rem w-full"
      header={() => {
        return <SidebarHeaderComponent />
      }}
    >
      <div
        style={{ height: 'calc(100vh - 202px - 1.25rem - 2rem)' }}
        className="flex flex-column px-3"
      >
        <div>
          {menuOptions.map((menuOption: IMenuOption, index: number) => {
            return <SidebarItemComponent menuOption={menuOption} onHide={onHide} key={index} />
          })}
        </div>
      </div>
      <SidebarFooterComponent />
    </Sidebar>
  )
}
