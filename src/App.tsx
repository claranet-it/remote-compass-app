// import { useForm, SubmitHandler } from "react-hook-form"

import { FormEvent } from "react";


// type Inputs = {
//   example: string
//   exampleRequired: string
// }


export default function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>()
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Click submit form')
  };

  // const createURL = (userId: string, withDate = true) : string => {
  //   const base = `${window.location.origin}/api/${userId}.svg`;
  //   return withDate ? `${base}?date=${Date.now()}}` : base;
  // };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    // <div className='bg-primary-dark'>
    //   <button className="bg-primary-dark">TEST DI PROVA</button>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input defaultValue="test" {...register("example")} />


    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}


    //   <input type="submit" />
    // </form>
    // </div>


    <div className="min-h-screen flex items-center">
      <div className="w-full">

        <div className="bg-white p-10 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 font-bold text-gray-600">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Widget title"
                className="border border-gray-300 shadow p-3 w-full rounded"
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="radio" id="opzione1" name="opzione" className="inline-block h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione1" className="ml-2 text-gray-700">Opzione 1</label>
            </div>


            <button className="bg-primary-light active:scale-95 opacity-80 block w-full text-white font-bold p-4 rounded-lg transition duration-300 ease-in-out hover:opacity-100">Ottieni SVG</button>
          </form>
        </div>
      </div>
    </div>
  )
}
