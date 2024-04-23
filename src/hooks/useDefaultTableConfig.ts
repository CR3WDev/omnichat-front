import { ITableConfig } from 'types/tableConfig'

export const useDefaultTableConfig = (sortField: string): ITableConfig => {
  return {
    filters: [],
    rows: 5,
    first: 0,
    sortField,
    page: 0,
    sortOrder: 1,
  }
}
