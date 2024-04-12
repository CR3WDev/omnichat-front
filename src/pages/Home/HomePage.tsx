import { TopbarComponent } from '@pages/Home/components/Topbar'
import { SidebarHomeComponent } from 'pages/Home/components/SidebarHome'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="flex">
      <SidebarHomeComponent />
      <div>
        <TopbarComponent />
        <div
          style={{ height: 'calc(100vh - 60px)' }}
          className="flex justify-content-center align-items-center"
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}
