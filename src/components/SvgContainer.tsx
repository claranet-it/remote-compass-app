//import Copy from "../assets/copy"

type PropsSvgContainer = {
    data: string | undefined
}


export const SvgContainer: React.FC<PropsSvgContainer> = ({
    data
}) => {

    return (

        
<div className="p-20 w-full md:w-1/2">
  <div className="bg-white rounded-lg shadow-lg">
    <img src={data} alt="" className="rounded-t-lg"/>
    <div className="p-6">
      <h2 className="font-bold mb-2 text-2xl text-purple-800">Card with an image
      </h2>
      <p className="text-purple-700 mb-2">This is a little bit better of a card!</p>
      <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
    </div>

  </div>
</div>
      
    )


}


  {/* <div className={`flex items-center mt-4 p-10`} >
            <img src={data} width="100%" height="100%" />
            <div className="flex m-4 items-center justify-center space-x-4 w-100">
                <input disabled
                    className="border border-gray-300 shadow p-3 w-full rounded flex flex-row items-center justify-center w-100"
                    value={data}
                />
                <button title="Copia nella clipboard" className="inline-flex items-center justify-center  shadow rounded-lg active:scale-95 opacity-80  text-white bg-primary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer w-16">
                    <Copy/>
                </button>
            </div>
        </div> */}