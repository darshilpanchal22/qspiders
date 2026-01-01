import React from 'react'

const App = () => {
  function inputchange(val) {
    console.log(val)
  }
  return (
    <div>
      <input onChange={function (elem) {
        inputchange(elem.target.value)
      }} type='text' placeholder='enter name' />
    </div>
 
  )
}

export default App