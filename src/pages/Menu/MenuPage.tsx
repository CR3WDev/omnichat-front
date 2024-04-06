import { listProduct } from '@utils/mock/products'
import { DataView } from 'primereact/dataview'
import { TabMenu } from 'primereact/tabmenu'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { ItemTemplateComponent } from './components/Items/ItemTemplateComponent'
import { StoreComponent } from './components/Store/StoreComponent'

export const MenuPage = () => {
  const StoreName = 'Tartarugando Pizzaria'
  const MinimumValueDelivery = 20
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const groupProductsByCategory = (products: any[]) => {
    const groupedProducts: any = {}
    products.forEach(product => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = []
      }
      groupedProducts[product.category].push(product)
    })
    return groupedProducts
  }
  const fetchProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return listProduct;
  };

  const handleCategoryButtonClick = (category: string) => {
    setSelectedCategory(category)
  }

  const { data: products = [], isLoading } = useQuery('products', fetchProducts);

  const groupedProducts = groupProductsByCategory(products || [])

  useEffect(() => {
    if (!isLoading && Object.keys(groupedProducts).length > 0 && !selectedCategory) {
      setSelectedCategory(Object.keys(groupedProducts)[0]);
    }
  }, [isLoading, groupedProducts, selectedCategory]);

  return (
    <div className="h-screen w-screen justify-content-center flex">
      <div className='lg:w-10'>
        <StoreComponent StoreName={StoreName} MinimumValueDelivery={MinimumValueDelivery} data={products} />
        <div className="flex justify-content-center">
          <div className='bg-card' >
            <TabMenu style={{ overflowX: 'auto', maxWidth: '100%' }}
              model={Object.keys(groupedProducts).map((category) => ({
                label: category,
                icon: 'pi pi-fw pi-list',
                command: () => handleCategoryButtonClick(category),
              }))}
            />
          </div>

        </div>
          {selectedCategory && (
            <div  id={`category-${selectedCategory}`}>
                <DataView
                  value={groupedProducts[selectedCategory]}
                  itemTemplate={(product: any) => <ItemTemplateComponent product={product} />}
                />
            </div>
          )}
      </div>
    </div>
  );
};
