import { Dialog } from 'primereact/dialog'

export const SchedulingConfirmDialog = ({ isVisible, setIsVisible }) => {
  return (
    <Dialog
      visible={isVisible}
      draggable={false}
      onHide={() => {
        setIsVisible(false)
      }}
    >
      oi
    </Dialog>
  )
}
