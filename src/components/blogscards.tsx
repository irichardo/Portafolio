import React from 'react'
import Link from 'next/link'
import { blogdata } from '@/libs/types'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function BlogCards({ resData }: { resData: blogdata[] }) {
  const Router = useRouter()

  return (
    resData.map((a) => {
      return (
        <div key={a.id} className='w-full mt-5 sm:mt-0 md:h-[30vh] md:w-full lg:h-auto lg:w-4/6 desktopLarge:w-3/4 md:m-5 bg-[#5C677D] delay-100 lg:rounded-md shadow-md relative'>
          {/* <div className='w-full h-[20%] items-center justify-center flex p-4 bg-red-400'>
          </div> */}
          <div className='w-full h-[20vh] md:h-full lg:h-[45vh] flex justify-center'>
          <Link
              href={`${Router.pathname}/${a.id}`}
              className='w-1/2 min-h-full relative hidden sm:block'
            >
              {a.cover && <Image
                src={a.cover}
                alt='Imagen no encontrada'
                sizes='(max-width: 350px) 100vw'
                className='lg:rounded-md'
                fill
                priority
              />}
              <div className='relative h-full text-xl font-light justify-center items-center flex text-white lg:rounded-md hover:bg-black hover:text-3xl hover:bg-opacity-80 transition-all bg-black bg-opacity-40'>
                Lear more..
              </div>
            </Link>
            <div className='sm:w-1/2 h-full flex flex-col '>
              <div className='w-full flex justify-end'>
              <div className='md:text-sm text-[10px] m-2 w-2/6 text-center bg-red-500 text-white rounded-md'>{a.date}</div>
              </div>
              <div className='w-full items-center flex flex-col justify-center md::overflow-hidden'>
                <fieldset className='border-t w-[80%]'>
                  <legend className='mx-auto px-4 text-sm sm:text-xl font-light text-white'>
                    {a.title}
                  </legend>
                </fieldset>
              </div>
              <div className='w-full h-full flex justify-center'>
                <div className='w-[80%] h-[90%] flex relative items-center text-center text-white text-xs sm:text-lg'>
                  {
                    a.preview && a.preview
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}
