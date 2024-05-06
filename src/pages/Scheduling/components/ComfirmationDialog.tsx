import React from 'react';

import { Barber } from 'types/barber';
import { SchedulingConfirmDialog } from './SchedulingConfirmDialog';

interface Props {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  handleConfirmDialogClose: (confirmed: boolean) => void;
  selectedBarber: Barber | null;
  selectedService: string | null;
  selectedTime: string | null;
  selectedDate: Date | null;
  barbers: Barber[];
}

const ConfirmationDialog: React.FC<Props> = ({ isVisible, setIsVisible, handleConfirmDialogClose, selectedBarber, selectedService, selectedTime, selectedDate, barbers }) => {
  return (
    <SchedulingConfirmDialog
      setIsVisible={setIsVisible}
      isVisible={isVisible}
      onClose={handleConfirmDialogClose}
      selectedBarber={selectedBarber}
      selectedService={selectedService}
      selectedTime={selectedTime}
      barbers={barbers}
      selectedDate={selectedDate}
    />
  );
};

export default ConfirmationDialog;
