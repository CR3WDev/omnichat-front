import icon from '@assets/icons8-robô-48.png'

export const SidebarHeader = () => {
  return (
    <div className="flex p-3">
      <img src={icon} alt="" />
      <div className="flex align-items-center">
        <span className="font-semibold text-2xl text-primary">Omnichat</span>
      </div>
    </div>
  )
}
