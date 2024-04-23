import { useFormatCurrency } from '@hooks/useFormatCurrency'
import { getI18n } from '@hooks/useGetI18n'
import { setMode } from '@redux/Reducers/modeReducer'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { confirmDialog } from 'primereact/confirmdialog'
import { DataTable, DataTablePageEvent, DataTableSortEvent } from 'primereact/datatable'
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import { MdClose, MdCreate, MdVisibility } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { IColumnType } from 'types/column'
import { IMode } from 'types/mode'
import { ITableConfig } from 'types/tableConfig'
import { CrudTableActions } from './CrudTableActions'

type CrudTableProps = {
  children?: ReactNode
  data: any[]
  cols: IColumnType[]
  setRowSelected: Dispatch<SetStateAction<any>>
  setTableConfig: Dispatch<SetStateAction<ITableConfig>>
  tableConfig: ITableConfig
  totalRecords: number
  onDelete?: (rowSelected: any) => void
  actions?: IMode[]
}

export const CrudTable = ({
  data,
  cols,
  children,
  tableConfig,
  setRowSelected,
  setTableConfig,
  onDelete,
  actions,
  totalRecords,
}: CrudTableProps) => {
  const dispatch = useDispatch()
  const handleDefaultDelete = (rowSelected: any) => {
    setRowSelected(rowSelected)
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept: () => {
        onDelete && onDelete(rowSelected)
      },
      reject: () => {},
    })
  }
  const onPageChange = (event: DataTablePageEvent) => {
    setTableConfig((prev) => {
      return {
        ...prev,
        rows: event.rows,
        page: event.page,
        pageCount: event.pageCount,
        first: event.first,
      }
    })
  }
  const onSortChange = (event: DataTableSortEvent) => {
    setTableConfig((prev) => {
      return {
        ...prev,
        sortField: event.sortField,
        sortOrder: event.sortOrder,
      }
    })
  }
  const handleDefaultEdit = (rowSelected: any) => {
    setRowSelected(rowSelected)
    dispatch(setMode('edit'))
  }
  const handleDefaultView = (rowSelected: any) => {
    setRowSelected(rowSelected)
  }

  const customCols = (col: any) => {
    switch (col?.type) {
      case 'currency': {
        return (
          <Column
            key={col.key}
            field={col.field}
            className="p-2"
            sortable
            header={col.header}
            body={(e: any) => {
              return useFormatCurrency(e[col.field]) || ''
            }}
          />
        )
      }
      default: {
        return (
          <Column key={col.field} field={col.field} header={col.header} sortable className="p-2" />
        )
      }
    }
  }
  const defaultActions = (rowSelected: any) => {
    const showEdit = !actions ? true : actions?.includes('edit')
    const showDelete = !actions ? true : actions?.includes('delete')
    const showView = !actions ? false : actions?.includes('view')

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

  useEffect(() => {
    console.log({ tableConfig })
  }, [tableConfig])

  return (
    <div className="m-3">
      <div style={{ maxHeight: '700px', overflow: 'hidden' }}>
        <DataTable
          value={data}
          paginator
          rows={tableConfig?.rows}
          first={tableConfig?.first}
          totalRecords={totalRecords}
          lazy
          onSort={onSortChange}
          sortField={tableConfig?.sortField}
          emptyMessage={getI18n('table_empty_message')}
          sortOrder={tableConfig?.sortOrder}
          onPage={onPageChange}
          rowsPerPageOptions={[5, 10, 20]}
        >
          {cols.map((col) => customCols(col))}
          <Column
            field="actions"
            header="Ações"
            className="p-2"
            headerClassName="flex justify-content-center"
            body={(rowSelected) => (children ? children : defaultActions(rowSelected))}
          />
        </DataTable>
      </div>
    </div>
  )
}
