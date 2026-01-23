import React, { useContext } from 'react'
import { Usercontext } from '../App'

const Child3 = () => {
    const user = useContext(Usercontext)
    return (
        <>
            data:  {user.name}
        </>

    )
}

export default Child3