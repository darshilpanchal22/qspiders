import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  const doubleValue = useMemo(() => {

    let result = 0
    for (let i = 0; i <= 100000000; i++) {
      result = input * 2
    }

    return result
  }, [input]) // ✅ only runs when input changes

  return (
    <>
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <p>Double: {doubleValue}</p>

      <hr />

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
