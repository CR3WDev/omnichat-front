import { ErrorMessageComponent } from '@components/ErrorMessage'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { UseValidateEmail } from '@hooks/useValidateEmail'
import { setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export const ProductsFormComponent = () => {
  const productsI18n = getI18n('productsI18n')
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    showToastSuccess(getI18n('default_success_message'))
    dispatch(setMode('search'))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container full-height">
      <div className="full-height">
        <div className="flex flex-column md:flex-row">
          <div className="col-12 md:col-6">
            <label htmlFor="">{productsI18n.full_name}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.fullName,
              })}
              placeholder={productsI18n.full_name + '*'}
              id="fullName"
              {...register('fullName', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.fullName} />
          </div>
          <div className="col-12 md:col-6">
            <label htmlFor="email">{productsI18n.email}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.email,
              })}
              placeholder={productsI18n.email + '*'}
              id="email"
              {...register('email', {
                required: true,
                validate: (e) => {
                  return UseValidateEmail(e) || 'Email Inválido'
                },
              })}
            />
            <ErrorMessageComponent errors={errors.email} />
          </div>
        </div>
      </div>
      <div className="flex justify-content-end m-2">
        <div className="mr-2">
          <Button
            type="button"
            text
            label={getI18n('return')}
            onClick={() => {
              dispatch(setMode('search'))
            }}
          ></Button>
        </div>
        <div>
          <Button label={getI18n('save')}></Button>
        </div>
      </div>
    </form>
  )
}
