import React from 'react'

export default function H1 ({ children }: { children?: React.ReactNode }) {
  return <h1 className='w-2/3 text-center p-10 font-montserrat font-bold text-3xl text-white'>{children}</h1>
}
