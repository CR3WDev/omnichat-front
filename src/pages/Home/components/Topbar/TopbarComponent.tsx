import { useIsMobile } from '@redux/Reducers/isMobileReducer'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { MdLogout, MdMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TopbarSidebarComponent } from './TopbarSidebarComponent'

export const TopbarComponent = () => {
  const isMobile = useSelector(useIsMobile)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <TopbarSidebarComponent
        visible={showMenu}
        onHide={() => {
          setShowMenu(false)
        }}
      />
      <div
        style={{
          height: '60px',
          background: 'var(--surface-card)',
          width: isMobile ? '100vw' : 'calc(100vw - 280px)',
        }}
        className="flex"
      >
        <div className="flex justify-content-between align-items-center w-full m-3">
          <div>
            <Button
              onClick={() => {
                setShowMenu(true)
              }}
              outlined
              className="lg:hidden block"
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
