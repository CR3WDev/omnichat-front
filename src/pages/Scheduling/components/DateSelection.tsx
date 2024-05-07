// DateSelection.tsx
import { Calendar } from 'primereact/calendar';

interface WorkingHours {
  [day: string]: { start: string, end: string };
}


interface Props {
  barberSchedule: { [key: string]: { start: string; end: string } };
  date: Date | null;
  handleDateClick: (event: any) => void;
}


export const DateSelection = ({ date, handleDateClick, barberSchedule }: Props) => {
  // Função para obter os dias de folga do barbeiro
  const getBarberOffDays = (): Date[] => {
    const offDays: Date[] = [];
    const year = new Date().getFullYear();

    for (const day in barberSchedule) {
      if (barberSchedule.hasOwnProperty(day)) {
        if (!barberSchedule[day].start || !barberSchedule[day].end) {
          // Se o dia não tem horário de início ou término, é um dia de folga
          const nextDay = getNextDayByName(day, year);
          while (nextDay.getFullYear() === year) {
            offDays.push(new Date(nextDay));
            nextDay.setDate(nextDay.getDate() + 7); // Avança para o próximo domingo
          }
        }
      }
    }
    return offDays;
  };

  // Função para obter a próxima data de um determinado dia da semana
  const getNextDayByName = (dayName: string, year: number): Date => {
    const today = new Date();
    const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(dayName);
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + ((7 + dayIndex - today.getDay()) % 7));

    // Se a data está no ano anterior, avança para o próximo ano
    if (nextDay.getFullYear() !== year) {
      nextDay.setFullYear(year);
      nextDay.setDate(nextDay.getDate() + 7);
    }

    return nextDay;
  };

  // Obtém os dias de folga do barbeiro para todo o ano
  const barberOffDays = getBarberOffDays();

  console.log("Dias de folga do barbeiro:", barberOffDays);

  return (
    <div>
      <Calendar
        value={date}
        onChange={handleDateClick}
        inline
        locale='pt'
        minDate={new Date()}
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
        yearNavigator={false}
        panelStyle={{ border: 0 }}
        style={{ maxHeight: '480px' }}
        // Desabilitar dias de folga do barbeiro
        disabledDates={barberOffDays}
      />
    </div>
  );
};
