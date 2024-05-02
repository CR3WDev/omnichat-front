import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Divider } from 'primereact/divider'
import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react'
import { SchedulingConfirmDialog } from './components/SchedulingConfirmDialog'

export const SchedulingPage = () => {
  const [date, setDate] = useState(null)
  const schedulingList = ['10:00', '10:30', '11:30']
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className="text-center">
        <h1>Agendamento</h1>
        {/* <Card>
        <h2>Raveth - Barbearia</h2>
      </Card> */}
        <Divider></Divider>
        <div className="flex">
          <Dropdown options={['junin', 'marcelo']}></Dropdown>
          <div className="card flex justify-content-center mr-2">
            <Calendar
              value={date}
              onChange={(e: any) => setDate(e.value)}
              inline
              showWeek
              panelStyle={{ border: 0 }}
            />
          </div>
          <Divider layout="vertical" />
          <div>
            <div>
              <h4>Horários</h4>
            </div>
            <div className="flex flex-column">
              {schedulingList.map((scheduling: string, index: number) => {
                return (
                  <div className="mb-2">
                    <Button
                      label={scheduling}
                      severity="secondary"
                      onClick={() => {
                        setIsVisible(true)
                      }}
                      text
                      raised
                      style={{ width: '300px' }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <SchedulingConfirmDialog setIsVisible={setIsVisible} isVisible={isVisible} />
    </>
  )
}
