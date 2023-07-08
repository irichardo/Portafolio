import React, { useContext, useState } from 'react'
import { abilities } from '@/libs'
import { GlobalContext } from '@context/GlobalContext'
import { motion } from 'framer-motion'

export default function Projects() {
  const [actualProject, setActualProject] = useState<{
    url: String | undefined;
    description: String | null;
  }>({ url: undefined, description: null })

  const textoPorDefecto = 'Texto no disponible'

  const { gitData } = useContext(GlobalContext)

  const screenHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as HTMLButtonElement
    const [description, url] = target.value.split('|')
    if (description === 'null') {
      setActualProject({
        ...actualProject,
        url,
        description: textoPorDefecto
      })
    } else {
      setActualProject({
        ...actualProject,
        url,
        description
      })
    }
  }

  return (
    <div className='w-full h-full block md:flex'>
      <div className=' w-full h-5/6 md:w-5/6 md:h-full items-center justify-center flex '>
        <div className=' w-full h-4/6 md:w-4/5  md:h-5/6 flex flex-col items-center justify-evenly'>
          <div className=' w-full md:w-5/6 h-3/6 flex items-center justify-center'>
            <div className='w-full h-full flex justify-center items-center text-white text-xs md:text-2xl shadow-lg shadow-gray-950 hover:shadow-none transition-all'>
              {actualProject.url
                ? actualProject.url
                : gitData[0]?.url}
            </div>
          </div>
          <div className='w-5/6 h-1/6 text-white justify-center items-center flex text-base shadow-sm shadow-gray-950 hover:shadow-none transition-all'>
            {actualProject.description == null
              ? (
                <div>Texto no disponible aun</div>
              )
              : actualProject
                ? (
                  actualProject.description
                )
                : (
                  gitData[0]?.description
                )}
          </div>
        </div>
      </div>
      <div className='md:w-2/6 md:h-full items-center w-full'>
        <div className='w-full h-1/6 md:w-3/6 md:h-[88%] flex md:block justify-center overflow-x-auto md:overflow-x-hidden md:overflow-y-auto custom-scrollbar'>
          {gitData.map((a) => {
            return (
              <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.2 }}
                value={`${a.description}|${a.url}`}
                onClick={screenHandler}
                className=' h-16 md:h-36 md:w-36 bg-slate-600 text-center flex justify-center items-center m-5 rounded-lg text-white text-xs md:text-lg font-bold p-4'
                key={a.url}
              >
                {a.url.split('/')[4]}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
