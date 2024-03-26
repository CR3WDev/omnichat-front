import { MenuItem } from 'primereact/menuitem'
import { TabMenu } from 'primereact/tabmenu'
import { useState } from 'react'
import AboutComponent from './AboutComponent'
import PaymentComponent from './PaymentComponent'
import ScheduleComponent from './ScheduleComponent'

export const TabMenuComponent = () => {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)

  const items: MenuItem[] = [
    {
      label: 'Sobre',
      command: () => {
        setActiveItem(items[0])
      },
    },
    {
      label: 'Horário',
      command: () => {
        setActiveItem(items[1])
      },
    },
    {
      label: 'Pagamento',
      command: () => {
        setActiveItem(items[2])
      },
    },
  ]

  return (
    <div className="flex w-full justify-content-center flex-wrap">
      <TabMenu className="w-17rem" model={items} />
      <div className="px-5">
        {activeItem?.label === 'Sobre' && <AboutComponent />}
        {activeItem?.label === 'Horário' && <ScheduleComponent />}
        {activeItem?.label === 'Pagamento' && <PaymentComponent />}
        {!activeItem && <AboutComponent />}
      </div>
    </div>
  )
}
