import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { useState } from 'react';

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onClose: (confirmed: boolean) => void;
  selectedBarber: Barber | null;
  selectedService: string | null;
  selectedTime: string | null;
  selectedDate: Date | null;
  barbers: Barber[];
}

interface Barber {
  name: string;
  services: string[];
  workingHours: { [key: string]: { start: string; end: string } };
}

export const SchedulingConfirmDialog: React.FC<Props> = ({ isVisible, setIsVisible, onClose, selectedBarber, selectedService, selectedTime, selectedDate, barbers }: Props) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(selectedService ? [selectedService] : []);

  const handleServiceChange = (e: any) => {
    const services = e.value;
    setSelectedServices(services);
  };

  // Função para formatar a data como string no formato desejado
  const formatDate = (date: Date | null) => {
    return date ? new Date(date).toLocaleDateString('pt-BR') : ''; // Formata a data como string no formato dd/mm/aaaa
  };

  return (
    <Dialog
      visible={isVisible}
      onHide={() => {
        setIsVisible(false);
        onClose(false);
      }}
      header="Confirmação de Agendamento"
      modal
      draggable={false}
      style={{ width: '400px' }}
      footer={
        <div>
          <button className="p-button p-button-text" onClick={() => onClose(false)}>Cancelar</button>
          <button className="p-button p-button-primary" onClick={() => onClose(true)}>Confirmar</button>
        </div>
      }
    >
      <div id='menuBarbeiro' className='flex flex-column'>
        <div>
          {/* Utiliza a função formatDate para exibir a data formatada */}
          <h3>Horário selecionado com {selectedBarber?.name} às {selectedTime} no dia {formatDate(selectedDate)}</h3>
        </div>
        <div className='flex w-full flex-column'>
          <h3>Barbeiros</h3>
          <Dropdown
            placeholder='Selecione um barbeiro'
            options={barbers.map(barber => barber.name)}
            value={selectedBarber ? selectedBarber.name : null}
            disabled
            onChange={(e) => {
              const selectedBarberName = e.value;
              const barber = barbers.find(barber => barber.name === selectedBarberName);
            }}
          ></Dropdown>
        </div>
        <div className='flex w-full flex-column'>
          <h3>Serviço</h3>
          <MultiSelect
            placeholder='Selecione um serviço'
            options={selectedBarber ? selectedBarber.services : []}
            value={selectedService}
            onChange={handleServiceChange}
            display="chip"
            disabled
            selectAllLabel="Selecionar Todos"
          ></MultiSelect>
        </div>
      </div>
    </Dialog>
  );
};
