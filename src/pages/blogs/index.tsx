import React, { useContext } from 'react'
import { blogdata } from '@/libs/types'
import BlogSection from '@/components/blogslinks'
import ErrorMessage from '@/components/error'
import Paginate from '@/components/paginated'
import { GlobalContext } from 'context/globalContext'
import RootLayout from './layout'

export async function getStaticProps () {
  try {
    const res = await fetch('http://localhost:3001/posts')
    const resData: blogdata[] = await res.json()
    return {
      props: {
        resData: resData as blogdata[],
        error: null
      }
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

export default function Blog ({
  resData,
  error
}: {
  resData: blogdata[];
  error: any;
}) {
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
      <section className="w-screen h-screen overflow-x-hidden">
        <div className="w-screen h-full flex flex-col items-center">
          <div className="w-full h-[30vh] flex items-center justify-center bg-[#4F518C]">
            <div className="w-44 h-44 rounded-full bg-black m-4" />
          </div>
          <div className="w-full h-auto flex items-center justify-center bg-[#2C2A4A]">
            <div
              className={`w-[90%] min-h-[70vh] inline-grid place-items-center grid-cols-1 grid-rows-${sliceData?.length}`}
            >
              {error ? (
                <ErrorMessage error={error} />
              ) : (
                <BlogSection resData={sliceData} />
              )}
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
      </section>
    </RootLayout>
  )
}
