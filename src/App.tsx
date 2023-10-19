import { useEffect, useState } from "react";
import Confetti from "./components/Confetti";
import { SubmitHandler, useForm } from "react-hook-form";
import Spinner from "./assets/spinner";
import { RadioFieldset } from "./components/RadioFieldset";


export type Inputs = {
  title: string
  presenceOffice: string
  home: string
  compensation: string
  meetings: string
  comunication: string
  governance: string
}


export default function App() {

  const [element, setElement] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = () => {
    const multipleValues = getValues()
    console.log('Multi', multipleValues)

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

            <label className="block mb-2 font-bold text-gray-600"> Presence in the office </label>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <RadioFieldset nameRegister="presenceOffice" options={[
                  "In-office 5/5",
                  "In-office 1...4/5",
                  "Office-first Hybrid",
                  "Remote-first Hybrid",
                  "Remote-only"
                ]} register={register}
                />

              </div>
              {errors.presenceOffice && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <label className="block mb-2 font-bold text-gray-600"> Home </label>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <RadioFieldset nameRegister="home" options={[
                  "In-office 5/5",
                  "In-office 1...4/5",
                  "Office-first Hybrid",
                  "Remote-first Hybrid",
                  "Remote-only"
                ]} register={register}
                />

              </div>
              {errors.home && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <label className="block mb-2 font-bold text-gray-600"> Compensation </label>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <RadioFieldset nameRegister="compensation" options={[
                  "In-office 5/5",
                  "In-office 1...4/5",
                  "Office-first Hybrid",
                  "Remote-first Hybrid",
                  "Remote-only"
                ]} register={register}
                />

              </div>
              {errors.compensation && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <label className="block mb-2 font-bold text-gray-600"> Meetings </label>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <RadioFieldset nameRegister="meetings" options={[
                  "In-office 5/5",
                  "In-office 1...4/5",
                  "Office-first Hybrid",
                  "Remote-first Hybrid",
                  "Remote-only"
                ]} register={register}
                />

              </div>
              {errors.meetings && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <label className="block mb-2 font-bold text-gray-600"> Comunication </label>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <RadioFieldset nameRegister="comunication" options={[
                  "In-office 5/5",
                  "In-office 1...4/5",
                  "Office-first Hybrid",
                  "Remote-first Hybrid",
                  "Remote-only"
                ]} register={register}
                />

              </div>
              {errors.comunication && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>

            <label className="block mb-2 font-bold text-gray-600"> Governance </label>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start  lg:space-x-6 ">

                <RadioFieldset nameRegister="governance" options={[
                  "In-office 5/5",
                  "In-office 1...4/5",
                  "Office-first Hybrid",
                  "Remote-first Hybrid",
                  "Remote-only"
                ]} register={register}
                />

              </div>
              {errors.governance && <span className="text-primary-light">Questo campo e' obbligatorio</span>}
            </div>


            <button className="inline-flex items-center justify-center font-semibold leading-6  shadow rounded-lg active:scale-95 opacity-80 w-full text-white bg-primary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer">
              {isLoading ? (<><Spinner />  <span>Processing...</span></>) : <span>Ottieni svg</span>}
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
