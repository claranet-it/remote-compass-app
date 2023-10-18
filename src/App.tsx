import React from "react";
import { FormEvent, useEffect, useState } from "react";
import Confetti from "./components/Confetti";

export default function App() {

const [element, setElement] = useState(false)
const [confetti, setConfetti] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Click submit form')

    setElement(true)
    
  };

  useEffect(() => {
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }, 0); 
      setTimeout(() => {
        setConfetti(true)
      }, 1000)
    }
  }, [element]);

  return (
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

            <label htmlFor="PRESENCE IN THE OFFICE" className="block mb-2 font-bold text-gray-600">Presence in the office</label>
            <div className="flex items-center mb-4">
              <input type="radio" id="opzione1" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione1" className="ml-2 text-gray-700">Opzione 1</label>

              <input type="radio" id="opzione2" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione2" className="ml-2 text-gray-700">Opzione 2</label>
            </div>

            <label htmlFor="COMPENSATION" className="block mb-2 font-bold text-gray-600">Compensation</label>
            <div className="flex items-center mb-4">

            <input type="radio" id="opzione1" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione1" className="ml-2 text-gray-700">Opzione 1</label>

              <input type="radio" id="opzione2" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione2" className="ml-2 text-gray-700">Opzione 2</label>
            </div>

            <label htmlFor="MEETINGS" className="block mb-2 font-bold text-gray-600">Meetings</label>
            <div className="flex items-center mb-4">
            <input type="radio" id="opzione1" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione1" className="ml-2 text-gray-700">Opzione 1</label>

              <input type="radio" id="opzione2" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione2" className="ml-2 text-gray-700">Opzione 2</label>
            </div>

            <label htmlFor="COMUNICATION" className="block mb-2 font-bold text-gray-600">Communication</label>
            <div className="flex items-center mb-4">
            <input type="radio" id="opzione1" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione1" className="ml-2 text-gray-700">Opzione 1</label>

              <input type="radio" id="opzione2" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione2" className="ml-2 text-gray-700">Opzione 2</label>
            </div>

            <label htmlFor="GOVERNANCE" className="block mb-2 font-bold text-gray-600">Governance</label>
            <div className="flex items-center mb-4">
            <input type="radio" id="opzione1" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione1" className="ml-2 text-gray-700">Opzione 1</label>

              <input type="radio" id="opzione2" name="opzione" className="inline-block ml-2 h-5 w-5 border border-gray-300 accent-primary-light rounded-full transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer" />
              <label htmlFor="opzione2" className="ml-2 text-gray-700">Opzione 2</label>
            </div>

            <button className="bg-primary-light active:scale-95 opacity-80 block w-full text-white font-bold p-4 rounded-lg transition duration-300 ease-in-out hover:opacity-100">Ottieni SVG</button>
          </form>
        </div>

        {element && (
          <>
        <div style={{ height: "800px"}}></div>
        {confetti && <Confetti/>}
        </>
        )} 
      </div>
    </div>
  )
}
