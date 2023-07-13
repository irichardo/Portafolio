import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AboutMeIndex } from "./aboutParagraphIndex"
import { AiFillCloseSquare } from "react-icons/ai"
import Image from 'next/image'
import { getPagesByName, getPosts } from "@/libs/posts"


export default function AboutMe() {

  const [viewerOpen, setViewer] = useState(false)

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



  /**         HandlersCV               ***/

  const viewerHandler = () => {
    setViewer(!viewerOpen);
  }

  const dowloadHandlerPdf = () => {
    const Link = document.createElement('a');
    Link.href = './'
    Link.download = 'cv.pdf';
    Link.click();
  }

  return (
    <div className=' w-full md:w-[80%] h-[80%] md:h-full items-center justify-center grid md:flex md:rounded-lg bg-gray-100'>
      {viewerOpen && <motion.div initial={{scale:0.5}} animate={{scale:1}} className='w-screen h-screen bg-slate-900 flex items-center justify-center z-30 bg-opacity-50 fixed top-0'>
        <div className="w-full  md:w-1/3 min-h-full flex items-center justify-center relative">
          <AiFillCloseSquare size={"3rem"} className="absolute right-0 top-[5vh] md:top-2 bg-gray-200 rounded-md cursor-pointer" onClick={viewerHandler} />
          {/* <button className="w-[5vh] h-[5vh] absolute right-0 top-5 bg-red-500 rounded-md" onClick={viewerHandler}>X</button> */}
          {
            <Image src={'/cv.jpg'} width={500} height={400} alt="portafolio">
            </Image>
          }
        </div>
      </motion.div>}
      {/* PORTRAIT  */}
      <div className="  md:w-1/3 h-full flex justify-center items-center">
        <div className="w-full h-3/5 relative flex items-center justify-center">
          <div className="">
            <Image src={'https://images.pexels.com/photos/430546/pexels-photo-430546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={400} height={600} alt="Intento" />
          </div>
          <div className="w-full h-full border-[0.5px] border-white absolute" />
        </div>
      </div>
      {/*            TEXT             */}
      <div className=" w-full md:w-1/2 h-full items-center flex flex-col justify-center">
        <div className="w-full md:w-[90%] h-5/6 items-center justify-end flex flex-col">
          <ul className='w-full h-[40vh] lg:h-5/6 desktopLarge:h-4/6 relative flex flex-col items-center overflow-y-scroll text-xs md:text-sm font-chakra  custom-scrollbar md:shadow-inner shadow-slate-600'>
            {
              AboutMeIndex.map(a => {
                return <motion.div
                  className="w-full h-full"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  key={a.id}
                >   <motion.div className="card w-full h-full items-center flex justify-center" variants={cardVariants}>
                    <li className={`w-[90%] p-4 mb-5 min-h-[30%] flex text-center justify-center items-center font-semibold shadow-md shadow-gray-500 rounded-md bg-blue-100`}  >
                      {a.paragraph}
                    </li>
                  </motion.div>
                </motion.div>
              })
            }
          </ul>
        </div>
        <div className='w-full md:w-full md:h-2/6  flex items-center justify-center relative text-xs md:text-base font-chakra'>
          <button className=' w-[40%] sm:w-[30%] h-1/2 md:w-[20vh] md:h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg' onClick={dowloadHandlerPdf}>
            DESCARGAR CV
          </button>
          <button onClick={viewerHandler} className='w-[40%] sm:w-[30%] h-1/2 md:w-2/5 md:h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg'>
            VER CV
          </button>
        </div>
      </div>
    </div>
  )
}