import React from 'react'

const App = () => {
  function handleclick() {
    alert("clicked")
  }
  function handlemouseover() {
    alert("para k par mouse")
  }
  function handleinputchange(e) {
    // console.log("input is changed")
    console.log("value till now ", e.target.value)

  }
  function handlesubmit(e) {
    e.preventDefault();
    //custom behaviout here
    alert("form submit krdu kya")
  }
  return (

    <div>
      <button onClick={() => alert("btn is clicked")}>click me </button>
      {/* <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={handleinputchange} />
        <button type='submit'>submit</button>
      </form>
       <p onMouseOver={handlemouseover}>i ama para</p>
       <button onClick={handleclick}>click me </button> */}
    </div>
  )
}

export default App