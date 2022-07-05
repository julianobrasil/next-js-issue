import { ContextConsumerComponent } from '../app-state/ContextConsumerComponent'
import { GlobalContextProvider } from '../app-state/global-context'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <GlobalContextProvider>
      <ContextConsumerComponent />
      <main className='app'>
        <Component {...pageProps} />
      </main>
    </GlobalContextProvider>
  )
}

export default MyApp
