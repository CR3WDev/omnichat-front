import { getI18n } from '@hooks/useGetI18n'
import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO'
import { Button } from 'primereact/button'
import { useNavigate, useRouteError } from 'react-router-dom'

export const NotFoundPage = () => {
  const error = useRouteError()
  console.log({ error })
  const navigate = useNavigate()
  const ErrorPageI18n = getI18n('Error')
  const isLogged = !!useGetLoginResponseDTO()

  return (
    <div className="h-screen w-screen flex justify-content-center align-items-center">
      <div className="flex flex-column w-16rem align-items-center">
        <span className="text-4xl">{ErrorPageI18n.oops}</span>
        <span className="text-8xl">{ErrorPageI18n.erro404}</span>
        <span className="text-xl">{ErrorPageI18n.page_not_found}</span>
        <Button
          className="mt-5"
          outlined
          onClick={() => {
            isLogged ? navigate('/home') : navigate('/')
          }}
        >
          {ErrorPageI18n.return_to_home_page}
        </Button>
      </div>
    </div>
  )
}
