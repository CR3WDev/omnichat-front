import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { useEffect, useState } from 'react';
import { SchedulingConfirmDialog } from './components/SchedulingConfirmDialog';

interface Barber {
  name: string;
  services: string[];
  workingHours: { [key: string]: { start: string; end: string } }; // Horários de trabalho para cada dia da semana
}

export const SchedulingPage = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]); // Lista de horários marcados

  const barbers: Barber[] = [
    {
      name: 'junin',
      services: ['Corte', 'Barba'],
      workingHours: {
        Monday: { start: '08:00', end: '16:00' },
        Tuesday: { start: '08:30', end: '17:00' },
        Wednesday: { start: '09:00', end: '16:30' },
        Thursday: { start: '08:00', end: '16:00' },
        Friday: { start: '08:30', end: '17:00' },
        Saturday: { start: '10:00', end: '15:30' },
        Sunday: { start: '', end: '' }, // Domingo não trabalha
      },
    },
    {
      name: 'marcelo',
      services: ['Corte', 'Sobrancelha'],
      workingHours: {
        Monday: { start: '09:00', end: '17:00' },
        Tuesday: { start: '09:30', end: '17:30' },
        Wednesday: { start: '08:00', end: '15:30' },
        Thursday: { start: '09:00', end: '17:00' },
        Friday: { start: '09:30', end: '17:30' },
        Saturday: { start: '10:00', end: '15:30' },
        Sunday: { start: '', end: '' }, // Domingo não trabalha
      },
    },
  ];

  useEffect(() => {
    if (date && selectedBarber) {
      const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
      const workingHours = selectedBarber.workingHours[dayOfWeek];
      if (workingHours.start && workingHours.end) {
        const startTime = new Date(date);
        startTime.setHours(Number(workingHours.start.split(':')[0]), Number(workingHours.start.split(':')[1]));

        const endTime = new Date(date);
        endTime.setHours(Number(workingHours.end.split(':')[0]), Number(workingHours.end.split(':')[1]));

        const availableTimesForDay: string[] = [];

        while (startTime < endTime) {
          availableTimesForDay.push(`${String(startTime.getHours()).padStart(2, '0')}:${String(startTime.getMinutes()).padStart(2, '0')}`);
          startTime.setMinutes(startTime.getMinutes() + 30); // Adiciona 30 minutos ao horário
        }

        setAvailableTimes(availableTimesForDay);
      } else {
        setAvailableTimes([]);
      }
    }
  }, [date, selectedBarber]);

  const handleServiceChange = (e: any) => {
    const service = e.value;
    setSelectedService(service);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setIsVisible(true);
  };

  const handleDateClick = (event: any) => {
    setDate(event.value);
    setSelectedDate(event.value);
  };

  const handleConfirmDialogClose = (confirmed: boolean) => {
    setIsVisible(false);
    if (confirmed) {
      // implementar a lógica para salvar o agendamento
      if (selectedBarber && selectedService && selectedDate && selectedTime) {
        const confirmationDetails = `Barbeiro - ${selectedBarber.name}, Serviço - ${selectedService}, Data - ${selectedDate}, Horário - ${selectedTime}`;
        console.log("Agendamento confirmado:", confirmationDetails);

        // Adiciona o horário marcado à lista de horários marcados
        setBookedTimes(prevTimes => [...prevTimes, `${selectedDate.toDateString()} ${selectedTime}`]);
      }
    }
  };

  return (
    <>
      <div className="text-center flex w-screen h-screen flex-column justify-content-start align-items-center">
        <h1>Agendamento</h1>
        <div>
          <Divider></Divider>
          <div className="flex">
            <div id='menuBarbeiro' className='flex flex-column'>
              <div>
                <h2>Barbearia Carecas Unidos</h2>
              </div>
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
              <div className='flex w-full flex-column'>
                <h3>Serviço</h3>
                <MultiSelect
                  placeholder='Selecione um serviço'
                  options={selectedBarber ? selectedBarber.services : []}
                  value={selectedService}
                  onChange={handleServiceChange}
                  display="chip"
                  disabled={!selectedBarber}
                  selectAllLabel="Selecionar Todos"
                ></MultiSelect>
              </div>
              <div className='flex align-items-center w-full flex-row'>
                <Checkbox style={{ transform: 'scale(1.25)' }} onChange={(e) => setChecked(e.checked ?? false)} checked={checked}>Serviço</Checkbox>
                <h4 className="ml-2">Mostrar Apenas os Horários Disponíveis </h4>
              </div>
            </div>
            <Divider layout='vertical'></Divider>
            {selectedBarber && selectedService ? (
              <>
                <div>
                  <Calendar
                    value={date}
                    onChange={handleDateClick}
                    inline
                    locale='pt'
                    minDate={new Date()}
                    maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))} // Define a data máxima como três meses no futuro
                    yearNavigator={false}
                    yearRange={'2022:2025'}
                    panelStyle={{ border: 0 }}
                    style={{ maxHeight: '480px' }}
                  />
                </div>
              </>
              ) : (
            <div className="card flex justify-content-center mr-2">
              <h2 className="text-center">Por favor, selecione um barbeiro e o serviço.</h2>
            </div>
          )}
            <Divider layout="vertical" />
            <div>
              <div>
                <h2>Horários Disponíveis</h2>
              </div>
              <div className="flex flex-wrap" style={{ width: '300px' }}>
                {availableTimes.map((time, index) => (
                  (!checked || !bookedTimes.includes(`${selectedDate?.toDateString()} ${time}`)) && (
                    <div className="mb-2 ml-2" key={index}>
                      <Button
                        label={time}
                        severity="secondary"
                        onClick={() => handleTimeClick(time)}
                        text
                        raised
                        style={{ width: '140px' }}
                        disabled={bookedTimes.includes(`${selectedDate?.toDateString()} ${time}`)}
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SchedulingConfirmDialog setIsVisible={setIsVisible} isVisible={isVisible} onClose={handleConfirmDialogClose} selectedBarber={selectedBarber} selectedService={selectedService} selectedTime={selectedTime} barbers={barbers} selectedDate={selectedDate} />
    </>
  );
};
