import { getI18n } from '@hooks/useGetI18n'
import { selectorIsMobile } from '@redux/Reducers/isMobileReducer'
import { selectorTheme, setTheme } from '@redux/Reducers/themeReducer'
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
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TopbarSidebarComponent } from './TopbarSidebarComponent'

export const TopbarComponent = () => {
  const theme = useSelector(selectorTheme)
  const homeI18n = getI18n('home')
  const isMobile = useSelector(selectorIsMobile)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const menu = useRef<any>(null)
  const dispatch = useDispatch()
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
          dispatch(setTheme('dark'))
          localStorage.setItem('theme', 'dark')
        } else {
          dispatch(setTheme('light'))
          localStorage.setItem('theme', 'light')
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
        navigate('/login')
      },
    },
  ]
  const { changeTheme } = useContext(PrimeReactContext)

  useEffect(() => {
    if (!theme) return
    console.log({ theme })
    if (!changeTheme) return
    changeTheme(`lara-light-purple`, `lara-dark-purple`, 'theme-link', () => {
      console.log('entrou')
    })
    // if (!changeTheme) return undefined
    // if (theme === 'dark') {
    //   changeTheme(`lara-light-purple`, `lara-dark-purple`, 'theme-link', () => {
    //     console.log('entrou')
    //   })
    // }
    // if (theme === 'light') {
    //   changeTheme(`lara-dark-purple`, `lara-light-purple`, 'theme-link', () => {
    //     console.log('entrou2')
    //   })
    // }
  }, [theme])

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
        className="flex bg-gray-900"
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
