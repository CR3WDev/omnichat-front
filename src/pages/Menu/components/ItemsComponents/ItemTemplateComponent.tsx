import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import ItemDetailComponent from './ItemDetailComponent';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ItemTemplateProps {
  product: Product;
}

const ItemTemplateComponent: React.FC<ItemTemplateProps> = ({ product}) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleCardClick = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="xl:col-6 p-4 col-12" onClick={handleCardClick} style={{ cursor: 'pointer' }} key={product.id}>
      <Card>
        <div className={classNames('flex flex-column xl:flex-row  gap-4 p-m-3 w-full')}>
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <span className="font-semibold text-4x1">{product.description}</span>
                </span>
              </div>
              <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 h-full">
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
      <ItemDetailComponent visible={popupVisible} onHide={hidePopup} product={product} />
    </div>
  );
};

export default ItemTemplateComponent;
