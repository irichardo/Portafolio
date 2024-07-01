import { useEffect, useState } from "react";
import { changeSectionHook } from "@/hook/sizeState";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  const { handlerChangeSize, left, right } = changeSectionHook("section_1", 1);
  const [test , setTest] = useState(false)

  const testHandler = () =>{
    if(left){
      setTimeout(()=>{
        setTest(true)
      },1000)
    }
    else {
      setTimeout(()=>{
        setTest(false)
    })}
  }

  return (
    <section
      className={`${
        left || right ? "h-2/5" : "h-1/5"
      } w-full flex relative transition-all ease-in-out duration-300`}
    >
      <div
        data-position="section-left"
        className={`  ${
          left ? "w-2/3" : "w-1/3"
        } h-full  flex flex-col transition-all duration-300 `}
        onClick={handlerChangeSize}
      >
        <div
          className={`${
            left ? "h-full" : "h-full"
          } flex flex-col justify-center items-center bg-pink-600`}
        >
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/logonobg.svg"
              width={200}
              height={200}
              alt="RicharHD personal branding"
              priority
            />
          </motion.div>
          {left && (
            <p className={`text-white h-0 text-2xl text-center`}>
              Richard HD Desarrollador web
            </p>
          )}
        </div>
      </div>
      <div
        data-position="section-right"
        className={`h-full w-2/3  transition-all duration-300 flex flex-col ${right?"justify-start":"justify-center"} items-center`}
        onClick={handlerChangeSize}
      >
        <div className={`  ${right? " w-56 h-56 rounded-full ":'w-full h-full  bg-red-500'} transition-all duration-300 text-2xl text-white grid place-content-center relative`}>
        {
          right?""
          // <Image src={'/Profile.jpg'} fill sizes="(min-width:300px) 50vh, 100vw" alt="Si"/>
          :"Quien soy yo"
        }
        </div>
          {
            right && <p className={`text-white text-xl text-center ${!right?'h-0':' h-1/2'} items-center justify-center flex w-3/4 transition-all duration-300`}>
             Hola , mi nombre es Ricardo! ✨
             Soy un desarrolador web, Disfruto tanto del mundo del backend asi como tambien del frontend.
             Este es mi segundo portafolio.
          </p>
          }
      </div>
    </section>
  );
}
