
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export const CustomDropdown = () => {
  const options = [
    {label: 'Semanal',value: 'semanal'},
    {label: 'Mensal',value: 'mensal'},
    {label: 'Anual',value: 'anual'},
];

  const [selectedOption, setSelectedOption] = useState<any>('semanal'); // Estado para armazenar a opção selecionada

  const handleOptionChange = (e: { value: any }) => {
    setSelectedOption(e.value);
  };

  return (
    <Dropdown
      value={selectedOption}
      options={options}
      onChange={(e) => handleOptionChange(e)} // Corrigindo o tipo de evento
      className='h-2rem bg-primary d-rounded mb-2'
    />
  );
};
