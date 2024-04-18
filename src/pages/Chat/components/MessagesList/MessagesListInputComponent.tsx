import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'
import { IChat } from 'types/chat'
import { IMessage } from 'types/message'
import { postSendMessage } from './MessagesListServices'

type MessagesListInputProps = {
  setMessages: Dispatch<SetStateAction<IMessage[]>>
  chatSelected: IChat | undefined
}
export const MessagesListInputComponent = ({
  setMessages,
  chatSelected,
}: MessagesListInputProps) => {
  const { handleSubmit, register, watch } = useForm()

  const { mutateAsync: sendMessage } = postSendMessage()
  const onSubmit = () => {
    sendMessage({
      systemUserId: chatSelected?.systemUserId,
      customerUserId: chatSelected?.customerUserId,
      chatId: chatSelected?.id,
      text: watch('inputMessage'),
    }).then((data) => {
      console.log(data)
    })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex"
      style={{
        paddingRight: '1.25rem',
        paddingBottom: '1rem',
        paddingLeft: '1.25rem',
        paddingTop: '1rem',
      }}
    >
      <span className="p-inputgroup w-full">
        <InputText
          id="inputMessage"
          placeholder="Digite uma mensagem!"
          {...register('inputMessage', {})}
          className="w-full"
        />
        <Button icon={<MdSend />} />
      </span>
    </form>
  )
}
