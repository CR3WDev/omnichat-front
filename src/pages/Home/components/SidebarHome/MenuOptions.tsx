import { ReactElement } from 'react'
import { MdBarChart, MdMessage, MdReceiptLong, MdViewList } from 'react-icons/md'

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
    label: 'Pedidos',
    to: '/orders',
    icon: <MdReceiptLong size="20" className="mr-2" />,
  },
  {
    label: 'Produtos',
    to: '/products',
    icon: <MdViewList size="20" className="mr-2" />,
  },
]
