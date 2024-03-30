// OrdersPage.tsx
import { Card } from 'primereact/card';
import { Crud } from './components';

export const OrdersPage = () => {

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
  const onEdit = () => {
    console.log("Produto editado!");
  };
  const onDelete = () => {
    console.log("Produto deletado!");
  };
  const onView = () => {
    console.log("Produto visto!");
  };


  return (
   <Crud.Root title='Cadastro de Cardapios'>
      <Crud.SearchBar />
      <Card className="m-3">
        <Crud.Button onCreate={handleCreate} />
      </Card>
      <Crud.Table
        data={cars}
        cols={cols}
        currentPage={0}
        rowsPerPage={20}
        totalRecords={cars.length}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
        onPageChange={(event) => console.log('Página alterada:', event)}
      >

      </Crud.Table>

  </Crud.Root>
  );
};


