import { Outlet } from 'react-router-dom'
import { SidebarHome } from './components/SidebarHome'
import { Topbar } from './components/Topbar'

export const HomePage = () => {
  return (
    <div className="flex">
      <SidebarHome />
      <div>
        <Topbar />
        <div
          style={{ height: 'calc(100vh - 60px)', overflow: 'auto' }}
          className="flex justify-content-center align-items-center"
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}
