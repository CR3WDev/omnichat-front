import { useIsMobile } from '@redux/Reducers/isMobileReducer'
import { Button } from 'primereact/button'
import { MenuItem } from 'primereact/menuitem'
import { TieredMenu } from 'primereact/tieredmenu'
import { useRef, useState } from 'react'
import { MdAccountBox, MdArrowDropDown, MdDarkMode, MdMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TopbarSidebarComponent } from './TopbarSidebarComponent'

export const TopbarComponent = () => {
  const isMobile = useSelector(useIsMobile)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const menu = useRef<any>(null)
  const items: MenuItem[] = [
    {
      label: 'Perfil',
      icon: <MdAccountBox />,
    },
    {
      label: ' Trocar tema',
      icon: <MdDarkMode />,
    },
    {
      separator: true,
    },
    {
      label: 'Sair',
      icon: 'pi pi-share-alt',
      command: () => {
        navigate('/login')
      },
    },
  ]

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
          <div className="flex">
            <div>
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              <Button
                label="Menu"
                icon={<MdArrowDropDown />}
                iconPos="left"
                onClick={(e: any) => {
                  menu.current.toggle(e)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
