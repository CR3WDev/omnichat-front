import { SidebarItemComponent } from '@pages/Home/components/SidebarMenu/SidebarItemComponent.tsx'
import { SidebarFooterComponent } from '@pages/Home/components/SidebarMenu/SidebarFooterComponent.tsx'
import { SidebarHeaderComponent } from '@pages/Home/components/SidebarMenu/SidebarHeaderComponent.tsx'
import { IMenuOption, menuOptions } from '@pages/Home/components/SidebarMenu/MenuOptions.ts'

export const SidebarMenuComponent = () => {
  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
        style={{ width: '280px' }}
      >
        <SidebarHeaderComponent />
        <div style={{ height: 'calc(100vh - 80px)' }} className="flex flex-column px-3">
          <div>
            {menuOptions.map((menuOption: IMenuOption) => {
              return <SidebarItemComponent menuOption={menuOption} />
            })}
          </div>
          <SidebarFooterComponent />
        </div>
      </div>
    </div>
  )
}
