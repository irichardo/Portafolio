import { circleData } from "@/libs/types"

export default function AbilitiesCircle({abilities, id }:circleData){
    
    return <span className=" w-[20vh] w-min-[10vh] h-min-[10vh] h-[20vh] text-white justify-center items-center flex text-sm md:text-base md:p-2 lg:p-0" id={id}>
        <span className="w-[90%] h-[90%] bg-gray-900 rounded-full items-center flex justify-center shadow-lg hover:shadow-none hover:w-full hover:h-full transition-all">
        {abilities}
        </span>
        </span>
}