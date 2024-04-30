import { getI18n } from '@hooks/useGetI18n'
import { Toast, ToastProps } from 'primereact/toast'
import { useEffect, useRef } from 'react'

let getToastRef: ToastProps | any
const TOAST_EXPIRATION = 10000
const GlobalToast = () => {
  const toast = useRef<ToastProps | any>()

  useEffect(() => {
    getToastRef = toast
  }, [])

  return <Toast ref={toast} position="top-center" />
}
const showToastError = (message: string, title?: string) => {
  if (getToastRef.current)
    getToastRef.current.show({
      severity: 'error',
      life: TOAST_EXPIRATION,
      summary: title || getI18n('error'),
      detail: message,
    })
}
const showToastSuccess = (message: string, title?: string) => {
  if (getToastRef)
    getToastRef.current.show({
      severity: 'success',
      life: TOAST_EXPIRATION,
      summary: title || getI18n('success'),
      detail: message,
    })
}

const showToastWarn = (message: string, title?: string) => {
  if (getToastRef)
    getToastRef.current.show({
      severity: 'warn',
      life: TOAST_EXPIRATION,
      summary: title || getI18n('warn'),
      detail: message,
    })
}
const showToastInfo = (message: string, title?: string) => {
  if (getToastRef)
    getToastRef.current.show({
      severity: 'info',
      life: TOAST_EXPIRATION,
      summary: title || getI18n('info'),
      detail: message,
    })
}
export { getToastRef, GlobalToast, showToastError, showToastInfo, showToastSuccess, showToastWarn }
