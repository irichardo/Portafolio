import React, { useContext } from 'react'
import Link from 'next/link'
import { blogdata } from '@/libs/types'
import BlogCards from '@/components/blogscards'
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
    <main className='w-screen h-screen font-montserrat'>
      <div className='w-screen min-h-screen flex flex-col items-center'>
        <div className='w-full h-[30%] sm:h-[20%] lg:h-[30vh] flex items-center justify-center bg-gray-600'>
          {/*      LOGO      */}
          <div className='w-24 h-24 md:h-32 md:w-32 rounded-full bg-black m-4' />
        </div>
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-900'>
          {/*     BLOGS      */}
          <div className={`w-full lg:w-[90%] min-h-screen  grid-cols-1 place-items-center grid-rows-${sliceData?.length} ${sliceData.length <= 1?' grid-rows-none grid-cols-none flex items-start justify-center':'inline-grid'}`}>
            {error
              ? (<ErrorMessage error={error} />)
              : (<BlogCards resData={sliceData} />)
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
      {/*  Nunca olvidar el amor y cariño que le pongo a esto <3  */}
    <footer className='overflow-hidden text-center flex items-center justify-center bg-zinc-900 text-white text-xs sm:text-base'> 
    © Desarrollado con amor 💖 por &nbsp;<Link href='https://www.linkedin.com/in/richardhd/' className='flex items-center justify-center'>
      <span className='hover:text-blue-500 '>RichardHD</span><FaLinkedin size={20}/></Link></footer>
    </main>
    </RootLayout>
  )
}
