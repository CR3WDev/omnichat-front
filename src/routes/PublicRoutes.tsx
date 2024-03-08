import { ChangePasswordPage } from '@pages/Auth/ChangePassword'
import { RegisterPage } from '@pages/Auth/Register'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthChecker } from './AuthChecker'
import { PrivateRoutes } from './PrivateRoutes'
import { LoginPage } from '@pages/Auth/Login'
import { HomePage } from '@pages/Home'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/changepassword" element={<ChangePasswordPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route
        path="*"
        element={
          <AuthChecker>
            <PrivateRoutes />
          </AuthChecker>
        }
      ></Route>
    </Route>
  )
)
