import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { MdSend } from 'react-icons/md'

export const MessagesListContent = () => {
  return (
    <div className="flex flex-column flex-grow-1">
      <div className="flex flex-grow-1">center</div>
      <div
        className="flex"
        style={{ paddingRight: '1.25rem', paddingBottom: '1rem', paddingLeft: '1.25rem' }}
      >
        <span className="p-inputgroup w-full">
          <InputText placeholder="Pesquise por uma conversa!" className="w-full" />
          <Button icon={<MdSend />} />
        </span>
      </div>
    </div>
  )
}
