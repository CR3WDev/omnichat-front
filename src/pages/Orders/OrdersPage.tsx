// OrdersPage.tsx
import { getI18n } from '@hooks/useGetI18n';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { MdCreate, MdDelete, MdVisibility } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Crud } from '../../components/Crud';

export const OrdersPage = () => {
  const orderI18n = getI18n('order')



  const cols = [
    { field: 'id', header: 'ID' },
    { field: 'marca', header: 'Marca' },
    { field: 'modelo', header: 'Modelo' },
    { field: 'ano', header: 'Ano' }
];
const cars = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2022 },
  { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2021 },
  { id: 3, marca: 'Ford', modelo: 'Focus', ano: 2020 }
];

  const handleCreate = () => {
    console.log("Produto criado!");
  };

  return (
   <Crud.Root title={orderI18n.title}>
      <Crud.SearchBar columns={cols} useDropdown />
      <Card className="m-3">
        <Crud.Button onCreate={handleCreate} />
      </Card>
      <Crud.Table
        data={cars}
        cols={cols}
        currentPage={0}
        rowsPerPage={20}
        totalRecords={cars.length}
        onPageChange={(event) => console.log('Página alterada:', event)}
      >
        <Crud.TableActions>
          <div>
            <Button text>
              <MdVisibility className="mr-2" size="20" /> Visualizar
            </Button>
          </div>
          <div>
            <Button text severity="secondary">
              <MdCreate className="mr-2" size="20" /> Editar
            </Button>
          </div>
          <div>
            <Button text severity="danger">
              <MdDelete className="mr-2" size="20" /> Deletar
            </Button>
          </div>
        </Crud.TableActions>
      </Crud.Table>

  </Crud.Root>
  );
};


