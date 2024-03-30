import { Column } from 'primereact/column';
import { ColumnType } from 'types/column';
import { Crud } from '.';


interface CrudColumnProps {
  cols: ColumnType[];
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
}

export const CrudColumn = ({ cols, onEdit, onView, onDelete }:CrudColumnProps) => {
  return (
    <>
      {cols.map(col => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
      <Column
        field="actions"
        header="Ações"
        headerClassName="flex justify-content-center"
        body={<Crud.TableActions onEdit={onEdit} onView={onView} onDelete={onDelete} />}
        className="actions-column"
      />
    </>
  );
};


