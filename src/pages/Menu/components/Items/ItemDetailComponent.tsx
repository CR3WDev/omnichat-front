import { getI18n } from '@hooks/useGetI18n'
import 'primeicons/primeicons.css'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Checkbox } from 'primereact/checkbox'
import { Chip } from 'primereact/chip'
import { Dialog } from 'primereact/dialog'
import { RadioButton } from 'primereact/radiobutton'
import { ScrollPanel } from 'primereact/scrollpanel'
import { useState } from 'react'
import { IProduct } from 'types/products'

interface ItemDetailComponentProps {
  visible: boolean
  onHide: () => void
  product: IProduct
}

export const ItemDetailComponent = ({ visible, onHide, product }: ItemDetailComponentProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({})
  const menuI18n = getI18n('menu')
  const [count, setCount] = useState(1)
  const [bill, setBill] = useState(product.price * count)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleOptionChange = (itemId: string, optionValue: string, optionPrice: number) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [itemId]: optionValue,
    }))
    // Verifica se a opção foi marcada ou desmarcada
    if (optionValue) {
      // Adiciona o preço da opção ao preço total
      setBill((prevBill) => prevBill + optionPrice)
    } else {
      // Remove o preço da opção do preço total
      setBill((prevBill) => prevBill - optionPrice)
    }
  }

  const handleOptionRadioButtonChange = (itemId: string, optionValue: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [itemId]: optionValue,
    }))
  }

  return (
    <Dialog
      className="light-roundedsm lg:w-6 w-screen lg:h-30rem h-screen"
      header={<div className=" flex justify-content-center">{product.name}</div>}
      visible={visible}
      onHide={onHide}
      modal
      draggable={false}
      resizable={false}
      maximizable={false}
      closable={true}
      dismissableMask
      style={{ width: '100vw', height: '100vh', maxWidth: '100%', maxHeight: '100%' }}
    >
      <div className="flex w-full md:h-full  flex-column lg:flex-row justify-content-center lg:flex-nowrap">
        {product.image && (
          <div className="lg:w-6 md:h-auto flex align-items-center justify-content-center">
            <img
              className="lg:w-12 md:h-full w-15rem h-10rem border-round"
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        )}
        <div className="flex flex-column lg:w-6 w-full md:h-full">
          <ScrollPanel className="lg:w-12 w:full lg:ml-2 ml-0 flex-grow-1">
            <div className="flex align-items-center flex-wrap">
              <div className="flex w-full flex-wrap">
                <div className="justify-content-start">
                  <h4 className="ml-2">{product.description}</h4>
                </div>
                <div className="flex w-full justify-content-end">
                  <h2 className="ml-2 bold">R$ {product.price}</h2>
                </div>
              </div>
              {product.items.map((item) => (
                <div className="w-full lg:pl-2 pl-0" key={item.name}>
                  <div className="surface-section flex w-full justify-content-center align-items-center h-4rem border-round">
                    <div className="flex justify-content-center">
                      <div className="flex flex-column align-items-center">
                        <h3 className="m-0 p-0">{item.name}</h3>
                        <h5 className="m-0 p-0">{item.type}</h5>
                      </div>
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
                      {item.class === 'checkbox' ? (
                        <div className="p-checkbox p-component w-6 h-full justify-content-end ">
                          <div className="flex ">
                            <div>
                              <p className="p-0 m-0 mr-2">{option.price}</p>
                            </div>
                            <div className="p-checkbox-box p-component p-clickable ">
                              <Checkbox
                                inputId={`${product.id}_${item.name}_${option.value}`}
                                name={`${product.id}_${item.name}_${option.value}`}
                                value={option.value}
                                onChange={(e) =>
                                  handleOptionChange(
                                    `${product.id}_${item.name}_${option.value}`,
                                    e.checked ? option.value : '',
                                    option.price
                                  )
                                }
                                checked={
                                  selectedOptions[`${product.id}_${item.name}_${option.value}`] ===
                                  option.value
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-radiobutton p-component w-6 h-full justify-content-end ">
                          <div className="p-radiobutton-box p-component p-clickable ">
                            <RadioButton
                              inputId={`${product.id}_${item.name}_${option.value}`}
                              name={`${product.id}_${item.name}`}
                              value={option.value}
                              onChange={() =>
                                handleOptionRadioButtonChange(
                                  `${product.id}_${item.name}`,
                                  option.value
                                )
                              }
                              checked={
                                selectedOptions[`${product.id}_${item.name}`] === option.value
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollPanel>
          <div className="flex flex-wrap align-items-end lg:justify-content-end justify-content-end w-full ml-0 lg:ml-2">
            <div className="flex w-full flex-wrap justify-content-start">
              <div className="w-full justify-content-start">
                <h4>Combinação Selecionada</h4>
              </div>
              <div className="w-full justify-content-start">
                {Object.entries(selectedOptions).map(([itemId, optionValue]) => (
                  <Chip className="mx-1 my-1" key={itemId} label={optionValue} />
                ))}
              </div>
            </div>
            <div className="flex justify-content-end align-items-center mt-2">
              <Card className="flex align-items-center h-3rem mr-1 ">
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
              <div className="w-full">
                <Button className="lg:h-3rem lg:w-12rem w-12 h-2rem">
                  <div className="flex justify-content-center align-items-center">
                    <h3>{menuI18n.add}</h3>
                  </div>
                  <div className="flex w-full justify-content-end align-items-center pl-1">
                    <h3>{bill}</h3>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
