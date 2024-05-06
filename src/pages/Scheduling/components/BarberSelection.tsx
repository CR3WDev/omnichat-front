// BarberSelection.tsx
import { Dropdown } from 'primereact/dropdown';
import React from 'react';
import { Barber } from '../../../types/barber';

interface Props {
  barbers: Barber[];
  selectedBarber: Barber | null;
  setSelectedBarber: (barber: Barber | null) => void;
  setSelectedService: (service: string | null) => void;
}

export const BarberSelection: React.FC<Props> = ({ barbers, selectedBarber, setSelectedBarber, setSelectedService }:Props) => {
  return (
    <div className='flex w-full flex-column'>
      <h3>Barbeiros</h3>
      <Dropdown
        placeholder='Selecione um barbeiro'
        options={barbers.map(barber => barber.name)}
        value={selectedBarber ? selectedBarber.name : null}
        onChange={(e) => {
          const selectedBarberName = e.value;
          const barber = barbers.find(barber => barber.name === selectedBarberName);
          setSelectedBarber(barber || null);
          setSelectedService(null);
        }}
      ></Dropdown>
    </div>
  );
};


