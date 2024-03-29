// CreateProductForm.tsx
import { Button } from 'primereact/button';
import { MdAdd } from 'react-icons/md';

interface CreateButtonProps {
  onCreate: () => void;
}

export const CreateButton = ({ onCreate }:CreateButtonProps) => {

  return (
    <Button onClick={onCreate}>
      Cadastrar <MdAdd className="ml-2" />
    </Button>
  );
};


