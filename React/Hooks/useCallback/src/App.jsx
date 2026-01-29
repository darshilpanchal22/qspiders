import React, { useCallback, useState } from 'react'
import Child from './components/Child'

const App = () => {
  const [count, setCount] = useState(0)

  const handleclick = useCallback(() => {
    setCount(count + 1)
  },
    [count])
  return (
    <div>
      Count : {count}
      <div>
        <button onClick={handleclick}>increment</button>
      </div>
      <div>
        <Child buttonName="click me" />
      </div>
    </div>
  )
}

export default App


//* if you wrap into  React.memo it will not re-render if props will change then component will render 
//& if u r sending a function then react.memo wont be