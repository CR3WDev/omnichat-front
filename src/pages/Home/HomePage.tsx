import { SidebarMenuComponent } from '@pages/Home/components/SidebarMenu'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="flex">
      <SidebarMenuComponent />
      <div className={'flex justify-content-center'} style={{ width: 'calc(100vw - 280px)' }}></div>
      <Outlet />
    </div>
  )
}
