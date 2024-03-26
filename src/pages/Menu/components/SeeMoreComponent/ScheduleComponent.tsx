import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

const ScheduleComponent: React.FC = () => {
  const scheduleData = [
    { day: 'Segunda-feira', open: '18:00', close: '23:00' },
    { day: 'Terça-feira', open: '18:00', close: '23:00' },
    { day: 'Quarta-feira', open: '18:00', close: '23:00' },
    { day: 'Quinta-feira', open: '18:00', close: '23:00' },
    { day: 'Sexta-feira', open: '18:00', close: '00:00' },
    { day: 'Sábado', open: '12:00', close: '00:00' },
    { day: 'Domingo', open: '12:00', close: '23:00' }
  ];

  const renderDay = (rowData: any) => {
    return (
      <div className="p-d-flex p-ai-center">
        <span className="p-ml-2">{rowData.day}</span>
      </div>
    );
  };

  const renderTime = (rowData: any) => {
    return (
      <div className="p-d-flex p-ai-center">
        <span className="p-ml-2">{rowData.open} - {rowData.close}</span>
      </div>
    );
  };

  return (
    <Card className='w-20rem'>
      <DataTable value={scheduleData} header="Horário de Funcionamento">
        <Column header="Dia" body={renderDay}></Column>
        <Column header="Horário" body={renderTime}></Column>
      </DataTable>
    </Card>
  );
};

export default ScheduleComponent;
