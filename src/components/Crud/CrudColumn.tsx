import { Column } from 'primereact/column';
import { ActionType } from 'types/crudactions';
import { Crud } from '.';

export type ButtonColor = "secondary" | "success" | "info" | "warning" | "danger" | "help";

interface CrudColumnProps {
  actions: ActionType[];
}

export const CrudColumn = ({ actions }:CrudColumnProps) => {
  return (
    <>
      <Column
        field="actions"
        header="Ações"
        headerClassName="flex justify-content-center"
        body={<Crud.TableActions actions={actions} />}
        className="actions-column"
      />
    </>
  );
};


