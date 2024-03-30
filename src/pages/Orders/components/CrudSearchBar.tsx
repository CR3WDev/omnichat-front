
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

interface CrudSearchBarProps {
  buttonOnClick?: () => void;
}

export const CrudSearchBar = ({buttonOnClick}:CrudSearchBarProps) => {
  return (
    <Card className="m-3">
      <div>
        <h3 className="m-0 mb-3">Pesquisar</h3>
      </div>
      <div className="flex">
        <div>
          <InputText placeholder="Pesquisar">Pesquisar</InputText>
        </div>
        <div className="ml-3">
          <Button onClick={buttonOnClick}>Pesquisar</Button>
        </div>
      </div>
    </Card>
  );
};


