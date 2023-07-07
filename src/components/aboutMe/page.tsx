import React, { MouseEventHandler, useState } from "react"
import { AboutMeIndex } from "./aboutParagraphIndex"

export default function AboutMe() {
  const [actualParagraph, setActualParagraph] = useState(0);
  const paragraphHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    const value = button.value
    console.log(value);
    if (value === 'less') {
      if (actualParagraph === 0) setActualParagraph(AboutMeIndex.length - 1);
      else {
        setActualParagraph(actualParagraph - 1);
      }
    }
    if (value === 'more') {
      if (actualParagraph === AboutMeIndex.length - 1) setActualParagraph(0);
      else {
        setActualParagraph(actualParagraph + 1);
      }
    }
  }
  return (
    <>
      <div className='w-[80%] h-5/6 bg-slate-100 flex  rounded-lg overflow-hidden'>
        <div className='w-4/6 h-full  flex items-center justify-center'>
          <div className='w-5/6 h-2/3'>
            <div className='w-full h-5/6 lg:h-5/6 desktopLarge:h-4/6 relative flex flex-col overflow-y-scroll custom-scrollbar'>
              {
                AboutMeIndex.map(a => {
                  return <p className={`w-full p-4 mt-5 min-h-[30%] flex text-center justify-center items-center font-semibold shadow-lg rounded-md bg-blue-100`}  key={a.id}>
                    {a.paragraph}
                  </p>
                })
              }  
            </div>
            <div className='w-full h-2/6  flex justify-center relative'>
              <button className='w-2/5 h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg'>
                DESCARGAR CV
              </button>
            </div>
          </div>
        </div>
        <div className='w-2/6 h-5/6 flex items-center justify-center relative'>
          <div className='h-[50vh] w-5/6 bg-white' />
          <div className='h-[50vh] w-5/6  border-black border absolute z-10 top-[12vh] right-[3vh]' />
        </div>
      </div>

    </>
  )
}
