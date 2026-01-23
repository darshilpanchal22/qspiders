import React, { createContext, useState } from 'react'
import Child1 from './components/Child1'

// ✅ create context OUTSIDE component
//& create context
//& wral all the child inside a provider
//& pass value
const Usercontext = createContext()

const App = () => {
  const [user, setUser] = useState({ name: "darshil" })

  return (
    <Usercontext.Provider value={user}>
      <Child1 />
    </Usercontext.Provider>
  )
}

export default App
export { Usercontext }
