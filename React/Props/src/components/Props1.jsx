import React, { Children } from 'react'

const Props1 = (props) => {
    return (
        <div>
            {props.children}
            <button onClick={props.children}></button>
        </div >
    )
}

export default Props1