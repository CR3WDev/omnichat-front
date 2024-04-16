import { useSwitchTheme } from '@hooks/useSwitchTheme'
import { selectorTheme, setTheme } from '@redux/Reducers/themeReducer'
import { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type ThemeProps = {
  children: ReactElement
}
export const ThemeComponent = ({ children }: ThemeProps) => {
  const theme = useSelector(selectorTheme)
  const dispatch = useDispatch()

  useEffect(() => {
    if (theme === 'light') {
      dispatch(setTheme('light'))
      useSwitchTheme('light')
    } else {
      dispatch(setTheme('dark'))
      useSwitchTheme('dark')
    }
  }, [])

  return <div>{children}</div>
}
