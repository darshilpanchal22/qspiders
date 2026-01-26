import { useForm } from "react-hook-form"
import React from 'react'


const App = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("submit the form", data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label  >
          First name
        </label>
        <input {...register("firstName", {
          required: "First name is required",
          minLength: { value: 3, message: "minimum is 3" },
          maxLength: 7
        })} />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}      </div>

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
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"} />
    </form>
  )
}
export default App