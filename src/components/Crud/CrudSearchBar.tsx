import { getI18n } from '@hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { ColumnType } from 'types/column'

type CrudSearchBarProps = {
  buttonOnClick?: () => void
  columns: ColumnType[]
  useDropdown?: boolean
}

export const CrudSearchBar = ({ columns, useDropdown = false }: CrudSearchBarProps) => {
  const crudI18n = getI18n('crud')
  const [selectedColumn, setSelectedColumn] = useState(columns ? columns[0].field : '')
  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({})

  const handleColumnChange = (e: { value: any }) => {
    setSelectedColumn(e.value)
  }

  const handleSearchInputChange = (field: string, value: string) => {
    setSearchValues({ ...searchValues, [field]: value })
  }

  const handleSearch = () => {
    console.log('Searching...')
  }

  const renderSearchFields = () => {
    if (useDropdown && columns) {
      return (
        <>
          <Dropdown
            optionLabel="header"
            optionValue="field"
            value={selectedColumn}
            options={columns}
            onChange={handleColumnChange}
          />
          <div className="ml-3">
            <InputText
              placeholder={`${crudI18n.searchfor} ${selectedColumn}`}
              value={searchValues[selectedColumn] || ''}
              onChange={(e) => handleSearchInputChange(selectedColumn, e.target.value)}
            />
          </div>
        </>
      )
    } else if (columns) {
      return columns.map((column, index) => (
        <div key={index} className="ml-3">
          <InputText
            placeholder={column.header}
            value={searchValues[column.field] || ''}
            onChange={(e) => handleSearchInputChange(column.field, e.target.value)}
          />
        </div>
      ))
    }
    return null
  }

  return (
    <Card className="m-3">
      <div>
        <h3 className="m-0 mb-3">{crudI18n.search}</h3>
      </div>
      <div className="flex">
        {renderSearchFields()}
        <div className="ml-3">
          <Button onClick={handleSearch}>{crudI18n.search}</Button>
          <Button text className="ml-2" onClick={() => setSearchValues({})}>
            {crudI18n.clear}
          </Button>
        </div>
      </div>
    </Card>
  )
}
