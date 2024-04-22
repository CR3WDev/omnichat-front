import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
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
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: 'Cabelo e Barba Marcelo', date: '2024-04-22', start: '2024-04-23T15:30:00' },
            { title: 'Cabelo Davi', date: '2024-04-23', start: '2024-04-23T14:30:00' },
          ]}
        />
      </div>
    </div>
  )
}
