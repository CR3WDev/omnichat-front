import { getI18n } from '@hooks/useGetI18n'
import 'primeicons/primeicons.css'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Chip } from 'primereact/chip'
import { Dialog } from 'primereact/dialog'
import { RadioButton } from 'primereact/radiobutton'
import { ScrollPanel } from 'primereact/scrollpanel'
import { useState } from 'react'
import { Product } from 'types/products'

interface ItemDetailComponentProps {
  visible: boolean
  onHide: () => void
  product: Product
}

export const ItemDetailComponent = ({ visible, onHide, product }: ItemDetailComponentProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({})
  const [price, setprice] = useState(product.price)
  const menuI18n = getI18n('menu')
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleOptionChange = (itemId: string, optionValue: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [itemId]: optionValue,
    }))
  }

  return (
    <Dialog
      header={
        <h2 className="p-0 m-0" style={{ textAlign: 'center' }}>
          {product.name}
        </h2>
      }
      visible={visible}
      onHide={onHide}
      style={{ width: '1200px', height: '580px', position: 'relative' }}
      modal
      draggable={false}
      resizable={false}
      maximizable={false}
      closable={true}
      dismissableMask
    >
      <div className="flex w-full h-full flex-wrap justify-content-center lg:flex-nowrap">
        <div className="lg:w-6 w:12 flex align-items-start">
          <img
            className="w-12 shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
        </div>
        <ScrollPanel className="lg:w-6 w:12 ml-2">
          <div className="flex align-items-center flex-wrap">
            <div>
              <p className="ml-2">{product.description}</p>
              <p className="ml-2 bold">{product.price} R$</p>
            </div>
            {product.items.map((item) => (
              <div className="w-full pl-2" key={item.name}>
                <div className="surface-section h-4rem border-round">
                  <div className="ml-5 pt-2 text-center">
                    <h3 className="m-0 p-0">{item.name}</h3>
                    <h5 className="m-0 p-0">{item.type}</h5>
                  </div>
                </div>
                {item.options.map((option) => (
                  <div key={option.value} className="flex flex-row my-3 ">
                    <div className="flex w-6 align-items-center ">
                      <label
                        className="ml-2 text-base"
                        htmlFor={`${product.id}_${item.name}_${option.value}`}
                      >
                        {option.label}
                      </label>
                    </div>
                    <div className="p-radiobutton p-component w-6 h-full justify-content-end ">
                      <div className="p-radiobutton-box p-component p-clickable ">
                        <RadioButton
                          inputId={`${product.id}_${item.name}_${option.value}`}
                          name={`${product.id}_${item.name}`}
                          value={option.value}
                          onChange={() =>
                            handleOptionChange(`${product.id}_${item.name}`, option.value)
                          }
                          checked={selectedOptions[`${product.id}_${item.name}`] === option.value}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex align-items-start justify-content-start w-full ml-2">
              <div className=" p-mt-3 w-full">
                <h3>Combinação Selecionada:</h3>
                {Object.entries(selectedOptions).map(([itemId, optionValue]) => (
                  <Chip className="mx-1" key={itemId} label={optionValue} />
                ))}
                <div className="flex justify-content-end align-items-center mt-2">
                  <Card className="flex align-items-center h-3rem mr-4 ">
                    <div className="flex align-items-center h-3rem ">
                      <Button
                        icon="pi pi-minus"
                        onClick={decrement}
                        className="p-button-rounded p-button-text"
                      />
                      <div className="p-mx-2">{count}</div>
                      <Button
                        icon="pi pi-plus"
                        onClick={increment}
                        className="p-button-rounded p-button-text"
                      />
                    </div>
                  </Card>
                  <div>
                    <Button className="p-button-raised p-button-success h-3rem w-20rem">
                      <div className="flex justify-content-center align-items-center">
                        <h3>{menuI18n.add}</h3>
                      </div>
                      <div className="flex w-full justify-content-end align-items-center">
                        <h3>{price * count}</h3>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </Dialog>
  )
}