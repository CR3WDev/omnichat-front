import { getI18n } from '@hooks/useGetI18n'
import { setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { confirmDialog } from 'primereact/confirmdialog'
import { Dispatch, SetStateAction } from 'react'
import { MdClose, MdCreate, MdVisibility } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { IMode } from 'types/mode'
import { CrudTableActions } from '../CrudTableActions'

interface CrudTableDefaultActions {
  rowSelected: any
  actions?: IMode[]
  setRowSelected: Dispatch<SetStateAction<any>>
  onDelete?: (rowSelected: any) => void
}
export const CrudTableDefaultActions = ({
  rowSelected,
  actions,
  setRowSelected,
  onDelete,
}: CrudTableDefaultActions) => {
  const crudI18n = getI18n('crud')
  const dispatch = useDispatch()
  const showEdit = !actions ? true : actions?.includes('edit')
  const showDelete = !actions ? true : actions?.includes('delete')
  const showView = !actions ? false : actions?.includes('view')

  const handleDefaultEdit = (rowSelected: any) => {
    setRowSelected(rowSelected)
    dispatch(setMode('edit'))
  }

  const handleDefaultView = (rowSelected: any) => {
    setRowSelected(rowSelected)
  }

  const handleDefaultDelete = (rowSelected: any) => {
    setRowSelected(rowSelected)
    confirmDialog({
      message: crudI18n.delete_confirmation_message,
      header: crudI18n.delete_confirmation,
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      acceptLabel: getI18n('remove'),
      rejectLabel: getI18n('cancel'),
      accept: () => {
        onDelete && onDelete(rowSelected)
      },
      reject: () => {
        setRowSelected(undefined)
      },
      onHide: () => {
        setRowSelected(undefined)
      },
    })
  }

  return (
    <CrudTableActions>
      <>
        {showView && (
          <div>
            <Button
              text
              onClick={() => {
                handleDefaultView(rowSelected)
              }}
            >
              <MdVisibility className="mr-2" size="20" /> Visualizar
            </Button>
          </div>
        )}
        {showEdit && (
          <div>
            <Button
              text
              severity="secondary"
              onClick={() => {
                handleDefaultEdit(rowSelected)
              }}
            >
              <MdCreate className="mr-2" size="20" />
              Editar
            </Button>
          </div>
        )}
        {showDelete && (
          <div>
            <Button
              text
              severity="danger"
              onClick={() => {
                handleDefaultDelete(rowSelected)
              }}
            >
              <MdClose className="mr-2" size="20" /> Deletar
            </Button>
          </div>
        )}
      </>
    </CrudTableActions>
  )
}
