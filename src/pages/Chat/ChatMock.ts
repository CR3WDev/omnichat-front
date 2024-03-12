function formatDate(date: any) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  // @ts-ignore
  return new Date(date).toLocaleDateString('pt-BR', options)
}
export const ChatMock = [
  {
    username: 'Alice Johnson',
    firstLetter: 'A',
    lastMessageDate: formatDate('2024-03-12T10:30:00'),
    lastMessage: 'Pedido de pizza feito! Aguardando ansiosamente.',
  },
  {
    username: 'Bob Smith',
    firstLetter: 'B',
    lastMessageDate: formatDate('2024-03-11T15:45:00'),
    lastMessage: 'Qualquer pizza vegetariana no cardápio?',
  },
  {
    username: 'Charlie Brown',
    firstLetter: 'C',
    lastMessageDate: formatDate('2024-03-10T08:20:00'),
    lastMessage: 'Pizza de pepperoni para mim, por favor!',
  },
  {
    username: 'David Lee',
    firstLetter: 'D',
    lastMessageDate: formatDate('2024-03-09T12:10:00'),
    lastMessage: 'Pizza quatro queijos, por favor!',
  },
  {
    username: 'Eve Taylor',
    firstLetter: 'E',
    lastMessageDate: formatDate('2024-03-08T18:55:00'),
    lastMessage: 'Entrega de pizza chegou mais rápido do que eu esperava.',
  },
  {
    username: 'Eve Taylor',
    firstLetter: 'E',
    lastMessageDate: formatDate('2024-03-08T18:55:00'),
    lastMessage: 'Quero outra pizza para o jantar!',
  },
  {
    username: 'Frank Miller',
    firstLetter: 'F',
    lastMessageDate: formatDate('2024-03-07T22:40:00'),
    lastMessage: 'Qual é a pizza do dia?',
  },
  {
    username: 'Grace Davis',
    firstLetter: 'G',
    lastMessageDate: formatDate('2024-03-06T14:15:00'),
    lastMessage: 'A pizza da última vez estava incrível!',
  },
  {
    username: 'Harry White',
    firstLetter: 'H',
    lastMessageDate: formatDate('2024-03-05T09:05:00'),
    lastMessage: 'Pizza margherita, por favor!',
  },
  {
    username: 'Isabel Brown',
    firstLetter: 'I',
    lastMessageDate: formatDate('2024-03-04T16:30:00'),
    lastMessage: 'Adoro as pizzas desta pizzaria!',
  },
  {
    username: 'Jackie Turner',
    firstLetter: 'J',
    lastMessageDate: formatDate('2024-03-03T20:50:00'),
    lastMessage: 'Alguma promoção de pizza hoje?',
  },
  {
    username: 'John Doe',
    firstLetter: 'J',
    lastMessageDate: formatDate('2024-03-12T09:15:00'),
    lastMessage: 'Pizza é sempre uma boa escolha!',
  },
  {
    username: 'Maria Rodriguez',
    firstLetter: 'M',
    lastMessageDate: formatDate('2024-03-11T14:30:00'),
    lastMessage: 'Que tal uma pizza para o almoço?',
  },
  {
    username: 'Chris Anderson',
    firstLetter: 'C',
    lastMessageDate: formatDate('2024-03-10T07:45:00'),
    lastMessage: 'Pizza havaiana, por favor!',
  },
  {
    username: 'Emily Johnson',
    firstLetter: 'E',
    lastMessageDate: formatDate('2024-03-09T11:20:00'),
    lastMessage: 'Pizza de frango com catupiry é a melhor!',
  },
  {
    username: 'Samuel Brown',
    firstLetter: 'S',
    lastMessageDate: formatDate('2024-03-08T17:55:00'),
    lastMessage: 'Qual é a pizza mais vendida?',
  },
  {
    username: 'Olivia White',
    firstLetter: 'O',
    lastMessageDate: formatDate('2024-03-07T21:30:00'),
    lastMessage: 'Pedido de pizza grande para a festa!',
  },
  {
    username: 'Daniel Smith',
    firstLetter: 'D',
    lastMessageDate: formatDate('2024-03-06T13:05:00'),
    lastMessage: 'Pizza de calabresa, por favor!',
  },
  {
    username: 'Sophia Turner',
    firstLetter: 'S',
    lastMessageDate: formatDate('2024-03-05T08:45:00'),
    lastMessage: 'Pizza com borda recheada, por favor!',
  },
]
