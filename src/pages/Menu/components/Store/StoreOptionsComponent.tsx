import { getI18n } from '@hooks/useGetI18n'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'
import { useState } from 'react'
import { AiOutlineCar, AiOutlineUser } from 'react-icons/ai'
import { Category } from 'types/category'

interface StoreOptionsProps {
  visible: boolean
  onHide: () => void
  onSelectOption: (option: string) => void
}

export const StoreOptionsComponent = ({ visible, onHide, onSelectOption }: StoreOptionsProps) => {
  const menuI18n = getI18n('menu')
  const categories: Category[] = [
    { name: 'Entrega', key: 'delivery', icon: <AiOutlineCar style={{ fontSize: '2rem' }} /> },
    { name: 'Retirada', key: 'pickup', icon: <AiOutlineUser style={{ fontSize: '2rem' }} /> },
  ]

  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0])

  const handleConfirmOption = () => {
    onSelectOption(selectedCategory.name)
    onHide()
  }

  return (
    <Dialog
      className='light-roundedsm'
      header={<div style={{ textAlign: 'center' }}>{menuI18n.delivery_option}</div>}
      visible={visible}
      onHide={onHide}
      style={{ width: '400px', height: '360px', position: 'relative' }}
      modal
      draggable={false}
      resizable={false}
      maximizable={false}
      closable={false}
      dismissableMask
      footer={
        <div>
          <Button
            label="Confirmar"
            onClick={handleConfirmOption}
            className="p-button-success bg-primary"
            style={{ width: '100%' }}
          />
        </div>
      }
    >
      <div className="p-grid p-nogutter">
        {categories.map((category) => (
          <div key={category.key} className="p-col">
            <div className="p-card mb-2 mt-2">
              <div className="p-card-body flex flex-row p-jc-between">
                <div className="flex p-ai-center">
                  <span className="p-mr-2">{category.icon}</span>
                  <label htmlFor={category.key} className="ml-2 text-2xl">
                    {category.name}
                  </label>
                </div>
                <div className="p-radiobutton p-component w-12 h-full justify-content-end mt-2">
                  <div className="p-radiobutton-box p-component p-clickable ">
                    <RadioButton
                      inputId={category.key}
                      name="category"
                      value={category}
                      onChange={(e: RadioButtonChangeEvent) =>
                        setSelectedCategory(e.value as Category)
                      }
                      checked={selectedCategory.key === category.key}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Dialog>
  )
}
