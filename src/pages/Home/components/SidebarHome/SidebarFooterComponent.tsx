import { useGetLoginResponseDTO } from '@hooks/useGetLoginResponseDTO'

type SidebarFooterProps = {
  isTopbarFooter?: boolean
}
export const SidebarFooterComponent = ({ isTopbarFooter }: SidebarFooterProps) => {
  return (
    <div className="mt-auto">
      <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
      <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
        <div
          style={{
            width: !isTopbarFooter ? '200px' : '400px',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          <span className="font-bold">{useGetLoginResponseDTO()?.username}</span>
        </div>
      </a>
    </div>
  )
}
