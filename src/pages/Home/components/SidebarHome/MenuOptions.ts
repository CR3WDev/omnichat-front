export interface IMenuOption {
  label: string
  to: string
}
export const menuOptions: IMenuOption[] = [
  {
    label: 'Chat',
    to: '/chat',
  },
  {
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    label: 'Pedidos',
    to: '/orders',
  },
]
