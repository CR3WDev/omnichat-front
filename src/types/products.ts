export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  items: Item[];
}

export interface Item {
  type: string;
  name: string;
  options: ItemOption[];
}

export interface ItemOption {
  label: string;
  value: string;
}
