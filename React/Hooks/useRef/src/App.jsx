import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function handleSubmit() {
    setCount(count + 1)
  }

  return (<>
    count:{count}
    <br />
    <button onClick={handleSubmit}>increment</button>
  </>
  )
}

export default App