import { listProduct } from '@utils/mock/products'
import { DataView } from 'primereact/dataview'
import { ScrollPanel } from 'primereact/scrollpanel'
import { TabMenu } from 'primereact/tabmenu'
import { useEffect, useState } from 'react'
import ItemTemplateComponent from './components/ItemsComponents/ItemTemplateComponent'
import { StoreSearchComponent } from './components/Store/StoreComponent'

export const MenuPage = () => {
  const LojaName = 'Tartarugando Pizzaria'
  const ValorMinimo = 20
  const [products, setProducts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const groupProductsByCategory = (products: any[]) => {
    const groupedProducts: any = {}
    products.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = []
      }
      groupedProducts[product.category].push(product)
    })
    return groupedProducts
  }

  const groupedProducts = groupProductsByCategory(products || [])

  const handleCategoryButtonClick = (category: string) => {
    setSelectedCategory(category)
  }

  // const scrollToCategory = (category: string) => {
  //   const element = document.getElementById(`category-${category}`)
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //   }
  // }
  useEffect(() => {
    // Verifica se há categorias e define a primeira como selecionada
    if (Object.keys(groupedProducts).length > 0 && !selectedCategory) {
      setSelectedCategory(Object.keys(groupedProducts)[0])
    }
  }, [groupedProducts, selectedCategory])

  useEffect(() => {
    setProducts(listProduct)
  }, [])

  return (
    <div className="h-full xl:w-8">
      <StoreSearchComponent lojaNome={LojaName} valorMinimoEntrega={ValorMinimo} data={products} />
      <div className="flex justify-content-center">
        <TabMenu
          model={Object.keys(groupedProducts).map((category) => ({
            label: category,
            icon: 'pi pi-fw pi-list',
            command: () => handleCategoryButtonClick(category),
          }))}
        />
      </div>
      <ScrollPanel style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        {selectedCategory && (
          <div id={`category-${selectedCategory}`}>
            <h2 className="flex justify-content-center">{selectedCategory}</h2>
            <div>
              <DataView
                value={groupedProducts[selectedCategory]}
                itemTemplate={(product: any) => <ItemTemplateComponent product={product} />}
              />
            </div>
          </div>
        )}
      </ScrollPanel>
    </div>
  )
}
