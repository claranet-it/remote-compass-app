
type PropsSvgContainer = {
    data: string | undefined
}
export const SvgContainer: React.FC<PropsSvgContainer> = ({
    data,
}) => {

    return (
        <div className="flex items-center mt-4 p-10">
            <img src={data} width="50%" height="70%"/>
            <div className="flex m-4 items-center justify-center space-x-4">
                <input disabled
                    className="border border-gray-300 shadow p-3 w-full rounded flex flex-row items-center justify-center"
                    value={data}
                />
                <button className="inline-flex items-center justify-center font-semibold leading-6  shadow rounded-lg active:scale-95 opacity-80 w-full text-white bg-primary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer">
                    Copia
                </button>
            </div>
        </div>
    )


}
