import React, { createContext } from 'react'
import Child1 from './components/Child1'


const App = () => {
  //& create context
  const Usercontext = createContext()
  //& wral all the child inside a provider
  return (
    <div>
      <Child1 />

    </div>)
}

export default App