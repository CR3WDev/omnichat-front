import { selectorTheme } from '@redux/Reducers/themeReducer'
import { PrimeReactContext } from 'primereact/api'
import { ReactElement, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'

type ThemeProps = {
  children: ReactElement
}
export const ThemeComponent = ({ children }: ThemeProps) => {
  const theme = useSelector(selectorTheme)

  const { changeTheme } = useContext(PrimeReactContext)

  useEffect(() => {
    if (!theme) return
    console.log({ theme })
    if (!changeTheme) return
    if (theme === 'dark') {
      changeTheme(`lara-light-purple`, `lara-dark-purple`, 'theme-link', () => {
        console.log('entrou')
      })
    }
    if (theme === 'light') {
      changeTheme(`lara-dark-purple`, `lara-light-purple`, 'theme-link', () => {
        console.log('entrou')
      })
    }
  }, [theme])

  return <div>{children}</div>
}
