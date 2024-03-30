
import { Button } from 'primereact/button';
import { MdAdd } from 'react-icons/md';

interface CrudButtonProps {
  onCreate: () => void;
}

export const CrudButton = ({ onCreate }:CrudButtonProps) => {

  return (
    <Button onClick={onCreate}>
      Cadastrar <MdAdd className="ml-2" />
    </Button>
  );
};


