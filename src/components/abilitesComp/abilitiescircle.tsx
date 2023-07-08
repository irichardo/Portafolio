import { circleData } from "@/libs/types"

export default function AbilitiesCircle({abilities, id }:circleData){

//filter: drop-shadow(0 0 15px #db3eb1) drop-shadow(0 0 50px #db3eb1) contrast(2) brightness(2);
    return <span className=" w-[20vh] w-min-[10vh] h-min-[10vh] h-[20vh] text-white justify-center items-center flex neonText text-sm md:text-base md:p-2 lg:p-0" id={id}>
        <span className="w-[90%] h-[90%] bg-gray-900  items-center flex justify-center rounded-md shadow-lg shadow-gray-950 hover:shadow-none hover:w-full hover:h-full transition-all">
        {abilities}
        </span>
        </span>
}