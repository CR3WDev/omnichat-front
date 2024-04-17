import { getI18n } from '@hooks/useGetI18n'
import { useSwitchTheme } from '@hooks/useSwitchTheme'
import { selectorIsMobile } from '@redux/Reducers/isMobileReducer'
import { selectorTheme, setTheme } from '@redux/Reducers/themeReducer'
import { Button } from 'primereact/button'
import { MenuItem } from 'primereact/menuitem'
import { TieredMenu } from 'primereact/tieredmenu'
import { useRef, useState } from 'react'
import {
  MdAccountBox,
  MdArrowDropDown,
  MdDarkMode,
  MdLightMode,
  MdLogout,
  MdMenu,
} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteLogout } from './TopbarService'
import { TopbarSidebarComponent } from './TopbarSidebarComponent'

export const TopbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false)
  const homeI18n = getI18n('home')
  const theme = useSelector(selectorTheme)
  const isMobile = useSelector(selectorIsMobile)
  const navigate = useNavigate()
  const menu = useRef<any>(null)
  const dispatch = useDispatch()

  const { mutateAsync: logout } = deleteLogout()

  const items: MenuItem[] = [
    {
      label: homeI18n.profile,
      icon: <MdAccountBox size="20" className="mr-2" />,
    },
    {
      label: homeI18n.change_theme,
      icon:
        theme === 'light' ? (
          <MdDarkMode size="20" className="mr-2" />
        ) : (
          <MdLightMode size="20" className="mr-2" />
        ),
      command: () => {
        if (theme === 'light') {
          useSwitchTheme('dark')
          dispatch(setTheme('dark'))
        } else {
          useSwitchTheme('light')
          dispatch(setTheme('light'))
        }
      },
    },
    {
      separator: true,
    },
    {
      label: homeI18n.leave,
      icon: <MdLogout size="20" className="mr-2" />,
      command: () => {
        logout().then(() => {
          navigate('/login')
        })
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
          width: isMobile ? '100vw' : 'calc(100vw - 300px)',
        }}
        className={`flex surface-ground`}
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
                onClick={(e: any) => {
                  menu.current.toggle(e)
                }}
              >
                {homeI18n.menu} <MdArrowDropDown />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
