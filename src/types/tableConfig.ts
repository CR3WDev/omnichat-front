import { DataTableFilterMeta } from 'primereact/datatable'

export interface ITableConfig {
  filters: DataTableFilterMeta[]
  sortField: string
  sortOrder: 0 | 1 | -1 | null | undefined
  page?: number
  pageCount?: number
  first: number
  rows: number
}
export interface ITableConfigFilters {
  field: string
  op: 'match'
  value: string
}
