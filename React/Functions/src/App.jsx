import React from 'react'

const App = () => {
  function btnclick() {
    console.log('btn click')
  }
  return (
    <div><h1>heloo</h1>
      <button onClick={btnclick}>click me</button>
    </div>
  )
}

export default App