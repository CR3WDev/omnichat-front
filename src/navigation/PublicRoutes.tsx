import { ChangePasswordPage } from '@pages/Auth/ChangePassword'
import { LoginPage } from '@pages/Auth/Login'
import { RegisterPage } from '@pages/Auth/Register'
import { ChatPage } from '@pages/Chat/ChatPage.tsx'
import { DashboardPage } from '@pages/Dashboard'
import { ErrorPage } from '@pages/Error'
import { HomePage } from '@pages/Home'
import { MenuPage } from '@pages/Menu'
import { OrdersPage } from '@pages/Orders'
import { ProductsPage } from '@pages/Products'
import { UsersPage } from '@pages/Users'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/changepassword',
    element: <ChangePasswordPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/chat',
        element: <ChatPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
    ],
  },
  {
    path: '/menu/example',
    element: <MenuPage />,
  },
])
