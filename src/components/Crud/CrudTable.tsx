import { setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { confirmDialog } from 'primereact/confirmdialog'
import { DataTable } from 'primereact/datatable'
import { Paginator } from 'primereact/paginator'
import { ReactNode } from 'react'
import { MdClose, MdCreate, MdVisibility } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { IColumnType } from 'types/column'
import { IMode } from 'types/mode'
import { CrudTableActions } from './CrudTableActions'

type CrudTableProps = {
  children?: ReactNode
  data: any[]
  cols: IColumnType[]
  currentPage: number
  rowsPerPage: number
  totalRecords: number
  onDelete?: () => void
  actions?: IMode[]
  onPageChange: (event: { first: number; rows: number }) => void
}

export const CrudTable = ({
  data,
  cols,
  children,
  currentPage,
  rowsPerPage,
  onDelete,
  actions,
  totalRecords,
  onPageChange,
}: CrudTableProps) => {
  const dispatch = useDispatch()
  const handleDefaultDelete = () => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept: onDelete,
      reject: () => {},
    })
  }
  const handleDefaultEdit = () => {
    dispatch(setMode('edit'))
  }
  const handleDefaultView = () => {}

  const defaultActions = () => {
    const showEdit = !actions ? true : actions?.includes('edit')
    const showDelete = !actions ? true : actions?.includes('delete')
    const showView = !actions ? false : actions?.includes('view')

    return (
      <CrudTableActions>
        <>
          {showView && (
            <div>
              <Button text onClick={handleDefaultView}>
                <MdVisibility className="mr-2" size="20" /> Visualizar
              </Button>
            </div>
          )}
          {showEdit && (
            <div>
              <Button text severity="secondary" onClick={handleDefaultEdit}>
                <MdCreate className="mr-2" size="20" />
                Editar
              </Button>
            </div>
          )}
          {showDelete && (
            <div>
              <Button text severity="danger" onClick={handleDefaultDelete}>
                <MdClose className="mr-2" size="20" /> Deletar
              </Button>
            </div>
          )}
        </>
      </CrudTableActions>
    )
  }
  return (
    <div className="m-3">
      <DataTable value={data}>
        {cols.map((col) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
        <Column
          field="actions"
          header="Ações"
          headerClassName="flex justify-content-center"
          body={children ? children : defaultActions}
        />
      </DataTable>
      <Paginator
        first={currentPage * rowsPerPage}
        rows={rowsPerPage}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        rowsPerPageOptions={[10, 20, 30]}
        className="custom-paginator mt-3"
      />
    </div>
  )
}
