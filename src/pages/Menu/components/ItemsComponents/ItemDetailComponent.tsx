import { Dialog } from 'primereact/dialog'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface ItemDetailComponentProps {
  visible: boolean
  onHide: () => void
  product: Product
}

const ItemDetailComponent = ({ visible, onHide, product }: ItemDetailComponentProps) => {
  // const handleCardClick = () => {
  //   setPopupVisible(true);
  // };

  // const hidePopup = () => {
  //   setPopupVisible(false);
  // };

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header={product.name}
      modal
      dismissableMask // Permite fechar clicando fora do pop-up
      style={{ width: '50vw' }}
    >
      <div className="p-dialog-content">
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-6">
            <img
              src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
              alt={product.name}
              className="w-100"
            />
          </div>
          <div className="p-col-12 p-md-6">
            <h3>Description</h3>
            <p>{product.description}</p>
            <h3>Price</h3>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default ItemDetailComponent
