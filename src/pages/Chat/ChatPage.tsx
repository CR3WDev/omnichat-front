import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import { Avatar } from 'primereact/avatar'
import { Ripple } from 'primereact/Ripple'
import { ChatMock } from './ChatMock.ts'
import { Button } from 'primereact/button'
import { MdSend } from 'react-icons/md'
export const ChatPage = () => {
  return (
    <div className="page-container flex">
      <div className=" h-full p-3" style={{ width: '30rem' }}>
        <div className="mb-3">
          <div>
            <h2>Chats</h2>
          </div>
          <div className="w-full">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText placeholder="Pesquise por uma conversa!" className="w-full" />
            </span>
          </div>
        </div>
        <div style={{ maxHeight: 'calc(100vh - 48px - 150px - 2rem)', overflow: 'auto' }}>
          {ChatMock.map((user: any) => {
            return (
              <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                <div className="flex w-full">
                  <div className="mr-3">
                    <Avatar label={user.firstLetter} size="xlarge" shape="circle" />
                  </div>
                  <div className="w-full  flex flex-column justify-content-center">
                    <div className="flex justify-content-between w-full">
                      <div>
                        <span className="font-bold">{user.username}</span>
                      </div>
                      <div>
                        <span>{user.lastMessageDate}</span>
                      </div>
                    </div>
                    <div>
                      <span>{user.lastMessage}</span>
                    </div>
                  </div>
                </div>
                <Ripple />
              </div>
            )
          })}
        </div>
      </div>
      <Divider layout={'vertical'} className={'m-0 p-0'} />
      <div className="h-full w-full flex flex-column justify-content-between">
        <div className="flex mx-3 mt-3">
          <div className={'mr-3'}>
            <Avatar label={'M'} size="large" shape="circle" />
          </div>
          <div className={'flex align-items-center'}>
            <span className={'font-bold'}>Marcelo Victor</span>
          </div>
        </div>
        <Divider />
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
    </div>
  )
}
