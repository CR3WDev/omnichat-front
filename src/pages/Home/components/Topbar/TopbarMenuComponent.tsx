import { Sidebar } from 'primereact/sidebar'
import { SidebarHeaderComponent } from '@pages/Home/components/SidebarHome/SidebarHeaderComponent.tsx'
import { IMenuOption, menuOptions } from '@pages/Home/components/SidebarHome/MenuOptions.ts'
import { SidebarItemComponent } from '@pages/Home/components/SidebarHome/SidebarItemComponent.tsx'
import { SidebarFooterComponent } from '@pages/Home/components/SidebarHome/SidebarFooterComponent.tsx'

type TopbarMenuProps = {
  visible: boolean
  onHide: () => void
}
export const TopbarMenuComponent = ({ visible, onHide }: TopbarMenuProps) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      className="sm:w-18rem w-full"
      header={() => {
        return <SidebarHeaderComponent />
      }}
    >
      <div
        style={{ height: 'calc(100vh - 202px - 1.25rem - 2rem)' }}
        className="flex flex-column px-3"
      >
        <div>
          {menuOptions.map((menuOption: IMenuOption) => {
            return <SidebarItemComponent menuOption={menuOption} onHide={onHide} />
          })}
        </div>
      </div>
      <SidebarFooterComponent />
    </Sidebar>
  )
}
