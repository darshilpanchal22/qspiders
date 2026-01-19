import React from 'react'

const State = (props) => {
    return (
        <div>

            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            <p>name state var ki value inside card: {props.name}</p>
        </div>
    )
}

export default State