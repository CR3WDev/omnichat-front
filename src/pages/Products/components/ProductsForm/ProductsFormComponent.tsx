import { ErrorMessageComponent } from '@components/ErrorMessage'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export const ProductsFormComponent = () => {
  const productsI18n = getI18n('products')
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
            <label htmlFor="">{productsI18n.product}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.product,
              })}
              placeholder={productsI18n.product + '*'}
              id="product"
              {...register('product', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.product} />
          </div>
          <div className="col-12 md:col-6">
            <label htmlFor="price">{productsI18n.price}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.price,
              })}
              placeholder={productsI18n.price + '*'}
              id="price"
              {...register('price', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.price} />
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
