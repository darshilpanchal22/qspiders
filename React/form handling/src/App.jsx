import { useForm } from "react-hook-form"
import React from 'react'


const App = () => {
  const {
    register,

    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  return (
    <form action="">
      <div>
        <label >
          First name
        </label>
      </div>
    </form>
  )
}
export default App