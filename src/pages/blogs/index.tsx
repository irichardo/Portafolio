import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { blogdata } from '@/libs/types'
import BlogSection from '@/components/blogslinks'
import ErrorMessage from '@/components/error'
import Paginate from '@/components/utils/paginated'
import { GlobalContext } from 'context/globalContext'
import { getPosts } from '@/libs/posts'
import RootLayout from './layout'
import { FaLinkedin } from 'react-icons/fa'


//Para solicitar datos sin perder las propiedades de staticProps

export const revalidate = 10

export async function getStaticProps() {  
try {
    const allpages = await getPosts()
    return {
      props: {
        resData: allpages,
        error: null
      },
      revalidate:60
    }
  } catch (error: any) {
    const errorMessage = ['Fallo en la solicitud:', error.message]
    return {
      props: {
        resData: null,
        error: errorMessage
      }
    }
  }
}


/*BLOG PAGE */

export default function Blog ({
  resData,
  error
}: {
  resData: blogdata[];
  error: any;
}) {

  //context for create a persistance pagination
  const { actualPage, setActualPage } = useContext(GlobalContext)

  /* Paginate Logic */
  const initData = actualPage
  const itemsPerPage = 3
  const initArray = (initData - 1) * itemsPerPage
  const endArray = initArray + itemsPerPage
  const sliceData = resData?.slice(initArray, endArray)

  const setPageHandler = (event: number) => {
    setActualPage(event)
  }
  /***************************/

  return (
    <RootLayout>
    <main className='w-screen h-screen '>
      <div className='w-screen min-h-screen flex flex-col items-center '>
        <div className='w-full h-[30vh] flex items-center justify-center bg-[#4F518C] '>
          <div className='w-44 h-44 rounded-full bg-black m-4' />
        </div>
        <div className='w-full min-h-screen flex items-center justify-center bg-[#2C2A4A]'>
          <div className={`w-[90%] min-h-screen inline-grid place-items-center grid-cols-1 grid-rows-${sliceData?.length}`}>
            {error
              ? (<ErrorMessage error={error} />)
              : (<BlogSection resData={sliceData} />)
              }
            {resData?.length > itemsPerPage && (
              <Paginate
                resData={resData}
                setPaginated={setPageHandler}
                actualPage={actualPage}
              />
            )}
          </div>
        </div>
      </div>
    <footer className='overflow-hidden text-center flex items-center justify-center bg-zinc-900 text-white'> 
    © Desarrollado con amor 💖 por &nbsp;<Link href='https://www.linkedin.com/in/richardhd/' className='flex items-center justify-center'>
      <span className='hover:text-blue-500'>RichardHD</span><FaLinkedin size={20}/></Link></footer>
    </main>
    </RootLayout>
  )
}
