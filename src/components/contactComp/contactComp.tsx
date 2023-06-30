import { MdMail, MdSend, MdCoffee } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'

import React, { useState } from 'react'

export default function ContactComp () {
  const [question, setQuestion] = useState({
    data: '',
    value: ''
  })

  const valueButton = {
    project: 'Project',
    jobProp: 'jobProp'
  }

  const handlerQuestion = (event:React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    setQuestion({
      data: target.value,
      value: target.value
    })
  }

  return (
    <div className='w-full h-full flex items-center justify-center overflow-hidden'>
      <div className='w-1/2 h-full bg-gray-400 flex flex-col items-center rounded-tr-[50%] rounded-r-[50%]'>
        <div className='w-4/5 h-2/6 font-mono text-4xl text-center flex flex-col justify-center'>
          <div className='w-full h-1/5 text-white font-semibold text-4xl text-left'>
            Hablemos de algo
          </div>
          <div className='w-full h-1/5 text-white font-semibold text-4xl text-left'>
            Interesante o <label className='text-pink-500'>GENIAL</label>
          </div>
          <div className='w-full h-1/5 text-white font-semibold text-4xl text-left'>
            Mientras nos tomamos
          </div>
          <div className='w-full h-1/5 text-white font-semibold text-4xl text-left flex'>
            Un café <MdCoffee size={50} className='ml-10' />
          </div>
        </div>
        <div className='w-full h-4/6 text-white flex flex-col justify-start items-center'>
          <button className='w-1/2 h-[14%] flex items-center hover:bg-purple-950 rounded-2xl focus:border-2 focus:bg-pink-700 focus:bg-opacity-50 focus:border-pink-950 text-left'>
            <div className='w-1/6 h-full flex items-center justify-center'>
              <MdMail size='2rem' />
            </div>
            <p className='text-lg font-bold tracking-widest'>Mensajes</p>
          </button>
          <button className='w-1/2 h-[14%] flex items-center hover:bg-purple-950 rounded-2xl focus:border-2 focus:bg-pink-700 focus:bg-opacity-50 focus:border-pink-950 text-left'>
            <div className='w-1/6 h-full flex items-center justify-center'>
              <BsPhone size='2rem' />
            </div>
            <p className='text-lg font-bold tracking-widest'>+123654654</p>
          </button>
        </div>
      </div>
      <div className='w-1/2 h-full justify-center flex items-center'>
        <div className='w-5/6 h-5/6 bg-white rounded-3xl'>
          <div className='h-2/6 w-full flex flex-col items-center justify-center'>
            <div className='w-5/6 h-[20vh] flex items-end font-semibold text-lg '>
              Estoy interesado en . . .
            </div>
            <div className='w-5/6 h-full flex'>
              <button type='button' className={`w-40 h-10 ${question.value === valueButton.jobProp ? 'bg-pink-600 text-white border-pink-800' : 'bg-white text-gray-400 border-gray-600'} rounded-md border text-sm m-2 cursor-default`} value={valueButton.jobProp} onClick={handlerQuestion}>
                Propuesta de trabajo
              </button>
              <button type='button' className={`w-40 h-10 ${question.value === valueButton.project ? 'bg-pink-600 text-white border-pink-800' : 'bg-white text-gray-400 border-gray-600'} rounded-md border text-sm m-2 cursor-default`} value={valueButton.project} onClick={handlerQuestion}>
                Proyecto
              </button>
            </div>
          </div>
          <div className='h-4/6 w-full '>
            <div className='h-5/6 w-5/7'>
              <div className='w-full h-5/6 flex flex-col items-center'>
                <input
                  placeholder='Tu nombre'
                  className='bg-transparent placeholder-opacity-50 focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold'
                />
                <input
                  placeholder='Tu correo'
                  className='bg-transparent placeholder-opacity-50 focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold'
                />
                <input
                  placeholder='Tu mensaje'
                  className='bg-transparent placeholder-opacity-50 focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold'
                />
              </div>
              <div className='w-full h-1/6 flex'>
                <button type='submit' className='w-1/3 h-3/4 rounded-md bg-pink-800 text-white text-sm font-semibold m-14 flex items-center'>
                  <div className='w-2/6 h-full justify-center items-center flex'>
                    <MdSend size='1.5rem' />
                  </div>
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
