import React from 'react'
import TechComp from './techComp/techComp'

export default function Habilidades () {
  return (
    <>
      <div className='w-full h-full flex overflow-hidden'>
        <div className='h-full w-1/2'>
          <TechComp />
        </div>
        <div className='h-full w-1/2 flex items-center justify-center'>
          <div className='h-5/6 w-3/5 rounded-3xl'>
            <div className='h-1/6 w-full flex justify-center items-center text-3xl text-white'>
              Habilidades
            </div>
            <div className='h-5/6 w-fulll bg-slate-950 bg-opacity-50 flex justify-center items-center rounded-3xl'>
              <div className='w-5/6 h-full flex flex-col justify-center'>
                <div className='w-full h-1/3 flex items-center justify-center'>
                  <div className='h-[20vh] w-[20vh] items-center justify-center flex text-white text-xl relative'>
                    <div className='absolute inset-2 animate-spin bg-gradient-to-tr from-blue-600 via-purple-600 to-red-500 rounded-full' />
                    <div className='bg-slate-950 w-[85%] h-[85%] absolute justify-center items-center flex rounded-full'>
                      Empatia
                    </div>
                  </div>{' '}
                  <div className='h-[20vh] w-[20vh] items-center justify-center flex text-white text-xl relative'>
                    <div className='absolute inset-2 animate-spin bg-gradient-to-tr from-white to-transparent rounded-full' />
                    <div className='bg-slate-950 w-[85%] h-[85%] absolute justify-center items-center flex rounded-full'>
                      Liderazgo
                    </div>
                  </div>
                </div>
                <div className='w-full h-1/3 flex items-center justify-center'>
                  <div className='h-[20vh] w-[20vh] items-center justify-center flex text-white text-xl relative overflow-hidden'>
                    <div className='absolute inset-2 animate-spin bg-gradient-to-tr from-indigo-700 to-transparent rounded-full' />
                    <div className='bg-slate-950 w-[85%] h-[85%] absolute justify-center items-center flex rounded-full'>
                      Proactivo
                    </div>
                  </div>
                  <div className='h-[20vh] w-[20vh] items-center justify-center flex text-white text-xl relative'>
                    <div className='absolute inset-2 animate-spin bg-gradient-to-tr from-yellow-300 to-transparent rounded-full' />
                    <div className='bg-slate-950 w-[85%] h-[85%] absolute justify-center items-center flex rounded-full'>
                      Adaptable
                    </div>
                  </div>
                </div>
                <div className='w-full h-1/3 flex items-center justify-center'>
                  <div className='h-[20vh] w-[20vh] items-center justify-center flex text-white text-xl relative'>
                    <div className='absolute inset-2 animate-spin bg-gradient-to-tr from-emerald-500 to-transparent rounded-full' />
                    <div className='bg-slate-950 w-[85%] h-[85%] absolute justify-center items-center flex rounded-full'>
                      Comunicativo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
