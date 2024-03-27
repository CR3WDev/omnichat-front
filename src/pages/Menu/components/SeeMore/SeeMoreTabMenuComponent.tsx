import { getI18n } from '@hooks/useGetI18n'
import { MenuItem } from 'primereact/menuitem'
import { TabMenu } from 'primereact/tabmenu'
import { useState } from 'react'
import { AboutComponent } from './SeeMoreAboutComponent'
import { PaymentComponent } from './SeeMorePaymentComponent'
import { ScheduleComponent } from './SeeMoreScheduleComponent'

export const TabMenuComponent = () => {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null)
  const menuI18n = getI18n('menu')

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
      label: 'Pagamentos',
      command: () => {
        setActiveItem(items[2])
      },
    },
  ]

  return (
    <div className="flex w-full justify-content-center flex-wrap">
      <TabMenu className="w-19rem" model={items} />
      <div className="px-5">
        {activeItem?.label == menuI18n.about && <AboutComponent />}
        {activeItem?.label == menuI18n.schedule && <ScheduleComponent />}
        {activeItem?.label == menuI18n.payment && <PaymentComponent />}
        {!activeItem && <AboutComponent />}
      </div>
    </div>
  )
}
