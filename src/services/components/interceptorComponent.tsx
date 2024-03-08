import { useGetLoginResponseDTO } from '@utils/hooks/useGetLoginResponseDTO.ts'
import { showToastError } from '@components/GlobalToast'
import { api } from '../axios.tsx'
import { ErrorTypes } from '../enum.ts'
import { ErrorResponse } from '../ServicesInterfaces.ts'

export const InterceptorComponent = ({ children }: any) => {
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
