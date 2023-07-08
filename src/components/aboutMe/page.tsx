import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AboutMeIndex } from "./aboutParagraphIndex"
import Image from 'next/image'

export default function AboutMe() {

  const cardVariants = {
    offscreen: {
      y: 100,
      rotate: 0
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className=' w-full md:w-[80%] h-[90%] md:h-full items-center justify-center grid md:flex md:rounded-lg bg-gray-100'>
        {/* PORTRAIT  */}
        <div className="  md:w-1/3 h-full flex justify-center items-center">
          <div className="w-full h-3/5 relative flex items-center justify-center">
           {/* <div className="w-full h-full bg-purple-400 relative z-10"> */}
           <div className="">
            <Image src={'https://images.pexels.com/photos/430546/pexels-photo-430546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={400} height={600} alt="Intento" />
           </div>
           <div className="w-full h-full border-[0.5px] border-white absolute"/>
           <div className="w-full h-full border-[0.5px] border-black absolute right-5 bottom-5 hidden  md:block"/>
            <div className="w-full h-full border-[0.5px] border-black absolute left-5 top-5 hidden md:block"/>
           </div>
           
        </div>
        {/*            TEXT             */}
        <div className=" w-full md:w-1/2 h-full items-center flex flex-col justify-center ">
          <div className="w-full md:w-[80%] h-full items-center justify-end flex flex-col">
      <ul className='w-full h-[40vh] lg:h-4/6 desktopLarge:h-4/6 relative flex flex-col items-center overflow-y-scroll text-xs font-montserrat  custom-scrollbar md:shadow-inner shadow-slate-600'>
              {
                AboutMeIndex.map(a => {
                  return <motion.div
                    className="w-full h-full"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    key={a.id}
                  >   <motion.div className="card" variants={cardVariants}>
                      <li className={`w-full p-4 mt-5 min-h-[30%] flex text-center justify-center items-center font-semibold shadow-md shadow-gray-500 rounded-md bg-blue-100`}  >
                        {a.paragraph}
                      </li>
                    </motion.div>
                  </motion.div>
                })
              }
           </ul>
          </div>
           <div className='w-full md:w-full md:h-2/6  flex items-center justify-center relative text-xs font-alegra'>
              <button className=' w-[40%] sm:w-[30%] h-1/2 md:w-[20vh] md:h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg'>
                DESCARGAR CV
              </button>
              <button className='w-[40%] sm:w-[30%] h-1/2 md:w-2/5 md:h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg'>
                VER CV
              </button>
            </div>
           </div>
    </div>
  )
}
