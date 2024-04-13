import 'primeflex/primeflex.css';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
interface DataItem {
    plataforma: string;
    name: string;
    time: string;
    price: number;
}

export const DashboardDataView = () => {
    // Dados de exemplo
    const data: DataItem[] = [
        { plataforma: 'Instagram', name: 'Matheus', time: '10:00', price: 10.99 },
        { plataforma: 'Telegram', name: 'Marcelo', time: '11:30', price: 5.99 },
        { plataforma: 'Telegram', name: 'Lucas', time: '11:30', price: 5.99 },
        { plataforma: 'Whatzapp', name: 'Davi', time: '12:45', price: 8.49 },
        { plataforma: 'Whatzapp', name: 'Clementine', time: '12:45', price: 8.49 },

    ];

    return (
        <div >
            <div className='w-full'>
                <DataTable value={data}>
                    <Column field="plataforma" headerStyle={{ display: 'none' }} />
                    <Column field="name" headerStyle={{ display: 'none' }} />
                    <Column field="time" headerStyle={{ display: 'none' }} />
                    <Column field="price" headerStyle={{ display: 'none' }} />
                </DataTable>
            </div>
        </div>
    );
};


