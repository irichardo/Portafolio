import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import React, { useMemo, useEffect } from "react";

export async function getServerSideProps(){
    const res = await fetch("http://localhost:3001/posts");
    const resData = await res.json()
    return{
        props:{
            resData
        }
    }
}


export default function Blog({resData}:{resData:any}) {
  const Router = useRouter();
  const MappedData = React.memo(({src}:{src:string}) => {
   return <Image src={src} alt="Imagen no encontrada" className="object-cover" priority fill/>
  });
  MappedData.displayName = 'Memorize'


  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      const scrollPosition = {
        x: window.scrollX,
        y: window.scrollY,
      };
      // Save the actual position in the session storage for when
      //the user has to return
      sessionStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
    };
  
    Router.events.on('beforeHistoryChange', handleBeforeHistoryChange);
  
    return () => {
      Router.events.off('beforeHistoryChange', handleBeforeHistoryChange);
    };
  }, []);

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <div className="w-screen h-screen flex flex-col items-center">
        <div className="w-full h-4 flex items-center justify-center bg-pink-300">
          <div className="w-44 h-44 rounded-full bg-black m-4"></div>
        </div>
        <div className="w-[90%] h-auto inline-grid place-items-center grid-cols-1 grid-rows-4">
          {resData.map((a: any) => {
            return (
              <Link
                href={`${Router.pathname}/${a.id}`}
                key={a.id}
                className="w-full h-60 relative"
              >
                <MappedData src={a.imagen} />
                <div className="relative w-full text-xl font-light h-full z-10 justify-center items-center flex text-white hover:bg-black hover:text-3xl hover:bg-opacity-80 transition-all bg-black bg-opacity-60">
                  {a.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
