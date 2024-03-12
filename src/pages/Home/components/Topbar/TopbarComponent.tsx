import { TopbarMobileComponent } from '@pages/Home/components/Topbar/TopbarMobileComponent.tsx'
import { TopbarDesktopComponent } from '@pages/Home/components/Topbar/TopbarDesktopComponent.tsx'

export const TopbarComponent = () => {
  return (
    <>
      <TopbarDesktopComponent />
      <TopbarMobileComponent />
    </>
  )
}
