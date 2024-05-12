import { ReactElement } from 'react'
import { MdBarChart, MdCalendarMonth, MdGroup, MdMessage, MdViewList } from 'react-icons/md'

export interface IMenuOption {
  label: string
  to: string
  icon?: ReactElement
}
export const menuOptions: IMenuOption[] = [
  {
    label: 'Chat',
    to: '/chat',
    icon: <MdMessage size="20" className="mr-2" />,
  },
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: <MdBarChart size="20" className="mr-2" />,
  },
  {
    label: 'Produtos',
    to: '/products',
    icon: <MdViewList size="20" className="mr-2" />,
  },
  {
    label: 'Usuários',
    to: '/users',
    icon: <MdGroup size="20" className="mr-2" />,
  },
  {
    label: 'Agendamentos',
    to: '/calendar',
    icon: <MdCalendarMonth size="20" className="mr-2" />,
  },
]
