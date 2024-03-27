
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { Product } from 'types/products'
import { StoreSearchResultComponent } from './StoreSearchResultComponent'

type SearchComponentProps = {
  products: Product[]
}

export const SearchComponent = ({ products }: SearchComponentProps) => {
  const [searchText, setSearchText] = useState<string>('')
  const [searchResult, setSearchResult] = useState<Product | null>(null)
  const [visible, setVisible] = useState(false)

  const handleSearch = () => {
    const text = searchText.toLowerCase()
    const foundProduct = products.find((product) => product.name.toLowerCase() === text)
    setSearchResult(foundProduct || null)
    setVisible(!!foundProduct)
  }

  useEffect(() => {
    handleSearch()
  }, [searchText, products])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleClick = () => {
    setVisible(true)
  }

  const onHide = () => {
    setVisible(false)
  }

  return (
    <div className="w-full">
      <InputText
        className="w-full p-3 border-2 border-gray-300 rounded-md"
        id="searchInput"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <StoreSearchResultComponent
        result={searchResult}
        visible={visible}
        handleClick={handleClick}
        onHide={onHide}
      />
    </div>
  )
}


