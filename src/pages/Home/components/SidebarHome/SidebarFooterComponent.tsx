import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO'
import { useGetUserInfo } from '@hooks/useGetUserInfo'
import { Avatar } from 'primereact/avatar'

export const SidebarFooterComponent = () => {
  console.log(useGetUserInfo('username'))
  return (
    <div className="mt-auto">
      <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
      <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
        <div>
          <Avatar icon="pi pi-user" size="normal" shape="circle" />
        </div>
        <span className="font-bold">{useGetLoginResponseDTO()?.username}</span>
      </a>
    </div>
  )
}
