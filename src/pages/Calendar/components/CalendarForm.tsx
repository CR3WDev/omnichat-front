import { ErrorMessageComponent } from '@components/ErrorMessage'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { postNewUsers, putUpdateUsers } from '@pages/Users/UsersServices'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { classNames } from 'primereact/utils'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ICalendar } from 'types/calendar'

interface CalendarFormProps {
  rowSelected?: ICalendar
  setRowSelected: Dispatch<SetStateAction<ICalendar | undefined>>
}

export const CalendarForm = ({ rowSelected, setRowSelected }: CalendarFormProps) => {
  const mode = useSelector(selectorMode)
  const calendarI18n = getI18n('calendar')
  const dispatch = useDispatch()
  const serviceProviderList = [
    { serviceProvider: 'Marcelo', code: 1 },
    { serviceProvider: 'Aguiar', code: 2 },
    { serviceProvider: 'Mateus', code: 3 },
  ]
  const serviceList = [
    { service: 'Corte', code: 1 },
    { service: 'Barba', code: 2 },
    { service: 'Sombrancelha', code: 3 },
  ]
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
        userType: data.userType,
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
            <label className="font-bold">{calendarI18n.clientName + '*'}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.clientName,
              })}
              placeholder={calendarI18n.clientName}
              id="name"
              {...register('clientName', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.clientName} />
          </div>
          <div className="col-12 md:col-6 pb-0">
            <Controller
              name="services"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value }, formState: { errors } }) => {
                return (
                  <div className="flex flex-column">
                    <div>
                      <label className="font-bold">{calendarI18n.service + '*'}</label>
                    </div>
                    <MultiSelect
                      name={name}
                      id={name}
                      value={value}
                      className="my-1"
                      onChange={(e) => {
                        onChange(e.target.value)
                      }}
                      optionLabel="service"
                      placeholder="Selecione o(s) Serviço(s)"
                      options={serviceList}
                      optionValue="code"
                    ></MultiSelect>
                  </div>
                )
              }}
            ></Controller>
            <ErrorMessageComponent errors={errors.services} />
          </div>
        </div>
        <div className="flex">
          <div className="col-12 md:col-6 pb-0">
            <Controller
              name="serviceProvider"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value }, formState: { errors } }) => {
                return (
                  <div className="flex flex-column">
                    <div>
                      <label className="font-bold">{calendarI18n.serviceProvider + '*'}</label>
                    </div>
                    <Dropdown
                      name={name}
                      id={name}
                      value={value}
                      className="my-1"
                      onChange={(e) => {
                        onChange(e.target.value)
                      }}
                      optionLabel="serviceProvider"
                      placeholder="selecione um prestador de serviço"
                      options={serviceProviderList}
                      optionValue="code"
                    ></Dropdown>
                  </div>
                )
              }}
            ></Controller>
            <ErrorMessageComponent errors={errors.serviceProvider} />
          </div>
          <div className="col-12 md:col-6 pb-0">
            <Controller
              name="scheduling"
              control={control}
              rules={{ required: true }}
              render={({ field: { name, onChange, value }, formState: { errors } }) => {
                return (
                  <div className="flex flex-column">
                    <div>
                      <label className="font-bold">{calendarI18n.scheduling + '*'}</label>
                    </div>
                    <Calendar
                      name={name}
                      id={name}
                      locale="pt"
                      dateFormat="dd/mm/yy"
                      value={value}
                      className="my-1"
                      onChange={(e) => {
                        onChange(e.target.value)
                      }}
                      placeholder="selecione um prestador de serviço"
                    ></Calendar>
                  </div>
                )
              }}
            ></Controller>
            <ErrorMessageComponent errors={errors.scheduling} />
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
