import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { FrontErrorComponent } from './components/FrontError'
import { NotFoundPage } from './components/NotFound'

export const ErrorPage = () => {
  const error = useRouteError()
  return isRouteErrorResponse(error) ? <NotFoundPage /> : <FrontErrorComponent />
}
