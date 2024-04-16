export interface iProduct {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  items: iItem[];
}

export interface iItem {
  type: string;
  class: string;
  name: string;
  options: iItemOption[];
}

export interface iItemOption {
  label: string;
  value: string;
  price: number;
}
