import { api } from '@api/axios.ts'
import { showToastError } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n.ts'
import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO.ts'
import { ReactElement } from 'react'
import { ErrorResponse } from '../ServicesInterfaces.ts'

type InterceptorProps = {
  //** Tudo que tiver dentro dele terá os tratamentos de erros */
  children: ReactElement
}

export const Interceptor = ({ children }: InterceptorProps) => {
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
      if (error?.code === 'ERR_NETWORK') {
        showToastError(getI18n('server_down'))
        throw new Error(error?.code)
      }
      const errorResponse: ErrorResponse = error?.response?.data?.ResponseErrorDTO

      if (!errorResponse) {
        return Promise.reject(error)
      }

      if (errorResponse.statusCode >= 400 && errorResponse.statusCode < 500) {
        showToastError(errorResponse.description)
        throw new Error(errorResponse.description)
      }
      return Promise.reject(error)
    }
  )

  return children
}
