import { InterceptorComponent } from '@api/components'
import { queryClient } from '@api/queryClient'
import { GlobalLoadingComponent } from '@components/GlobalLoading'
import { GlobalToast } from '@components/GlobalToast'
import { Sizer } from '@components/Sizer'
import { Theme } from '@components/Theme'
import { router } from '@navigation/routes'
import { store } from '@redux/store'
import { QueryClientProvider } from '@tanstack/react-query'
import pt from '@utils/i18n/pt.json'
import { PrimeReactProvider, addLocale } from 'primereact/api'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

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
              <Sizer>
                <Theme>
                  <RouterProvider router={router} />
                </Theme>
              </Sizer>
            </InterceptorComponent>
          </QueryClientProvider>
        </Provider>
      </PrimeReactProvider>
      <GlobalToast />
    </>
  )
}

export default App
