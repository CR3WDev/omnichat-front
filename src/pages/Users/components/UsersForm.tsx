import { ErrorMessageComponent } from '@components/ErrorMessage'
import { showToastSuccess } from '@components/GlobalToast'
import { PasswordFooter } from '@components/PasswordFooter'
import { PasswordHeader } from '@components/PasswordHeader'
import { getI18n } from '@hooks/useGetI18n'
import { UseValidateEmail } from '@hooks/useValidateEmail'
import { UseValidatePassword } from '@hooks/useValidatePassword'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { IUsers } from 'types/users'
import { postNewUsers, putUpdateUsers } from '../UsersServices'

interface UsersFormProps {
  rowSelected?: IUsers
  setRowSelected: Dispatch<SetStateAction<IUsers | undefined>>
}
export const UsersForm = ({ rowSelected, setRowSelected }: UsersFormProps) => {
  const mode = useSelector(selectorMode)
  const usersI18n = getI18n('users')
  const passwordComponentI18n = getI18n('password_component')
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: rowSelected })

  const { mutateAsync: newUsers } = postNewUsers()
  const { mutateAsync: updateUsers } = putUpdateUsers(rowSelected?.id)

  const handleCreate = (data: any) => {
    newUsers(
      {
        username: data.username,
        email: data.email,
        userType: 'Common',
        password: data?.password,
      },
      {
        onSuccess: () => {
          showToastSuccess(getI18n('default_success_message'))
          dispatch(setMode('search'))
        },
      }
    )
  }
  const handleUpdate = (data: any) => {
    updateUsers(
      {
        username: data.username,
        email: data.email,
        userType: rowSelected?.userType,
      },
      {
        onSuccess: () => {
          showToastSuccess(getI18n('default_success_message'))
          dispatch(setMode('search'))
        },
      }
    )
  }
  const onSubmit = (data: any) => {
    if (mode === 'create') handleCreate(data)
    if (mode === 'edit') handleUpdate(data)
  }

  useEffect(() => {
    return () => {
      setRowSelected(undefined)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container full-height">
      <div className="full-height mx-2">
        <div className="flex flex-column md:flex-row">
          <div className="col-12 md:col-6 pb-0">
            <label className="font-bold">{usersI18n.username + '*'}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.username,
              })}
              placeholder={usersI18n.username}
              id="name"
              {...register('username', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.username} />
          </div>
          <div className="col-12 md:col-6 pb-0">
            <label className="font-bold">{usersI18n.email + '*'}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.email,
              })}
              placeholder={usersI18n.email}
              id="email"
              {...register('email', {
                required: true,
                validate: (e) => {
                  return UseValidateEmail(e) || getI18n('invalid_email')
                },
              })}
            />
            <ErrorMessageComponent errors={errors.email} />
          </div>
        </div>
        {mode === 'create' && (
          <div className="flex flex-column md:flex-row">
            <div className="col-12 md:col-6 pb-0">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                  validate: (e) => {
                    return UseValidatePassword(`${e}`) || 'Senha Inválida'
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <Password
                      onChange={(e) => field.onChange(e)}
                      className={classNames({ 'p-invalid': fieldState.error }, 'w-full')}
                      header={<PasswordHeader />}
                      footer={<PasswordFooter />}
                      placeholder={passwordComponentI18n.password + '*'}
                      strongRegex={'^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&()_+])(?!.*\\s).{8,20}$'}
                      inputStyle={{ width: '100%' }}
                      maxLength={20}
                      toggleMask
                      promptLabel={passwordComponentI18n.choose_a_password}
                      weakLabel={passwordComponentI18n.too_weak}
                      mediumLabel={passwordComponentI18n.average}
                      strongLabel={passwordComponentI18n.strong_password}
                      id={field.name}
                      name={field.name}
                    />
                    <ErrorMessageComponent errors={errors.password} />
                  </>
                )}
              />
            </div>
            <div className="col-12 md:col-6 pb-0">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: true,
                  validate: (e: string) => {
                    return e === watch('password') || 'Senhas devem ser iguais!'
                  },
                }}
                render={({ field, fieldState }) => (
                  <div className="custom-password">
                    <Password
                      onChange={(e) => field.onChange(e)}
                      placeholder={passwordComponentI18n.confirm_password + '*'}
                      className={classNames({ 'p-invalid': fieldState.error }, 'w-full')}
                      feedback={false}
                      toggleMask
                      inputStyle={{ width: '100%' }}
                    />
                    <ErrorMessageComponent errors={errors.confirmPassword} />
                  </div>
                )}
              />
            </div>
          </div>
        )}
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
