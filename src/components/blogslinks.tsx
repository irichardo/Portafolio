import React from 'react'
import Link from 'next/link'
import { blogdata } from '@/libs/types'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function BlogSection ({ resData }:{resData:blogdata[]}) {
  const Router = useRouter()

  /*   Memorize Image in cache    */
  const MappedData = React.memo(({ src }: { src: string }) => {
    return (
      <Image
        src={src}
        alt='Imagen no encontrada'
        className='object-cover transition-all rounded-md'
        priority
        fill
      />
    )
  })
  MappedData.displayName = 'Memorize'
  /**************************************/
  
  return (
    resData.map((a) => {
      return (
        <div key={a.id} className='w-3/5 relative m-10 bg-[#5C677D] delay-100 rounded-md shadow-md'>
          <div className='text-sm m-2 w-1/6 text-center bg-red-500 text-white rounded-md'>{a.date}</div>
          <div className='w-full h-[20%] items-center justify-center flex p-4'>
            <fieldset className='border-t w-1/2 border-white flex'>
              <legend className='mx-auto px-4 text-2xl font-light text-white'>
                {a.title}
              </legend>
            </fieldset>
          </div>
          <div className='w-full h-[45vh] flex justify-center'>
            <div className='w-5/6 h-2/3 flex'>
              <div className='w-1/2 h-[40vh] flex items-center justify-center'>
                <div className='w-[80%] h-[80%] flex relative items-center text-center text-white text-lg'>
                   {
                   a.preview&&a.preview
                   }
                </div>
              </div>
              <Link
                href={`${Router.pathname}/${a.id}`}
                className='w-2/4 h-[40vh] relative'
              >
                {a.cover ? <MappedData src={a.cover} /> : null}
                <div className='relative h-full text-xl font-light justify-center items-center flex text-white border-[0.5px] border-gray-500 rounded-md hover:bg-black hover:text-3xl hover:bg-opacity-80 transition-all bg-black bg-opacity-40'>
                  Saber más
                </div>
              </Link>
            </div>
          </div>
        </div>
      )
    })
  )
}
