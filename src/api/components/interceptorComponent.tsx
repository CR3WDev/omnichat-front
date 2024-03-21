import { api } from '@api/axios.ts'
import { showToastError } from '@components/GlobalToast'
import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO.ts'
import { ReactElement } from 'react'
import { ErrorResponse } from '../ServicesInterfaces.ts'
import { ErrorTypes } from '../enum.ts'

type InterceptorProps = {
  //** Tudo que tiver dentro dele terá os tratamentos de erros */
  children: ReactElement
}

export const InterceptorComponent = ({ children }: InterceptorProps) => {
  api.interceptors.request.use(
    (config) => {
      const LoginResponseDTO = useGetLoginResponseDTO()
      if (LoginResponseDTO?.token) {
        config.headers.Authorization = `Bearer ${LoginResponseDTO?.token}`
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
      const errorResponse: ErrorResponse = error?.response?.data?.ApiException
      if (!errorResponse) return Promise.reject(error)

      if (errorResponse.httpStatus === ErrorTypes.BadRequest) {
        showToastError(errorResponse.message)
        throw new Error(errorResponse.message)
      }
      return Promise.reject(error)
    }
  )

  return children
}
