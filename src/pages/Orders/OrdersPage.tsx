// OrdersPage.tsx
import { getI18n } from '@hooks/useGetI18n';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { MdCreate, MdDelete, MdVisibility } from 'react-icons/md';
import { Crud } from '../../components/Crud';

export const OrdersPage = () => {
  const orderI18n = getI18n('order')
  const actions = [
    {
      onClick: () => {  console.log("Produto visto!");},
      icon: <MdVisibility className="mr-2" size="20" />,
      severity: "info",
      label: "Visualizar"
    },
    {
      onClick: () => {
        console.log("Produto editado!");
      },
      icon: <MdCreate className="mr-2" size="20" />,
      severity: "secondary",
      label: "Editar"
    },
    {
      onClick: () => {
        console.log("Produto deletado!");
      },
      icon: <MdDelete className="mr-2" size="20" />,
      severity: 'danger',
      label: "Deletar"
    }
  ];

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
        <Column
          field="actions"
          header={orderI18n.actions}
          headerClassName="flex justify-content-center"
          body={<Crud.TableActions actions={actions} />}

        />
      </Crud.Table>

  </Crud.Root>
  );
};


