export const listProduct: any[] = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Combo 1',
    description: 'Combo de duas Pizzas Grandes e 1 refri',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Combos',
    items: [
      {
        name: 'Pizzas',
        type: 'Selecione 1 meia pizza',
        class: 'radiobutton',
        options: [
          { label: 'Pizza de Pepperoni', value: 'pepperoni' },
          { label: 'Pizza de Queijo', value: 'cheese' },
        ],
      },
      {
        name: 'Refrigerantes',
        type: 'Selecione 1 Refrigerante',
        class: 'checkbox',
        options: [
          { label: 'Coca-Cola', value: 'coke' },
          { label: 'Fanta', value: 'fanta' },
          { label: 'Sprite', value: 'sprite' },
        ],
      },
    ],
  },
  {
    id: '1001',
    code: 'jdffk3ljs',
    name: 'Combo 2',
    description: 'Combo de Pizza de Calabresa e 2 Refris',
    image: 'calabresa-pizza.jpg',
    price: 50,
    category: 'Combos',
    items: [
      {
        name: 'Pizzas',
        type: 'selecione a Pizza',
        class: 'radiobutton',
        options: [{ label: 'Pizza de Calabresa', value: 'calabresa' }],
      },
      {
        name: 'Refrigerantes',
        type: 'selecione o Refrigerante',
        class: 'checkbox',
        options: [
          { label: 'Coca-Cola', value: 'coke', price: 4 },
          { label: 'Pepsi', value: 'pepsi' },
        ],
      },
    ],
  },
  {
    id: '1002',
    code: 'hsy82hdjs',
    name: 'Combo Doce',
    description: 'Combo de Pizza de Frango com Catupiry e 1 Refri',
    image: 'frango-catupiry-pizza.jpg',
    price: 45,
    category: 'Pizza Doce',
    items: [
      {
        name: 'Pizzas',
        type: 'Selecione a Pizza',
        class: 'radiobutton',
        options: [
          { label: 'Pizza de Chocolate', value: 'frango_catupiry' },
          { label: 'Pizza de Morango ', value: 'frango' },
        ],
      },
      {
        name: 'Refrigerantes',
        type: 'Selecione o Refrigerante',
        class: 'checkbox',
        options: [
          { label: 'Guaraná', value: 'guarana', price: 3.5 },
          { label: 'Sukita', value: 'sukita' },
        ],
      },
    ],
  },
  {
    id: '1005',
    code: 'ghi789rst',
    name: 'Combo Especial',
    description: 'Combo com pizza especial e suco natural',
    image: 'pizza_especial.jpg',
    price: 55,
    category: 'Pizza Especial',
    items: [
      {
        name: 'Pizzas',
        type: 'Selecione a Pizza',
        class: 'checkbox',
        options: [
          { label: 'Pizza Vegetariana', value: 'vegetariana', price: 3.5 },
          { label: 'Pizza Quatro Queijos', value: 'quatro_queijos' },
        ],
      },
      {
        name: 'Sucos Naturais',
        type: 'Selecione o Suco',
        class: 'checkbox',
        options: [
          { label: 'Suco de Maracujá', value: 'maracuja' },
          { label: 'Suco de Abacaxi', value: 'abacaxi' },
        ],
      },
    ],
  },
  {
    id: '1006',
    code: 'jkl012pqr',
    name: 'Combo Premium',
    description: 'Combo com pizza premium e água mineral',
    image: 'pizza_premium.jpg',
    price: 60,
    category: 'Pizza Premium',
    items: [
      {
        name: 'Pizzas',
        type: 'Selecione a Pizza',
        class: 'radiobutton',
        options: [
          { label: 'Pizza de Camarão', value: 'camarao' },
          { label: 'Pizza de Salmão', value: 'salmao' },
        ],
      },
      {
        name: 'Águas Minerais',
        type: 'Selecione a Água',
        class: 'checkbox',
        options: [
          { label: 'Água com gás', value: 'com_gas', price: 3.5 },
          { label: 'Água sem gás', value: 'sem_gas' },
        ],
      },
    ],
  },
  {
    id: '1007',
    code: 'mno345xyz',
    name: 'Combo Light',
    description: 'Combo com pizza integral e suco detox',
    image: 'pizza_integral.jpg',
    price: 48,
    category: 'Pizza Integral',
    items: [
      {
        name: 'Pizzas',
        type: 'Selecione a Pizza',
        class: 'radiobutton',
        options: [
          { label: 'Pizza de Legumes', value: 'legumes' },
          { label: 'Pizza de Ricota', value: 'ricota' },
        ],
      },
      {
        name: 'Sucos Detox',
        type: 'Selecione o Suco',
        class: 'radiobutton',
        options: [
          { label: 'Suco Verde', value: 'verde' },
          { label: 'Suco de Cenoura', value: 'cenoura' },
        ],
      },
    ],
  },
  {
    id: '1008',
    code: 'pqr678abc',
    name: 'Combo Família',
    description: 'Combo com pizza grande e refrigerante 2 litros',
    image: 'pizza_grande.jpg',
    price: 65,
    category: 'Pizza Família',
    items: [
      {
        name: 'Pizzas',
        type: 'Selecione a Pizza',
        class: 'radiobutton',
        options: [
          { label: 'Pizza de Carne', value: 'carne' },
          { label: 'Pizza de Frango com Catupiry', value: 'frango_catupiry' },
        ],
      },
      {
        name: 'Refrigerantes',
        type: 'Selecione o Refrigerante',
        class: 'radiobutton',
        options: [
          { label: 'Sprite', value: 'sprite' },
          { label: 'Fanta Uva', value: 'fanta_uva' },
        ],
      },
    ],
  },
]

