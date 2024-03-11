import { ChangePasswordPage } from '@pages/Auth/ChangePassword'
import { RegisterPage } from '@pages/Auth/Register'
import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '@pages/Auth/Login'
import { HomePage } from '@pages/Home'
import { ChatPage } from '@pages/Chat/ChatPage.tsx'
import { NotFoundPage } from '@pages/NotFound'
import { DashboardPage } from '@pages/Dashboard'
import { OrdersPage } from '@pages/Orders'
import { MenuPage } from '@pages/Menu'

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
    errorElement: <NotFoundPage />,
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
        path: '/menu',
        element: <MenuPage />,
      },
    ],
  },
])
