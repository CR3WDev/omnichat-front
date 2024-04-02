import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { ReactNode } from 'react';
import { ColumnType } from 'types/column';

interface CrudTableProps<T extends object> {
  children?: ReactNode;
  data: T[];
  cols: ColumnType[];
  currentPage: number;
  rowsPerPage: number;
  totalRecords: number;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onPageChange: (event: { first: number, rows: number }) => void;
}

export const CrudTable = <T extends object>({
  data,
  cols,
  children,
  currentPage,
  rowsPerPage,
  totalRecords,
  onPageChange,
}: CrudTableProps<T>) => {
  return (
    <div className="m-3">
      <DataTable value={data}>
        {cols.map(col => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
         <Column
          field="actions"
          header="Ações"
          headerClassName="flex justify-content-center"
          body={children}
          />
      </DataTable>
      <Paginator
        first={currentPage * rowsPerPage}
        rows={rowsPerPage}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        rowsPerPageOptions={[10, 20, 30]}
        className="custom-paginator"
      />
    </div>
  );
};
