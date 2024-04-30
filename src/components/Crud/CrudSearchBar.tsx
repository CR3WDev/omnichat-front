import { useDefaultTableConfig } from '@hooks/useDefaultTableConfig'
import { getI18n } from '@hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IColumnType } from 'types/column'
import { ITableConfig, ITableConfigFilters } from 'types/tableConfig'

type CrudSearchBarProps = {
  buttonOnClick?: () => void
  columns: IColumnType[]
  useDropdown?: boolean
  setTableConfig: Dispatch<SetStateAction<ITableConfig>>
}

export const CrudSearchBar = ({ columns, setTableConfig }: CrudSearchBarProps) => {
  const crudI18n = getI18n('crud')
  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({})

  const handleSearchInputChange = (field: string, value: string) => {
    setSearchValues({ ...searchValues, [field]: value })
  }

  const handleSearch = () => {
    let filters: ITableConfigFilters[] = []
    Object.entries(searchValues).map(([key, value]) => {
      filters.push({ field: key, op: 'MATCH', value })
    })
    if (filters.length === 0) return
    setTableConfig((prev) => {
      return { ...prev, filters }
    })
  }
  const handleClearSearch = () => {
    setSearchValues({})
    setTableConfig(useDefaultTableConfig(columns[0].field))
  }
  const renderSearchFields = (column: IColumnType, index: number) => {
    return (
      <div className={index !== 0 ? 'ml-2' : ''}>
        <InputText
          placeholder={`${column.header}`}
          value={searchValues[column.field] || ''}
          onChange={(e) => handleSearchInputChange(column.field, e.target.value)}
        />
      </div>
    )
  }

  useEffect(() => {
    console.log(searchValues)
  }, [searchValues])

  return (
    <Card className="m-3">
      <div>
        <h3 className="m-0 mb-3">{crudI18n.search}</h3>
      </div>
      <div className="flex p-0">
        {columns.map((column, index) => {
          return renderSearchFields(column, index)
        })}
        <div className="ml-3">
          <Button onClick={handleSearch}>{crudI18n.search}</Button>
          <Button text className="ml-2" onClick={handleClearSearch}>
            {crudI18n.clear}
          </Button>
        </div>
      </div>
    </Card>
  )
}
