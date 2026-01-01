import React from 'react'

const App = () => {

  const pagescroll = (elem) => {
    console.log('speed', elem)
    if (elem < 0) {
      console.log("sidha scroll")
    }
    else {
      console.log("ulta scroll")
    }
  }
  return (


    <div onWheel={(elem) => {
      pagescroll(elem.deltaY)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>

  )
}

export default App