import { GlobalToastComponent } from '@components/GlobalToast'
import pt from '@utils/i18n/pt.json'
import { PrimeReactProvider, addLocale } from 'primereact/api'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes/PublicRoutes'
import { InterceptorComponent } from '@services/components/interceptorComponent.tsx'
import { queryClient } from './services/queryClient'
import { GlobalLoadingComponent } from '@components/GlobalLoading'

const App = () => {
  //@ts-ignore
  addLocale('pt', pt)

  return (
    <>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalLoadingComponent />
          <InterceptorComponent>
            <RouterProvider router={router} />
          </InterceptorComponent>
        </QueryClientProvider>
      </PrimeReactProvider>
      <GlobalToastComponent />
    </>
  )
}

export default App
