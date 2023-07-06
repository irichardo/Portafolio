import React from "react";
import TechComp from "./techComp/techComp";

export default function Habilidades() {
  return (
    <>
      <div className="w-full h-full flex overflow-hidden">
        <div className="h-full w-1/2">
          <TechComp />
        </div>
        <div className="h-full w-1/2 flex items-center justify-center">
          <div className="h-5/6 w-3/5 rounded-3xl">
            <div className="h-1/6 w-full flex justify-center items-center text-3xl text-white">
              Habilidades
            </div>
            <div className="w-auto flex items-center justify-center"></div>
            <div className="h-5/6 w-fulll bg-slate-950 bg-opacity-50 flex justify-center items-center rounded-3xl">
              <div className="w-5/6 h-full flex flex-col justify-center">
                <div className="w-full h-1/3 flex items-center justify-around text-xl">
                  <div className="w-[17vh] h-[17vh] bg-gradient-to-r via-purple-500 from-red-400 to-gray-500 background-animate flex justify-center items-center rounded-full ">
                    <div className="w-[16vh] h-[16vh] bg-black text-white items-center justify-center flex rounded-full font-chakra">
                      Empatia
                    </div>
                  </div>
                  <div className="w-[17vh] h-[17vh] bg-gradient-to-r from-white via-gray-500 to-blue-400 background-animate rounded-full flex justify-center items-center">
                    <div className="w-[16vh] h-[16vh] bg-black text-white items-center justify-center flex rounded-full">
                      Liderazgo
                    </div>
                  </div>
                  <div className="w-[17vh] h-[17vh] bg-gradient-to-r from-green-400 via-sky-300 to-yellow-500 background-animate rounded-full flex justify-center items-center ">
                    <div className="w-[16vh] h-[16vh] bg-black text-white items-center justify-center flex rounded-full">
                      comunicativo
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/3 flex items-center justify-around text-xl">
                <div className="w-[15vh] h-[15vh] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate rounded-full flex justify-center items-center">
                    <div className="w-[14vh] h-[14vh] bg-black text-white items-center justify-center flex rounded-full">
                      Proactivo
                    </div>
                  </div>
                  <div className="w-[15vh] h-[15vh] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate rounded-full flex justify-center items-center ">
                    <div className="w-[14vh] h-[14vh] bg-black text-white items-center justify-center flex rounded-full">
                      Adaptable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
