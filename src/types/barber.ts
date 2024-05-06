export interface Barber {
  name: string;
  services: string[];
  workingHours: { [key: string]: { start: string; end: string } }; // Horários de trabalho para cada dia da semana
}
