import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)
  //  first = side effect function
  // second  = clean-up  function 
  // third = comma separeted dep list


  //variation 1  = runs on every render
  // useEffect(() => {
  //   alert("helo")
  // })

  //variation 2 that runs on only first render
  // useEffect(() => {
  //   alert(" runs only 1 render")
  // }, [])

  //variation 3 
  // useEffect(() => {
  //   alert("i will run every timw when count is updated")
  // }, [count])

  //variation 4 
  // useEffect(() => {
  // alert("i will run only on first render (variation 4)")
  // }, [])

  //variation 5 = lets add cleanup function
  // useEffect(() => {
  //   alert("count updated")
  //   return () => {
  //     alert("cleanup function called")
  //   }
  // }, [count])

  function handleClick() {
    setCount(count + 1)
    setTotal(total + 1)
  }

  function handleTotalClick() {
    setTotal(total + 1)
  }
  useEffect(() => {
    if (count === 5) {
      document.title = "helooo react";
    }
  }, [count]);

  return (
    <div>

      <button onClick={handleClick}>Increase Count & Total</button>
      <br /><br />

      <button onClick={handleTotalClick}>Increase Total Only</button>
      <br /><br />

      <p>Count: {count}</p>
      <p>Total: {total}</p>
    </div>
  )
}

export default App
