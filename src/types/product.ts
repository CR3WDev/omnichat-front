export interface IProduct {
  id: string
  code: string
  name: string
  description: string
  image: string
  price: number
  category: string
  items: IItem[]
}

export interface IItem {
  type: string
  class: string
  name: string
  options: IItemOption[]
}

export interface IItemOption {
  label: string
  value: string
  price: number
}
