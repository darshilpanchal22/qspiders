import React, { useState } from 'react'


function Count() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1> Your Count {count}</h1>
            <button onClick={() => setCount(count - 1)}> Decrease count</button>
            <button onClick={() => setCount(count + 1)}> Increase count</button>
        </div>
    )
}

export default Count