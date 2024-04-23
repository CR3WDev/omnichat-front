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
  columns: IColumnType[]
  setRowSelected: Dispatch<SetStateAction<any>>
  setTableConfig: Dispatch<SetStateAction<ITableConfig>>
  tableConfig: ITableConfig
  totalRecords: number
  onDelete?: (rowSelected: any) => void
  actions?: IMode[]
}

export const CrudTable = ({
  data,
  columns,
  children,
  tableConfig,
  setRowSelected,
  setTableConfig,
  onDelete,
  actions,
  totalRecords,
}: CrudTableProps) => {
  const customColumns = (column: IColumnType) => {
    switch (column?.type) {
      case 'currency': {
        return (
          <Column
            key={column.field}
            field={column.field}
            className="p-2"
            sortable
            header={column.header}
            body={(e: any) => {
              return useFormatCurrency(e[column.field]) || ''
            }}
          />
        )
      }
      default: {
        return (
          <Column
            key={column.field}
            field={column.field}
            header={column.header}
            sortable
            className="p-2"
          />
        )
      }
    }
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
        first: 0,
        page: 0,
        pageCount: 1,
      }
    })
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
          {columns.map((col) => {
            return customColumns(col)
          })}
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
