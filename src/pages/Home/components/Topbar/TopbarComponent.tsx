import { useIsMobile } from '@redux/Reducers/isMobileReducer'
import { getI18n } from '@utils/hooks/useGetI18n'
import { PrimeReactContext } from 'primereact/api'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { MenuItem } from 'primereact/menuitem'
import { TieredMenu } from 'primereact/tieredmenu'
import { useContext, useEffect, useRef, useState } from 'react'
import {
  MdAccountBox,
  MdArrowDropDown,
  MdDarkMode,
  MdLightMode,
  MdLogout,
  MdMenu,
} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TopbarSidebarComponent } from './TopbarSidebarComponent'

export const TopbarComponent = () => {
  const { changeTheme } = useContext(PrimeReactContext)
  const [theme, setTheme] = useState<string>('dark')
  const homeI18n = getI18n('home')
  const isMobile = useSelector(useIsMobile)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const menu = useRef<any>(null)
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
        reloadTheme(theme, switchTheme(theme))
      },
    },
    {
      separator: true,
    },
    {
      label: homeI18n.leave,
      icon: <MdLogout size="20" className="mr-2" />,
      command: () => {
        navigate('/login')
      },
    },
  ]

  const switchTheme = (oldTheme: string) => {
    if (oldTheme === 'light') return 'dark'
    if (oldTheme === 'dark') return 'light'
    return 'light'
  }
  const reloadTheme = (oldTheme: string, newTheme: string) => {
    if (!changeTheme) return undefined
    changeTheme(`lara-${oldTheme}-purple`, `lara-${newTheme}-purple`, 'theme-link', () => {
      sessionStorage.setItem('theme', newTheme)
      setTheme(newTheme)
    })
  }

  useEffect(() => {
    const theme = sessionStorage.getItem('theme')
    if (!theme) {
      sessionStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      setTheme(theme)
    }
  }, [])
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
      {theme === 'light' && <Divider layout="horizontal" className="p-0 m-0" />}
    </>
  )
}
