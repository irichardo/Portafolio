import React from 'react'
import Link from "next/link";
import { blogdata } from "@/libs/types";
import { useRouter } from "next/router";
import Image from "next/image";

export default function BlogSection({resData}:{resData:blogdata[]}){
    console.log(resData);
    const Router = useRouter();
    const MappedData = React.memo(({ src }: { src: string }) => {
        return (
          <Image
            src={src}
            alt="Imagen no encontrada"
            className="object-cover"
            priority
            fill
          />
        );
      });
      MappedData.displayName = "Memorize";

    return(
        resData.map((a) => {
            return (
              <div key={a.id} className="w-4/5 relative m-2 bg-[#4F518C] shadow-inner shadow-white">
                  <div className='text-sm m-2 w-1/6 text-center bg-[#907AD6] text-white'>{a.fecha}</div>
                <div className="w-full h-[20%] items-center justify-center flex p-4">
                  <fieldset className="border-t w-1/2 border-white flex">
                    <legend className="mx-auto px-4 text-2x font-light text-white">
                      {a.title}
                    </legend>
                  </fieldset>
                </div>
                <div className="w-full h-[45vh] flex justify-center">
                  <div className="w-5/6 h-2/3 flex">
                    <div className="w-1/2 h-[40vh] flex items-center justify-center">
                      <div className="w-[80%] h-[80%] text-[#7FDEFF] flex relative items-center text-center">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin dictum nisi sed odio sodales gravida.
                          Nullam aliquam lectus id porta rhoncus.
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`${Router.pathname}/${a.id}`}
                      className="w-2/4 h-[40vh] relative"
                    >
                      <MappedData src={a.imagen} />
                      <div className="relative h-full text-xl font-light z-10 justify-center items-center flex text-white hover:bg-black hover:text-3xl hover:bg-opacity-80 transition-all bg-black bg-opacity-40">
                        Saber más
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
    )
}