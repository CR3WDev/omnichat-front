import { api } from '@api/axios.ts'
import { showToastError } from '@components/GlobalToast'
import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO.ts'
import { ReactElement } from 'react'
import { ErrorResponse } from '../ServicesInterfaces.ts'

type InterceptorProps = {
  //** Tudo que tiver dentro dele terá os tratamentos de erros */
  children: ReactElement
}

export const InterceptorComponent = ({ children }: InterceptorProps) => {
  api.interceptors.request.use(
    (config) => {
      const LoginResponseDTO = useGetLoginResponseDTO()
      if (LoginResponseDTO?.tokens) {
        config.headers.Authorization = `Bearer ${LoginResponseDTO?.tokens.access_token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const errorResponse: ErrorResponse = error?.response?.data?.ResponseErrorDTO
      if (!errorResponse) return Promise.reject(error)

      if (errorResponse.statusCode >= 400 && errorResponse.statusCode < 500) {
        showToastError(errorResponse.description)
        throw new Error(errorResponse.description)
      }
      return Promise.reject(error)
    }
  )

  return children
}
