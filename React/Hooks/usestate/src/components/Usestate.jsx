import React, { useState } from 'react'

const Usestate = () => {
    const [num, setNum] = useState(20)
    const [username, setUsername] = useState("darshil")
    const [users,] = useState("second")
    function changenum() {
        setNum(33)
        setUsername("panchal")
    }
    return (
        <div>
            <h1>value of num is {num}</h1>
            <h1>value of name is {username}</h1>
            <h1>users {users}</h1>
            <button onClick={changenum} >click</button>
        </div>
    )
}

export default Usestate