import { getI18n } from '@hooks/useGetI18n'
import { Divider } from 'primereact/divider'

export const PasswordFooter = () => {
  const passwordComponentI18n = getI18n('password_component')
  return (
    <>
      <Divider />
      <p className="mt-2">Ao menos:</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>{passwordComponentI18n.at_least_one_uppercase}</li>
        <li>{passwordComponentI18n.at_least_one_numeric}</li>
        <li>{passwordComponentI18n.at_least_one_special_characters}</li>
        <li>{passwordComponentI18n.at_least_eight_characters}</li>
      </ul>
    </>
  )
}
