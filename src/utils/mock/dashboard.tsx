import { MdCancel, MdCheckCircle, MdGroup, MdShoppingCart } from 'react-icons/md'

export const dataPie = {
  labels: ['Corte', 'Corte e Barba', 'Selagem', 'Barba', 'Sombrancelha'],
  series: [30, 20, 25, 15, 10],
}
export const darkColors = ['#388E3C', '#FFA000', '#1976D2', '#E64A19', '#6A1B9A']

export const dashboardInformations = [
  {
    name: 'Clientes',
    value: 38,
    porcent: 8.5,
    icon: <MdGroup size="40" />,
  },
  {
    name: 'Pedidos',
    value: 17,
    porcent: -4.1,
    icon: <MdShoppingCart size="40" color={'#0D47A1'} />,
  },
  {
    name: 'Concluídos',
    value: 14,
    porcent: 1.4,
    icon: <MdCheckCircle size="40" color={'#1B5E20'} />,
  },
  {
    name: 'Cancelados',
    value: 3,
    porcent: -0.9,
    icon: <MdCancel size="40" color={'#B71C1C'} />,
  },
]
