import { getI18n } from '@hooks/useGetI18n'
import { ReactElement } from 'react'

type ErrorMessageProps = {
  /** errors do react-hook-forms */
  errors: any
}
export const ErrorMessageComponent = ({ errors }: ErrorMessageProps): ReactElement | undefined => {
  if (!errors) return
  if (errors?.type === 'required') {
    return <span className="p-error">{getI18n('required_field')}</span>
  }
  if (errors.type === 'validate') {
    return <span className="p-error">{errors.message}</span>
  }
}
