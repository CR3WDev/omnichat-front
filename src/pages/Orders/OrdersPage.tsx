import { listProduct } from '@utils/mock/products'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import { Paginator } from 'primereact/paginator'
import { MdAdd, MdCreate, MdDelete, MdVisibility } from 'react-icons/md'

export const OrdersPage = () => {
  return (
    <div className="page-container flex flex-column">
      <h2 className="mx-3 mt-3 m-0">Cadastro de Cardápio</h2>
      <Card className="m-3">
        <div>
          <h3 className="m-0 mb-3">Pesquisar</h3>
        </div>
        <div className="flex">
          <div>
            <InputText placeholder="Pesquisar">Pesquisar</InputText>
          </div>
          <div className="ml-3">
            <Button>Pesquisar</Button>
          </div>
        </div>
      </Card>
      <Card className="m-3">
        <Button>
          Cadastrar <MdAdd className="ml-2" />
        </Button>
      </Card>
      <div className="m-3">
        <DataTable value={listProduct}>
          <Column field="name" header="Nome"></Column>
          <Column
            field="actions"
            header="Ações"
            headerClassName="flex justify-content-center"
            body={
              <div className="flex justify-content-center">
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
              </div>
            }
          ></Column>
        </DataTable>
        <Paginator
          first={5}
          rows={20}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={() => {
            console.log('oi')
          }}
        />
      </div>
    </div>
  )
}
