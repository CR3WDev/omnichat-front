// AvailableTimes.tsx
import { Button } from 'primereact/button';

interface Props {
  availableTimes: string[];
  selectedDate: Date | null;
  checked: boolean;
  bookedTimes: string[];
  handleTimeClick: (time: string) => void;
}

export const AvailableTimes= ({ availableTimes, selectedDate, checked, bookedTimes, handleTimeClick }:Props) => {
  return (
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
  );
};
