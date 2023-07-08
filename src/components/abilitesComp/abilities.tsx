import React from "react";
import TechComp from "./techComp";
import AbilitiesCircle from "./abilitiescircle";
import { abilities } from "@/libs";

export default function Habilidades() {
  return (
    <>
      <div className="w-full h-full md:flex overflow-hidden">
        <div className="md:h-full md:w-1/2 h-full w-full">
          <TechComp />
        </div>
        <div className="h-full md:w-1/2 flex items-center justify-center">
          <div className="h-5/6 w-full md:w-3/5 flex flex-col">
           <div className="w-full h-1/6 justify-center items-center text-white text-3xl flex p-10"> Habilidades</div>
           <div className="w-full h-5/6 grid grid-cols-2 grid-rows-2 place-items-center">
               {
                abilities.map(a=><AbilitiesCircle color={a.color} abilities={a.name} id={a.name} key={a.name}/>)
               }
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
