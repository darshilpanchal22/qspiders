import React from 'react'
import { useReducer } from 'react'

const App = () => {
  const [state, dispatch] = useReducer(first, second, third);
  return (
    <div>

      App
    </div>
  )
}

export default App