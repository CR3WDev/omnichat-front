import { useFormatCurrency } from '@hooks/useFormatCurrency'
import { getI18n } from '@hooks/useGetI18n'
import { Column } from 'primereact/column'
import { DataTable, DataTablePageEvent, DataTableSortEvent } from 'primereact/datatable'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { IColumnType } from 'types/column'
import { IMode } from 'types/mode'
import { ITableConfig } from 'types/tableConfig'
import { CrudTableDefaultActions } from './CrudTableDefaultActions'

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
            body={(rowSelected) =>
              children ? (
                children
              ) : (
                <CrudTableDefaultActions
                  actions={actions}
                  onDelete={onDelete}
                  rowSelected={rowSelected}
                  setRowSelected={setRowSelected}
                />
              )
            }
          />
        </DataTable>
      </div>
    </div>
  )
}
