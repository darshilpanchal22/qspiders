import React, { createContext, useState } from 'react'
import Child1 from './components/Child1'

// ✅ create context OUTSIDE component
//& create context
//& wral all the child inside a provider
//& pass value
// const Usercontext = createContext()
const Themecontext = createContext()
const App = () => {
  // const [user, setUser] = useState({ name: "darshil" })
  const [theme, setTheme] = useState("light")
  return (

    // <Usercontext.Provider value={user}>
    //   <Child1 />
    // </Usercontext.Provider>

    <>
      <Themecontext.Provider value={theme}>
        <Child1 />
      </Themecontext.Provider>
    </>
  )
}

export default App
// export { Usercontext }
export { Themecontext }