import { MultiSelect } from 'primereact/multiselect';
import { Barber } from '../../../types/barber';

interface Props {
  selectedBarber: Barber | null;
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

export const ServiceSelection= ({ selectedBarber, selectedService, setSelectedService }:Props) => {
  return (
    <div className='flex w-full flex-column'>
      <h3>Serviço</h3>
      <MultiSelect
        placeholder='Selecione um serviço'
        options={selectedBarber ? selectedBarber.services.map(service => ({ label: service, value: service })) : []}
        value={selectedService}
        onChange={(e) => setSelectedService(e.value)}
        display="chip"
        disabled={!selectedBarber}
        selectAllLabel="Selecionar Todos"
      ></MultiSelect>
    </div>
  );
};


