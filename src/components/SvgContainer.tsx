import Copy from "../assets/copy"

type PropsSvgContainer = {
    data: string | undefined
}


export const SvgContainer: React.FC<PropsSvgContainer> = ({
    data,
}) => {

    return (
        <div className={`flex items-center mt-4 p-10`} >
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
        </div>
    )


}
