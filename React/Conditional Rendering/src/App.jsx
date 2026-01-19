import React, { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'

const App = () => {
  const [isloggedin, setLoggeddin] = useState(false)
  if (!isloggedin) {
    return (
      <Login />
    )
  }


  return (
    <div>
      <h1> welcome everyone</h1>
      <div>
        {isloggedin && <Logout />}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isloggedin ? <Logout /> : <Login />}
  //   </div>
  // )

  // if (isloggedin) {
  //   return (
  //     <Logout />
  //   )
  // }
  // else {
  //   return (
  //     <Login />
  //   )
  // }


}

export default App
