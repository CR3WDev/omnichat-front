// DateSelection.tsx
import { Calendar } from 'primereact/calendar';

interface Props {
  date: Date | null;
  handleDateClick: (event: any) => void;
}

export const DateSelection = ({ date, handleDateClick }:Props) => {
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
      />
    </div>
  );
};

