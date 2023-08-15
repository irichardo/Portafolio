import { abilitiesData } from "@/libs/types";
import { useState } from "react";

export default function AbilitiesCircle({
  abilities,
  id,
  description,
  color,
}: abilitiesData) {
  const [onMouse, SetOnMouse] = useState(false);

  const mouseHandlerEntry = () => {
    SetOnMouse(true);
  };
  const mouseHandlerLeave = () => {
    SetOnMouse(false);
  };

  return (
    <div
      onMouseEnter={mouseHandlerEntry}
      onMouseLeave={mouseHandlerLeave}
      className={`w-[15vh] h-[15vh] hover:w-[20vh] hover:h-[35vh] md:hover:h-[30vh] relative lg:w-[30vh] lg:h-[30vh] lg:hover:w-[60vh] bg-opacity-50 rounded-full hover:rounded-md text-gray-900 text-center justify-center items-center flex text-sm hover:text-xs md:text-base md:hover:text-lg m-4 transition-all ease-in-out bg-red-400 overflow-hidden font-montserrat font-bold`}
      style={{ backgroundColor: color, }}
      id={id}
    > 
     <div className="w-[2vh] h-[2vh] bg-red-900 rounded-full absolute top-2 items-center flex justify-center">
      <div className=" bg-red-950 w-[1vh] h-[1vh] rounded-full"/>
     </div>
      {!onMouse ? 
      abilities : description}
    </div>
  );
}
