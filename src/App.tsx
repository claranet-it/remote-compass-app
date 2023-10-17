import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  example: string
  exampleRequired: string
}


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)




  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    
    <div className='bg-primary-dark'>
      <button className="bg-primary-dark">TEST DI PROVA</button>
      
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
    </div>
  )
}
