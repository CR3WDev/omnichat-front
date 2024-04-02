import { Product } from 'types/products';

export const listProduct: Product[] = [
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
        name: "Pizzas",
        type: 'Selecione 1 meia pizza',
        options: [
          { label: "Pizza de Pepperoni", value: "pepperoni" },
          { label: "Pizza de Queijo", value: "cheese" }
        ]
      },
      {
        name: "Refrigerantes",
        type: 'Selecione 1 Refrigerante',
        options: [
          { label: "Coca-Cola", value: "coke" },
          { label: "Fanta", value: "fanta" },
          { label: "Sprite", value: "sprite" }
        ]
      }
    ]
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
        name: "Pizzas",
        type: "selecione a Pizza",
        options: [
          { label: "Pizza de Calabresa", value: "calabresa" }
        ]
      },
      {
        name: "Refrigerantes",
        type: "selecione o Refrigerante",
        options: [
          { label: "Coca-Cola", value: "coke" },
          { label: "Pepsi", value: "pepsi" }
        ]
      }
    ]
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
        name: "Pizzas",
        type: "Selecione a Pizza",
        options: [
          { label: "Pizza de Chocolate", value: "frango_catupiry" },
          { label: "Pizza de Morango ", value: "frango" }
        ]
      },
      {
        name: "Refrigerantes",
        type: "Selecione o Refrigerante",
        options: [
          { label: "Guaraná", value: "guarana" },
          { label: "Sukita", value: "sukita" }
        ]
      }
    ]
  },

];
