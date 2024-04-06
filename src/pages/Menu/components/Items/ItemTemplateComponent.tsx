import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';
import { useState } from 'react';
import { Product } from 'types/products';
import { ItemDetailComponent } from './ItemDetailComponent';

interface ItemTemplateProps {
  product: Product;
}

export const ItemTemplateComponent  = ({ product}:ItemTemplateProps) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleItemClick = () => {
    setPopupVisible(true);
  };

  return (
    <div className="xl:col-6 p-4 col-12"  style={{ cursor: 'pointer' }} key={product.id}>
      <Card onClick={handleItemClick} className='light-rounded'>
        <div className={classNames('flex flex-column xl:flex-row  gap-4 p-m-3 w-full')}>
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column w-full align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <span className="font-semibold text-4x1">{product.description}</span>
                </span>
              </div>
              <div className="flex sm:flex-column align-items-center w-full justify-content-end primary sm:align-items-end gap-3 sm:gap-2 h-full">
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
      {popupVisible && (
        <ItemDetailComponent
          visible={popupVisible}
          onHide={() => setPopupVisible(false)}
          product={product}
        />
      )}
    </div>
  );
};


