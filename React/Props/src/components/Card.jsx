import React from 'react'

const Card = ({ text, color }) => {
    return (
        <div>
            <button className={`px-3 py-1 ${color} text-zinc-100 text-xl rounded`}>
                {text}
            </button>
        </div>
    )
}

export default Card
