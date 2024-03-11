import { ReactElement } from 'react'

type AuthCheckerProps = {
  children: ReactElement
}
export const AuthChecker = ({ children }: AuthCheckerProps) => {
  // const loginResponseDTO = useGetLoginResponseDTO()
  // return loginResponseDTO ? children : <Navigate to="/login" replace />
  return children
}
