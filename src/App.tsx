import { InterceptorComponent } from '@api/components'
import { queryClient } from '@api/queryClient'
import { GlobalLoadingComponent } from '@components/GlobalLoading'
import { GlobalToastComponent } from '@components/GlobalToast'
import { SizerComponent } from '@components/Sizer'
import { router } from '@navigation/PublicRoutes'
import pt from '@utils/i18n/pt.json'
import { PrimeReactProvider, addLocale } from 'primereact/api'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from 'redux/store'

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
