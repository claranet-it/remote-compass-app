import { useEffect, useState } from "react";
import Confetti from "./components/Confetti";
import { SubmitHandler, useForm } from "react-hook-form";
import Spinner from "./assets/spinner";


type Inputs = {
  title: string
  exampleRequired: string
  presenceOffice: 'in-office' | 'in-office-4-5' | 'office-first' | 'remote-first' | 'remote-only'
}


export default function App() {

  const [element, setElement] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = () => {

       //MOCK
       setIsLoading(true)

       setTimeout(() => {
        setIsLoading(false)
        setElement(true)
        }, 3000)
        //MOCK
  }

  useEffect(() => {
    if (element) {
      //MOCK
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }, 0);
      setTimeout(() => {
        setConfetti(true)
      }, 1000)
      //MOCK
      
    }
  }, [element]);

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full">

        <div className="bg-white p-10 rounded-lg shadow-xl md:auto mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 font-bold text-gray-600">Title</label>
              <input {...register("title", { required: true })}
                placeholder="Widget title"
                className="border border-gray-300 shadow p-3 w-full rounded"
              />
              {errors.title && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <label htmlFor="PRESENCE IN THE OFFICE" className="block mb-2 font-bold text-gray-600"> Presence in the office </label>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <input type="radio"
                  {...register('presenceOffice', { required: true })}
                  className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
                <label className="ml-2 text-gray-700">In-office 5/5</label>

                <input type="radio" 
                {...register('presenceOffice', { required: true })} 
                className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
                <label className="ml-2 text-gray-700">In-office 1...4/5</label>

                <input type="radio" 
                {...register('presenceOffice', { required: true })} 
                className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
                <label className="ml-2 text-gray-700">Office-first Hybrid</label>

                <input type="radio" 
                {...register('presenceOffice', { required: true })} 
                className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
                <label className="ml-2 text-gray-700">Remote-first Hybrid</label>

                <input type="radio" 
                {...register('presenceOffice', { required: true })} 
                className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
                <label className="ml-2 text-gray-700">Remote-only</label>
              </div>
              {errors.presenceOffice && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <button className="inline-flex items-center justify-center font-semibold leading-6  shadow rounded-lg active:scale-95 opacity-80 w-full text-white bg-primary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer">
            {isLoading ? (<><Spinner/>  <span>Processing...</span></>) : <span>Ottieni svg</span>} 
            </button>
          </form>
        </div>

        {element && (
          <>
            <div style={{ height: "800px" }}></div>
            {confetti && <Confetti />}
          </>
        )}
      </div>
    </div>
  )
}
