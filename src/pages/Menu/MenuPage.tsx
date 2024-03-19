import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { DataView } from 'primereact/dataview'
import { Rating } from 'primereact/rating'
import { Tag } from 'primereact/tag'
import { classNames } from 'primereact/utils'
import { useEffect, useState } from 'react'

export const MenuPage = () => {
  const [products, setProducts] = useState<any[]>()

  useEffect(() => {
    setProducts([
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Elegant Black Watch',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Accessories',
        quantity: 15,
        inventoryStatus: 'INSTOCK',
        rating: 4.5,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Sporty Watch',
        description: 'Durable and designed for the active lifestyle',
        image: 'sporty-watch.jpg',
        price: 55,
        category: 'Accessories',
        quantity: 30,
        inventoryStatus: 'LOWSTOCK',
        rating: 4.8,
      },
    ])
  }, [])

  const getSeverity = (product: any) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success'

      case 'LOWSTOCK':
        return 'warning'

      case 'OUTOFSTOCK':
        return 'danger'

      default:
        return null
    }
  }

  const itemTemplate = (product: any) => {
    return (
      <div className="col-12" key={product.id}>
        <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4')}>
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === 'OUTOFSTOCK'}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Card>
        <DataView value={products} itemTemplate={itemTemplate} />
      </Card>
    </div>
  )
}
