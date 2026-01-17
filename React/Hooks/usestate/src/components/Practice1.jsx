import React, { useState } from 'react'

const Practice1 = () => {
    const [count, setcount] = useState(0)
    return (
        <div className='counter'>
            <p id='para'>you have clicked {count} times</p>
            <button id='btn' onClick={() => { setcount(count + 1) }}>click me</button>
        </div>
    )
}

export default Practice1