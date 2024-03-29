
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { ReactNode } from 'react';
import { Product } from 'types/products';
import { ProductActions } from './ProductActions';

interface ProductTableProps {
  children: ReactNode;
  products: Product[];
  currentPage: number;
  rowsPerPage: number;
  totalRecords: number;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onPageChange: (event: { first: number, rows: number }) => void;
}

export const ProductTable = ({children,products,
  currentPage,
  rowsPerPage,
  totalRecords,
  onView,
  onEdit,
  onDelete,
  onPageChange}:ProductTableProps) => {
  return (
    <div className="m-3">
    <DataTable value={products} >
      {children}
      <Column
        field="actions"
        header="Ações"
        headerClassName="flex justify-content-center"
        body={<ProductActions onEdit={onEdit} onView={onView} onDelete={onDelete} />}
        className="actions-column"
      ></Column>
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


