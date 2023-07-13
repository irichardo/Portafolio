import React from "react";
import Link from "next/link";
import { blogdata } from "@/libs/types";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCards({ resData }: { resData: blogdata[] }) {
  const Router = useRouter();
  return resData.map((a) => {
    return (
      <motion.div
        key={a.id}
        className="w-full mt-5 sm:mt-0 md:h-[30vh] md:w-full lg:h-auto lg:w-4/6 desktopLarge:w-4/6 md:m-5 bg-black lg:rounded-md shadow-md relative font-chakra"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-[20vh] md:h-full lg:h-[45vh] flex justify-center">
          <Link
            href={`${Router.pathname}/${a.id}`}
            className="w-1/2 min-h-full relative hidden sm:block"
          >
            {a.cover && (
              <Image
                src={a.cover}
                alt="Imagen no encontrada"
                sizes="(max-width: 350px) 100vw"
                className="lg:rounded-md"
                fill
                priority
              />
            )}
            <div className="relative h-full text-xl font-light justify-center items-center flex text-white lg:rounded-md hover:bg-black hover:text-3xl hover:bg-opacity-80 transition-all bg-black bg-opacity-40">
              Learn more..
            </div>
          </Link>
          <div className="sm:w-1/2 h-full flex flex-col ">
            <div className="w-full flex justify-end">
              <div className="md:text-sm text-[10px] m-2 w-2/6 text-center bg-purple-500 text-white rounded-md">
                {a.date}
              </div>
            </div>
            <div className="w-full items-center flex flex-col justify-center md::overflow-hidden">
              <fieldset className="border-t w-[80%] border-t-purple-400">
                <legend className="mx-auto px-4 text-sm sm:text-xl font-light text-white border-l-2 border-r-2 border-r-purple-400 border-l-purple-400">
                  {a.title}
                </legend>
              </fieldset>
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="w-[80%] h-[90%] flex relative items-center text-center text-white text-xs sm:text-lg">
                {a.preview && a.preview}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  });
}
