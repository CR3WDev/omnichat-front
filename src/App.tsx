import { GlobalLoadingComponent } from '@components/GlobalLoading'
import { GlobalToastComponent } from '@components/GlobalToast'
import { SizerComponent } from '@components/Sizer'
import { InterceptorComponent } from '@services/components/interceptorComponent.tsx'
import pt from '@utils/i18n/pt.json'
import { PrimeReactProvider, addLocale } from 'primereact/api'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from 'redux/store'
import { router } from 'routes/PublicRoutes'
import { queryClient } from './services/queryClient'

const App = () => {
  //@ts-ignore
  addLocale('pt', pt)

  return (
    <>
      <PrimeReactProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <GlobalLoadingComponent />
            <InterceptorComponent>
              <SizerComponent>
                <RouterProvider router={router} />
              </SizerComponent>
            </InterceptorComponent>
          </QueryClientProvider>
        </Provider>
      </PrimeReactProvider>
      <GlobalToastComponent />
    </>
  )
}

export default App
