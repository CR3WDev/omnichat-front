export interface IProduct {
  barcode: string
  description: string
  id: number
  price: string
  title: string
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
