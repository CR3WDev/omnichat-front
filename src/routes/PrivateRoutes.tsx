import { NotFoundPage } from '@pages/NotFound'
import { Route, Routes } from 'react-router-dom'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}
