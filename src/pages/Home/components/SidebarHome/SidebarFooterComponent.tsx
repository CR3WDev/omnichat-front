import { Avatar } from 'primereact/avatar'

export const SidebarFooterComponent = () => {
  return (
    <div className="mt-auto">
      <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
      <a
        v-ripple
        className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
      >
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span className="font-bold">Marcelo Piranhudo</span>
      </a>
    </div>
  )
}
