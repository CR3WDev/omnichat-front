import { Dialog } from 'primereact/dialog'
import { Product } from 'types/products'

interface StoreSearchResultProps {
  result: Product | null
  visible: boolean
  handleClick: () => void
  onHide: () => void
}

export const StoreSearchResultComponent = ({ result, visible, onHide }: StoreSearchResultProps) => {
  return (
    <div id="searchResult">
      {result ? (
        <Dialog
          header="Popup"
          visible={visible}
          style={{ width: '50vw' }}
          onHide={onHide}
          draggable={false}
        >
          <div>
            <div>Name: {result.name}</div>
            <div>Description: {result.description}</div>
            <div>Price: {result.price}</div>
          </div>
        </Dialog>
      ) : (
        <div></div>
      )}
    </div>
  )
}
