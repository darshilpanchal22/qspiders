import React, { useState } from 'react'
import State from './components/State'

const App = () => {
  const [name, setName] = useState("")
  return (
    <div>
      <State name={name} setName={setName} />
      <p> i am inside parent component :{name}</p>
    </div>
  )
}

export default App