import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { DataView } from 'primereact/dataview'
import { Rating } from 'primereact/rating'
import { Tag } from 'primereact/tag'
import { classNames } from 'primereact/utils'
import { useEffect, useState, useRef } from 'react'
import { Dialog } from 'primereact/dialog';
import Logo from '../../assets/PizzaHutLogo.avif'
import { Avatar } from 'primereact/avatar';
import LojaComponente from './components/LojaComponent'
import { ScrollPanel } from 'primereact/scrollpanel';

import 'primeicons/primeicons.css';


export const MenuPage = () => {
  const LojaName = 'Tartarugando Pizzaria';
  const ValorMinimo = 20;
  const [products, setProducts] = useState<any[]>()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const groupedProductsRef = useRef<any>({});

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const onHide = () => {
    setVisible(false);
  };


  useEffect(() => {
    setProducts([
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Combo 1',
        description: 'Combo de duas Pizzas Grandes e 1 refri',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Combos',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Elegant Black Watch',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Pizza Doce',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Elegant Black Watch',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Pizza Doce',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Elegant Black Watch',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Promoção',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Elegant Black Watch',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Pizza Doce',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Elegant Black Watch',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Pizza Doce',
        quantity: 15,
      },
      {
        id: '1004',
        code: 'nvklal433',
        name: 'Chocolate',
        description: 'Sophisticated and timeless design',
        image: 'elegant-black-watch.jpg',
        price: 95,
        category: 'Pizza Doce',
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Sporty Watch',
        description: 'Durable and designed for the active lifestyle',
        image: 'sporty-watch.jpg',
        price: 55,
        category: 'Bebidas',
      },
    ])
  }, [])

  const itemTemplate = (product: any) => {
    return (
      <div className="flex h-full w-full justify-content-center xl:flex-row" onClick={handleClick} style={{ cursor: 'pointer' }} key={product.id}>
        <Card className=''>
          <div className={classNames('flex flex-column xl:flex-row p-4 gap-4 p-m-3 w-full')}>
            <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
              <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                <div className="text-2xl font-bold text-900">{product.name}</div>
                <div className="flex align-items-center gap-3">
                  <span className="flex align-items-center gap-2">
                    <span className="font-semibold">{product.description}</span>
                  </span>
                </div>
                <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                  <span className="text-2xl font-semibold">${product.price}</span>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                alt={product.name}
              />
            </div>
          </div>
        </Card>
      </div>
    )
  }

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
  const groupedProducts = groupProductsByCategory(products || [])

  const handleCategoryButtonClick = (category: string) => {
    setSelectedCategory(category);
    scrollToCategory(category);
  };

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="h-full w-8">
      <LojaComponente lojaNome={LojaName} valorMinimoEntrega={ValorMinimo} />
      <div className="flex justify-content-center">
        {Object.keys(groupedProducts).map((category) => (
          <Button
            key={category}
            label={category}
            className="p-button-text"
            onClick={() => handleCategoryButtonClick(category)}
          />
        ))}
      </div>
      <Dialog
        header="Popup"
        visible={visible}
        style={{ width: '50vw' }}
        onHide={onHide}
      >
        Conteúdo do popup aqui
      </Dialog>
      <ScrollPanel style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 6vh)' }}>
        {Object.keys(groupedProducts).map((category) => (
          <div  key={category} id={`category-${category}`}>
            <h2 className='flex justify-content-center'>{category}</h2>
            <DataView   value={groupedProducts[category]} itemTemplate={itemTemplate} />
          </div>
        ))}
      </ScrollPanel>
    </div>
  )
}
