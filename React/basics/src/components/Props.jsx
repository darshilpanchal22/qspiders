import React from 'react'

const Props = (props) => {
    return (
        <div className="h-60 flex items-center justify-center bg-gray-100">
            <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 flex flex-col sitems-center ">
                <h3 className="text-xl font-semibold text-gray-800">
                    {props.name} </h3>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6I8PuPpMkHakBpJR0lDVECzBi7qbM17HNQ&s"
                    alt="profile"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200" />

                <p className="text-gray-600 text-center text-sm">
                    {props.desc}</p>
            </div>
        </div>

    )
}

export default Props