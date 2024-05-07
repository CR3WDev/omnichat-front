import { barbers } from '@utils/mock';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { useEffect, useState } from 'react';
import { Barber } from 'types/barber';
import { AvailableTimes } from './components/AvailableTimes';
import { BarberSelection } from './components/BarberSelection';
import ConfirmationDialog from './components/ComfirmationDialog';
import { DateSelection } from './components/DateSelection';
import { ServiceSelection } from './components/ServiceSelection';



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

  const handleServiceChange = (selectedService: string | null) => {
    setSelectedService(selectedService);
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



  return (
    <>
    <div className="text-center flex w-screen h-screen flex-column justify-content-start align-items-center">
      <h1>Agendamento</h1>
      <div>
        <Divider></Divider>
        <div className="flex">
          <div className='flex flex-column'>
            <div>
              <h2>Barbearia Carecas Unidos</h2>
            </div>
            <BarberSelection
              barbers={barbers}
              selectedBarber={selectedBarber}
              setSelectedBarber={setSelectedBarber}
              setSelectedService={setSelectedService}
            />
            <ServiceSelection
              selectedBarber={selectedBarber}
              selectedService={selectedService}
              setSelectedService={handleServiceChange}
            />
            <div className='flex align-items-center w-full flex-row'>
              <Checkbox style={{ transform: 'scale(1.25)' }} onChange={(e) => setChecked(e.checked ?? false)} checked={checked}>Serviço</Checkbox>
              <h4 className="ml-2">Mostrar Apenas os Horários Disponíveis </h4>
            </div>
          </div>
          <Divider layout='vertical'></Divider>
          {selectedService ? (
            <div>
              <h2>Selecione a Data</h2>
              <DateSelection
                barberSchedule={selectedBarber ? selectedBarber.workingHours : {}}
                date={date}
                handleDateClick={handleDateClick}
              />
            </div>
          ) : (
            <div className="card flex justify-content-center mr-2">
              <h2 className="text-center">Por favor, selecione um barbeiro e o serviço.</h2>
            </div>
          )}
          <Divider layout="vertical" />
          {selectedDate ? (
          <>
            <AvailableTimes
              availableTimes={availableTimes}
              selectedDate={selectedDate}
              checked={checked}
              bookedTimes={bookedTimes}
              handleTimeClick={handleTimeClick}
            />
          </>
          ) : null
        }

        </div>
      </div>
    </div>
    <ConfirmationDialog
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      handleConfirmDialogClose={handleConfirmDialogClose}
      selectedBarber={selectedBarber}
      selectedService={selectedService}
      selectedTime={selectedTime}
      selectedDate={selectedDate}
      barbers={barbers}
    />
  </>
  );
};
