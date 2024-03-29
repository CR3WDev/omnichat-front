// OrdersPage.tsx
import { listProduct } from '@utils/mock/products';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { Crud } from './components';

export const OrdersPage = () => {
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
        <Crud.CreateButton onCreate={handleCreate} />
      </Card>
      <Crud.ProductTable
        products={listProduct}
        currentPage={0}
        rowsPerPage={20}
        totalRecords={listProduct.length}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
        onPageChange={(event) => console.log('Página alterada:', event)}
      >
        <Column field="name" header="Name" />
      </Crud.ProductTable>

  </Crud.Root>
  );
};


