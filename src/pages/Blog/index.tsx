import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import {useMemo} from 'react'

export default function Blog(){
   const {isLoading , error , data} =useQuery('blog', ()=> fetch('http://localhost:3001/posts').then((res)=> res.json()))
   const memorizedData = useMemo(()=> data, [data])
   const Router = useRouter()

    return(
    <main className="w-screen h-screen overflow-x-hidden">
        <div className="w-screen h-screen flex flex-col items-center">
            <div className="w-full h-full flex items-center justify-center bg-pink-300">
                <div className="w-44 h-44 rounded-full bg-black m-4"></div>
            </div>
            <div className="w-[90%] h-auto inline-grid place-items-center grid-cols-1 grid-rows-4">
                {memorizedData?.map((a:any)=>{
                        return<Link href={`${Router.pathname}/${a.id}`} key={a.id}  className="w-full h-60 relative">
                            <Image priority src={a.imagen} alt='Imagen no encontrada' fill className="object-cover absolute z-10" crossOrigin="anonymous" style={{opacity:'0.95'}}/>
                            <div className="relative w-full text-xl font-light h-full z-10 justify-center items-center flex text-white hover:bg-black hover:text-3xl hover:bg-opacity-80 transition-all bg-black bg-opacity-60">{a.title}</div>
                        </Link>
                    })
                }
            </div>
        </div>
    </main>
)}