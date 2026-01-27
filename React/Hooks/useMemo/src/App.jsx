import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)

  function Task(num) {
    console.log("Task")
    for (let i = 0; i <= 100000000; i++)
      return num * 2
  }
  let doubleValue =
    Task(4)
  return (
    <>
      <button onClick={() => setcount(count + 1)}>increment</button>
      <div>count{count}</div>
      <div>double{doubleValue}</div>
    </>
  )
}

export default App