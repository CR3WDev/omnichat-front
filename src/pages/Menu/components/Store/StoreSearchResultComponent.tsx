import { IProduct } from 'types/products'
import { ItemDetailComponent } from '../Items/ItemDetailComponent'

interface StoreSearchResultProps {
  result: IProduct | null
  visible: boolean
  handleClick: () => void
  onHide: () => void
}

export const StoreSearchResultComponent = ({ result, visible, onHide }: StoreSearchResultProps) => {
  return (
    <div id="searchResult">
      {result ? (
        <ItemDetailComponent product={result} visible={visible} onHide={onHide} />
      ) : (
        <div></div>
      )}
    </div>
  )
}
