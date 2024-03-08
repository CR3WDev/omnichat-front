import { SidebarMenuComponent } from '@pages/Home/components/SidebarMenu'

export const HomePage = () => {
  return (
    <div className="flex">
      <SidebarMenuComponent />
      <div className={'bg-primary flex justify-content-center'} style={{ width: 'calc(100vw - 280px)' }}>
        <h1>Bem-Vindo ao OmniChat</h1>
      </div>
    </div>
  )
}
