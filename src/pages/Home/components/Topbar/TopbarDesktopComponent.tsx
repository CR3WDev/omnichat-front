import { Button } from 'primereact/button'
import { MdLogout, MdMenu } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export const TopbarDesktopComponent = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{ height: '80px', background: 'var(--surface-card)', width: 'calc(100vw - 280px)' }}
      className="md:flex hidden"
    >
      <div className="flex justify-content-between w-full m-3">
        <div>
          <Button className="md:hidden block" icon={<MdMenu />}></Button>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate('/login')
            }}
            outlined
            label="Sair"
            icon={<MdLogout />}
          ></Button>
        </div>
      </div>
    </div>
  )
}
