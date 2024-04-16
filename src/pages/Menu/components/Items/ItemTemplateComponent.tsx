import { Card } from 'primereact/card';
import { useState } from 'react';
import { Product } from 'types/products'; // Certifique-se de que este caminho está correto
import { ItemDetailComponent } from './ItemDetailComponent'; // Verifique também este caminho

interface ItemTemplateProps {
  product: Product;
}

export const ItemTemplateComponent = ({ product }: ItemTemplateProps) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleItemClick = () => {
    setPopupVisible(true); // Quando o item é clicado, torna o popup visível
  };

  const descriptionStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
  };
  const titleStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
  };

  if (popupVisible) {
    return (
      <div className='flex w-screen h-screen' style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000 }}>
        <ItemDetailComponent
          visible={popupVisible}
          onHide={() => setPopupVisible(false)}
          product={product}
        />
      </div>
    );
  } else {

    return (
      <div className="xl:col-6 xl:p-4 col-12 pb-2 lg:p-0" style={{ cursor: 'pointer' }} key={product.id}>
        <Card onClick={handleItemClick} className='light-roundedcard h-10rem'>
          <div className='flex gap-4 p-m-3 w-full align-items-center'>
            <div className="flex w-6 justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
              <div className="flex flex-column w-full align-items-start gap-3">
                <div className="text-2xl font-bold" style={titleStyle}>{product.name}</div>
                <div className="flex align-items-center gap-3">
                  <span className="font-light text-4x1" style={descriptionStyle}>{product.description}</span>
                </div>
                <div className="flex sm:flex-column align-items-center w-full lg:justify-content-end justify-content-start sm:align-items-end gap-3 sm:gap-2 h-full">
                  <span className="font-light">${product.price}</span>
                </div>
              </div>
              {product.image && (
                <div className='w-6rem lg:w-10rem'>
                  <img
                    className="w-6rem lg:w-10rem shadow-2 mx-auto border-round"
                    src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                    alt={product.name}
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  }
};
