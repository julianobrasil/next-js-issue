import {useGlobalContext} from './global-context'

export function ContextConsumerComponent() {
  const context = useGlobalContext()

  return (
    <div>
      <h1>Inside Consumer Component</h1>
      <h2>From The Context: {context?.customValue?.text}</h2>
    </div>
  )
}

export default ContextConsumerComponent
