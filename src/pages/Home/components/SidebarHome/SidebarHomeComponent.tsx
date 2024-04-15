import { IMenuOption, menuOptions } from '@pages/Home/components/SidebarHome/MenuOptions.tsx'
import { SidebarFooterComponent } from '@pages/Home/components/SidebarHome/SidebarFooterComponent.tsx'
import { SidebarHeaderComponent } from '@pages/Home/components/SidebarHome/SidebarHeaderComponent.tsx'
import { SidebarItemComponent } from '@pages/Home/components/SidebarHome/SidebarItemComponent.tsx'

export const SidebarHomeComponent = () => {
  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
        style={{ width: '300px' }}
      >
        <SidebarHeaderComponent />
        <div style={{ height: 'calc(100vh - 80px)' }} className="flex flex-column px-3">
          <div>
            {menuOptions.map((menuOption: IMenuOption, index: number) => {
              return <SidebarItemComponent menuOption={menuOption} key={index} />
            })}
          </div>
          <SidebarFooterComponent />
        </div>
      </div>
    </div>
  )
}
