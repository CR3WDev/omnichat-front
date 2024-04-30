import { getI18n } from '@hooks/useGetI18n'

export const PasswordHeader = () => {
  const passwordComponentI18n = getI18n('password_component')
  return <div className="font-bold mb-3">{passwordComponentI18n.pick_a_password}</div>
}
