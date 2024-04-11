import { getI18n } from '@hooks/useGetI18n'
import { Button } from 'primereact/button'
import { MdAdd } from 'react-icons/md'

type CrudButtonProps = {
  onCreate: () => void
}

export const CrudButton = ({ onCreate }: CrudButtonProps) => {
  const crudI18n = getI18n('crud')
  return (
    <Button onClick={onCreate}>
      {crudI18n.register} <MdAdd className="ml-2" />
    </Button>
  )
}
