import { ErrorMessageComponent } from '@components/ErrorMessage'
import { showToastSuccess } from '@components/GlobalToast'
import { getI18n } from '@hooks/useGetI18n'
import { postNewProducts, putUpdateProducts } from '@pages/Products/ProductsServices'
import { selectorMode, setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { classNames } from 'primereact/utils'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from 'types/product'

interface UsersFormProps {
  rowSelected?: IProduct
}
export const UsersForm = ({ rowSelected }: UsersFormProps) => {
  const mode = useSelector(selectorMode)
  const productsI18n = getI18n('products')
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: rowSelected })

  const { mutateAsync: newProducts } = postNewProducts()
  const { mutateAsync: updateProducts } = putUpdateProducts(rowSelected?.id)

  const handleCreate = (data: any) => {
    newProducts(
      {
        name: data.name,
        price: data.price,
        description: data.description,
        barcode: '',
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
    updateProducts(
      {
        name: data.name,
        price: data.price,
        description: data.description,
        barcode: rowSelected?.barcode,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container full-height">
      <div className="full-height mx-2">
        <div className="flex flex-column md:flex-row">
          <div className="col-12 md:col-6 pb-0">
            <label className="font-bold">{productsI18n.product + '*'}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.name,
              })}
              placeholder={productsI18n.product}
              id="name"
              {...register('name', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.name} />
          </div>
          <div className="col-12 md:col-6 pb-0">
            <label className="font-bold">{productsI18n.price + '*'}</label>
            <InputText
              className={classNames('w-full my-1', {
                'p-invalid': errors.price,
              })}
              placeholder={productsI18n.price}
              keyfilter="money"
              id="price"
              {...register('price', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.price} />
          </div>
        </div>
        <div className="flex flex-column md:flex-row">
          <div className="col-12">
            <label className="font-bold">{productsI18n.description + '*'}</label>
            <InputTextarea
              className={classNames('w-full my-1', {
                'p-invalid': errors.description,
              })}
              placeholder={productsI18n.description}
              autoResize
              id="description"
              {...register('description', {
                required: true,
              })}
            />
            <ErrorMessageComponent errors={errors.description} />
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
