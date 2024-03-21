import { useService } from '@api/useServices.ts'
import { Register } from './RegisterInterfaces.ts'

export const postRegister = () => {
  return useService().usePost<Register>('register', '/auth/register')
}
