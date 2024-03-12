import { Button } from 'primereact/button'
import { MdLogout, MdMenu } from 'react-icons/md'
import { TopbarMenuComponent } from '@pages/Home/components/Topbar/TopbarMenuComponent.tsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TopbarMobileComponent = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <TopbarMenuComponent
        visible={showMenu}
        onHide={() => {
          setShowMenu(false)
        }}
      />
      <div
        style={{ height: '80px', background: 'var(--surface-card)', width: '100vw' }}
        className="md:hidden flex"
      >
        <div className="flex justify-content-between w-full m-3">
          <div>
            <Button
              onClick={() => {
                setShowMenu(true)
              }}
              outlined
              className="md:hidden block"
              icon={<MdMenu />}
            ></Button>
          </div>
          <div>
            <Button
              onClick={() => {
                navigate('/login')
              }}
              outlined
              icon={<MdLogout />}
            >
              Sair
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
