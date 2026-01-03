import React from 'react'
import { useState } from 'react'


// const Usestate1 = () => {
//     const [num, Setnum] = useState({ user: 'sarthak', age: 20 })
//     const btnclicked = () => {
//         const newNum = { ...num }
//         newNum.user = "aman"
//         newNum.age = "29"
//         Setnum(newNum)
//     }
//     return (
//         <div>
//             <h1>{num.user}, {num.age}</h1>
//             <button onClick={btnclicked}>click</button>
//         </div>
//     )
// }



const Usestate1 = () => {
    const [num, Setnum] = useState([10, 20, 30, 40])
    const btnclick = () => {

    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={btnclick}>click</button>
        </div>
    )
}


export default Usestate1