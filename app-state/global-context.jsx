
import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

const GlobalContext = createContext(null)
const GlobalContextUpdate = createContext(null)

function ContextProvider({children}) {
  const [value, setContext] = useState(null)

  return (
    <GlobalContext.Provider value={value}>
      <GlobalContextUpdate.Provider value={setContext}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

function useGlobalContextUpdater() {
  const setContext = useContext(GlobalContextUpdate)
  return setContext
}

export {
  useGlobalContext,
  useGlobalContextUpdater,
  ContextProvider as GlobalContextProvider,
}
