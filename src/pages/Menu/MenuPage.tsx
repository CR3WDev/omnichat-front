export const MenuPage = () => {
  // const StoreName = 'Tartarugando Pizzaria'
  // const MinimumValueDelivery = 20
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // const groupProductsByCategory = (products: any[]) => {
  //   const groupedProducts: any = {}
  //   products.forEach((product) => {
  //     if (!groupedProducts[product.category]) {
  //       groupedProducts[product.category] = []
  //     }
  //     groupedProducts[product.category].push(product)
  //   })
  //   return groupedProducts
  // }
  // const fetchProducts = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   return listProduct
  // }

  // const handleCategoryButtonClick = (category: string) => {
  //   setSelectedCategory(category)
  // }

  // const groupedProducts = groupProductsByCategory(products || [])

  // useEffect(() => {
  //   if (!isLoading && Object.keys(groupedProducts).length > 0 && !selectedCategory) {
  //     setSelectedCategory(Object.keys(groupedProducts)[0])
  //   }
  // }, [isLoading, groupedProducts, selectedCategory])

  return (
    <div className="h-screen w-screen justify-content-center flex">
      {/* <div className="lg:w-10 w-screen">
        <StoreComponent
          StoreName={StoreName}
          MinimumValueDelivery={MinimumValueDelivery}
          data={[]}
        />
        <div
          className="flex justify-content-center"
          style={{ overflowX: 'auto', maxWidth: '100%' }}
        >
          <div className="bg-card" style={{ flex: '0 0 auto' }}>
            <TabMenu
              style={{ width: '100%' }}
              model={Object.keys([]).map((category) => ({
                label: category,
                command: () => handleCategoryButtonClick(category),
              }))}
            />
          </div>
        </div>
        {selectedCategory && (
          <div id={`category-${selectedCategory}`}>
            <DataView
              value={groupedProducts[selectedCategory]}
              itemTemplate={(product: any) => <ItemTemplateComponent product={product} />}
            />
          </div>
        )}
      </div> */}
    </div>
  )
}
