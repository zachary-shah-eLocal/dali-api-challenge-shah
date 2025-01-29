import { BiSearchAlt, BiSolidMapPin } from "react-icons/bi";

const Inputs = () => {
  return (
    <div
        className="flex flex-row justify-center my-6"
    >
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input 
                type="text" 
                placeholder="search for a city..."
                className="text-gray-500 text-xl font-light bg-white p-1 
                rounded-md w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
            />

            <BiSearchAlt
                size={35} 
                className="cursor-pointer transition ease-out hover:scale-125"
            />
            <BiSolidMapPin
                size={35} 
                className="cursor-pointer transition ease-out hover:scale-125"
           />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-light transition ease-out hover:scale-125 cursor-pointer">
                °F
            </button>
            <p className="text-2xl font-light mx-1 cursor-default">|</p>
            <button className="text-2xl font-light transition ease-out hover:scale-125 cursor-pointer">
                °C
            </button>
        </div>
    </div>
  )
}

export default Inputs