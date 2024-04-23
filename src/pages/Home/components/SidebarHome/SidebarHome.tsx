import { IMenuOption, menuOptions } from '@pages/Home/components/SidebarHome/MenuOptions.tsx'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'
import { SidebarItem } from './SidebarItem'

export const SidebarHome = () => {
  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none"
        style={{ width: '300px' }}
      >
        <SidebarHeader />
        <div style={{ height: 'calc(100vh - 80px)' }} className="flex flex-column px-3">
          <div>
            {menuOptions.map((menuOption: IMenuOption, index: number) => {
              return <SidebarItem menuOption={menuOption} key={index} />
            })}
          </div>
          <SidebarFooter />
        </div>
      </div>
    </div>
  )
}
