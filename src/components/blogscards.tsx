import React from "react";
import Link from "next/link";
import { blogdata } from "@/libs/types";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogCards = ({ resData }: { resData: blogdata[] }) => {
  const Router = useRouter();
  return resData.map((a) => {
    return (
      <motion.div 
      initial={{x:-700}}
      animate={{x:0}}
      transition={{ease:'easeInOut'}}
      className="sm:w-3/5 md:w-3/5 rounded-md overflow-hidden relative m-2" key={a.id}>
        <div className="w-full">
          <div className=" w-full h-full flex flex-col p-4 rounded-t-md bg-gray-950">
            <div className="w-full flex justify-end">
              <div className=" w-2/6 md:w-1/6 text-center text-xs bg-purple-400 text-white rounded-md m-2">
                {a.date}
              </div>
            </div>
            <div className="w-full items-center flex flex-col justify-center md::overflow-hidden">
              <fieldset className="w-full border-t md:w-[80%] border-t-purple-400">
                <legend className="mx-auto px-4 text-white border-l-2 border-r-2 border-r-purple-400 border-l-purple-400">
                  {a.title}
                </legend>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="w-full h-5/6 relative grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="w-full bg-blue-400 relative order-2 h-[30vh] md:h-[40vh]">
            <Link href={`${Router.pathname}/${a.id}`}>
              {a.cover && (
                <Image src={a.cover} alt="Imagen no encontrada" fill/>
              )}
              <div className="w-full h-full bg-gray-950 hover:bg-opacity-80 bg-opacity-50 hover:text-2xl absolute top-0 flex justify-center items-center text-white transition-all ease-in-out">
                Learn more..
              </div>
            </Link>
          </div>
          {/*  1  */}
          <div className="w-full min-h-[10vh] flex items-center justify-center order-1 bg-gray-950 overflow-hidden">
            <div className="w-full md:w-[90%] h-full text-sm md:text-base flex relative justify-center items-center text-center text-white ">
              {a.preview && a.preview}
            </div>
          </div>
        </div>
      </motion.div>
    );
  });
}

export default React.memo(BlogCards)