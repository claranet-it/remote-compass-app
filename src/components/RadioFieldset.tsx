import { useMemo } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../App";


type PropsRadio = {
    nameRegister: keyof Inputs;
    options: string[];
    register: UseFormRegister<Inputs>

};

export const RadioFieldset: React.FC<PropsRadio> = ({
    nameRegister,
    options,
    register
}) => {
    const values = useMemo(() => ["1", "2", "3", "4", "5"], []);

    return values.map((value, index) => (
            <label className="flex p-2" key={index}>
                <input type="radio"
                    {...register(nameRegister, { required: true })}
                    value={value}
                    name={nameRegister as string}
                    className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
                <label htmlFor={nameRegister as string} className="ml-2 text-gray-700">{options[index]}</label>
            </label>
        ))
}
