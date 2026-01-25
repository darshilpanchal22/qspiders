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
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label >
          First name
        </label>
        <input {...register("fisrstname")} />
      </div> 

      <div>
        <label >
          Middle  name
        </label>
        <input {...register("middlename")} />
      </div>

      <div>
        <label >
          Last name
        </label>
        <input  {...register("lastname")} />
      </div>
    </form>
  )
}
export default App