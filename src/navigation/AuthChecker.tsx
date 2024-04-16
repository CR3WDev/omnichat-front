import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO'
import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

type AuthCheckerProps = {
  children: ReactElement
}
export const AuthChecker = ({ children }: AuthCheckerProps) => {
  const loginResponseDTO = useGetLoginResponseDTO()
  return children
  return loginResponseDTO ? children : <Navigate to="/login" replace />
}
