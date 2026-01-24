import React, { useContext } from 'react'
import { Themecontext } from '../App'

const Child3 = () => {

    const theme = useContext(Themecontext)
    return (
        <div>
            {/* data:  {user.name} */}
            {theme}
        </div>

    )
}

export default Child3