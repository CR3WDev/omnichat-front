import { selectorTheme } from '@redux/Reducers/themeReducer'
import { useSelector } from 'react-redux'

export const CalendarPage = () => {
  const theme = useSelector(selectorTheme)

  return (
    <div className="page-container">
      <h2 className="mx-3 mt-3 m-0">Módulo de Calendário</h2>
      <div
        style={{ borderColor: 'var(--surface-400)' }}
        className={`m-3 p-3 border-round-lg ${theme === 'light' && 'border-1'} `}
      >
        {/* <FullCalendar
          locale="pt-br"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="listWeek"
          weekends={true}
          events={[
            { title: 'Cabelo e Barba Marcelo', date: '2024-04-22', start: '2024-04-23T15:30:00' },
            { title: 'Cabelo Davi', date: '2024-04-23', start: '2024-04-23T14:30:00' },
            { title: 'Corte Clássico José', date: '2024-04-26', start: '2024-04-26T10:00:00' },
            { title: 'Barba Detalhada Carlos', date: '2024-04-26', start: '2024-04-26T11:00:00' },
            { title: 'Corte e Lavagem Pedro', date: '2024-04-26', start: '2024-04-26T12:00:00' },
            {
              title: 'Hidratação de Barba Thiago',
              date: '2024-04-26',
              start: '2024-04-26T13:00:00',
            },
            { title: 'Cabelo Estilizado Lucas', date: '2024-04-27', start: '2024-04-27T09:30:00' },
            {
              title: 'Barba e Sobrancelha Felipe',
              date: '2024-04-27',
              start: '2024-04-27T10:30:00',
            },
            {
              title: 'Cabelo e Barba Renovação Alex',
              date: '2024-04-27',
              start: '2024-04-27T11:30:00',
            },
            {
              title: 'Tintura de Cabelo e Barba Marco',
              date: '2024-04-27',
              start: '2024-04-27T15:00:00',
            },
          ]}
        /> */}
      </div>
    </div>
  )
}
