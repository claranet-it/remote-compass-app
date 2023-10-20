import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RadioFieldset } from "./RadioFieldset";
import Spinner from "../../assets/spinner";
import axios from "axios";

export type Inputs = {
  title: string;
  presenceOffice: string;
  home: string;
  compensation: string;
  meetings: string;
  comunication: string;
  governance: string;
};

type PropsCompass = {
  onDataReceived: (data: ResponseApi) => void;
};

export type ResponseApi = {
  data: {
    message: string;
  };
};

export const CompassForm: React.FC<PropsCompass> = ({ onDataReceived }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const getSvg = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      onDataReceived(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = async () => {
    const multipleValues = getValues();
    console.log("Multi", multipleValues);

    await getSvg();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-xl font-bold text-gray-600">
              Title
            </label>
            <input
              placeholder="Widget title"
              className="border border-gray-300 p-3 w-full rounded"
            />
          </div>

          <fieldset className="border-solid border-2 border-tertiary-light rounded-md p-2">
            <legend className="block mb-2 text-xl font-bold text-gray-600  p-2">
              Presence in the office
            </legend>

            <div className="mb-4">
              <div className="flex flex-col items-start">
                <RadioFieldset
                  nameRegister="presenceOffice"
                  options={[
                    "In-office 5/5",
                    "In-office 1...4/5",
                    "Office-first Hybrid",
                    "Remote-first Hybrid",
                    "Remote-only",
                  ]}
                  register={register}
                />
              </div>
              {errors.presenceOffice && (
                <span className="text-danger-form-light">
                  Questo campo e' obbligatorio
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="border-solid border-2 border-tertiary-light rounded-md p-2">
            <legend className="block mb-2 text-xl font-bold text-gray-600  p-2">
              Home
            </legend>

            <div className="mb-4">
              <div className="flex flex-col items-start ">
                <RadioFieldset
                  nameRegister="home"
                  options={[
                    "Live in office location",
                    "Live in 1h from the office",
                    "Anywhere in the country",
                    "Anywhere in E.U.",
                    "Anywhere with Internet",
                  ]}
                  register={register}
                />
              </div>
              {errors.home && (
                <span className="text-danger-form-light">
                  Questo campo e' obbligatorio
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="border-solid border-2 border-tertiary-light rounded-md p-2">
            <legend className="block mb-2 text-xl font-bold text-gray-600  p-2">
              Compensation
            </legend>

            <div className="mb-4">
              <div className="flex flex-col items-start ">
                <RadioFieldset
                  nameRegister="compensation"
                  options={[
                    "Dependent on location",
                    "",
                    "Weakly dependent on location",
                    "",
                    "Indipendent on location",
                  ]}
                  register={register}
                />
              </div>
              {errors.compensation && (
                <span className="text-danger-form-light">
                  Questo campo e' obbligatorio
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="border-solid border-2 border-tertiary-light rounded-md p-2">
            <legend className="block mb-2 text-xl font-bold text-gray-600  p-2">
              Meetings
            </legend>
            <div className="mb-4">
              <div className="flex flex-col items-start ">
                <RadioFieldset
                  nameRegister="meetings"
                  options={[
                    "Office 100%",
                    "Possibility to partecipate remotly",
                    "Possibility to stay in the office with the headphones",
                    "Remote 99.9% we rent a space when we need",
                    "Remote 100%",
                  ]}
                  register={register}
                />
              </div>
              {errors.meetings && (
                <span className="text-danger-form-light">
                  Questo campo e' obbligatorio
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="border-solid border-2 border-tertiary-light rounded-md p-2">
            <legend className="block mb-2 text-xl font-bold text-gray-600  p-2">
              Comunication
            </legend>
            <div className="mb-4">
              <div className="flex flex-col items-start ">
                <RadioFieldset
                  nameRegister="comunication"
                  options={["Synchronous 100%", "", "", "", "Asynchronous 100%"]}
                  register={register}
                />
              </div>
              {errors.comunication && (
                <span className="text-danger-form-light">
                  Questo campo e' obbligatorio
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="border-solid border-2 border-tertiary-light rounded-md p-2">
            <legend className="block mb-2 text-xl font-bold text-gray-600 p-2">
              Governance
            </legend>
            <div className="mb-4">
              <div className="flex flex-col items-start ">
                <RadioFieldset
                  nameRegister="governance"
                  options={[
                    "Decision ar just told",
                    "Decision are explained",
                    "Stakeholder are consulted before decide",
                    "Stakeholder are consulted + transparency",
                    "Open governance",
                  ]}
                  register={register}
                />
              </div>
              {errors.governance && (
                <span className="text-danger-form-light">
                  Questo campo e' obbligatorio
                </span>
              )}
            </div>
          </fieldset>

          <div className="flex justify-end">
            <button className="inline-flex items-center justify-center font-semibold leading-6  shadow rounded-lg active:scale-95 opacity-80 w-full md:w-40  text-white bg-primary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer">
              {isLoading ? (
                <>
                  <Spinner /> <span>Processing...</span>
                </>
              ) : (
                <span>Ottieni svg</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
