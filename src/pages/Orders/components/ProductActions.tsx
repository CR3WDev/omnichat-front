// ProductActions.tsx
import { Button } from 'primereact/button';
import { MdCreate, MdDelete, MdVisibility } from 'react-icons/md';

interface ProductActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ProductActions= ({onView, onEdit, onDelete}:ProductActionsProps) => {
  return (
    <div className="flex justify-content-center">
      <div>
        <Button text onClick={onView}>
          <MdVisibility className="mr-2" size="20" /> Visualizar
        </Button>
      </div>
      <div>
        <Button text onClick={onEdit} severity="secondary">
          <MdCreate className="mr-2" size="20" /> Editar
        </Button>
      </div>
      <div>
        <Button text onClick={onDelete} severity="danger">
          <MdDelete className="mr-2" size="20" /> Deletar
        </Button>
      </div>
    </div>
  );
};


