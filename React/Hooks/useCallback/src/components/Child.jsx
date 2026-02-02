import React from 'react'

const Child = React.memo(
    (props) => {
        console.log("re-render")
        return ( 
            <div>
                <button onClick={props.handleclick}>
                    {props.buttonName}

                </button>
            </div>
        )
    }

)
export default Child