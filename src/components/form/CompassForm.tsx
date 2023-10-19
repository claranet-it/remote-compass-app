import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { RadioFieldset } from "./RadioFieldset"
import Spinner from "../../assets/spinner"
import axios from 'axios';


export type Inputs = {
    title: string
    presenceOffice: string
    home: string
    compensation: string
    meetings: string
    comunication: string
    governance: string
  }

  type PropsCompass = {
    onDataReceived: (data: ResponseApi) => void;
  }

export type ResponseApi = {
  data: {
    message: string 
  }
}


export const CompassForm: React.FC<PropsCompass> = ({
  onDataReceived
}) => {

    const [isLoading, setIsLoading] = useState(false)


    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm<Inputs>()

      const getSvg = async () =>  {
        setIsLoading(true)

        try {
          const response = await axios.get('https://dog.ceo/api/breeds/image/random');
          onDataReceived(response); 
          setIsLoading(false)

        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      }
    const onSubmit: SubmitHandler<Inputs> = async () => {
        const multipleValues = getValues()
        console.log('Multi', multipleValues)
        
        await getSvg()
      }

    return (
      <>
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
          <div className="flex flex-col sm:flex-row items-start lg:space-x-6 ">

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
          <div className="flex flex-col sm:flex-row items-start  lg:space-x-6 ">

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
          <div className="flex flex-col sm:flex-row items-start  lg:space-x-6 ">

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
          <div className="flex flex-col sm:flex-row items-start  lg:space-x-6 ">

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
          <div className="flex flex-col sm:flex-row items-start  lg:space-x-6 ">

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
          <div className="flex flex-col sm:flex-row items-start  lg:space-x-6 ">

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
      </>
    )
}
