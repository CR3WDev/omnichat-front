import { setMode } from '@redux/Reducers/modeReducer'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'

type CrudRootProps = {
  children: ReactNode
  title: string
}
export const CrudRoot = ({ children, title }: CrudRootProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setMode('search'))
    }
  }, [])

  return (
    <div className="page-container flex flex-column">
      <ConfirmDialog draggable={false} />
      <h2 className="mx-3 mt-3 m-0">{title}</h2>
      {children}
    </div>
  )
}
