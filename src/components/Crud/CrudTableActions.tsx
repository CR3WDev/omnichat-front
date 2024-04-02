import { Button } from 'primereact/button';
import { ActionType } from 'types/crudactions';

interface CrudActionsProps {
  actions: ActionType[];
}

export const CrudTableActions = ({ actions }: CrudActionsProps) => {
  return (
    <div className="flex justify-content-center">
      {actions.map((action, index) => (
        <div key={index}>
          <Button text onClick={action.onClick} severity={action.severity}>
            {action.icon}
            {action.label}
          </Button>
        </div>
      ))}
    </div>
  );
};
