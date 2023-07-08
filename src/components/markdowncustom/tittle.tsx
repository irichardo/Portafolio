import React from 'react'

export default function H1 ({ children }: { children?: React.ReactNode }) {
  return <h1 className=' sm:w-2/3 sm:text-3xl text-center sm:p-10 font-montserrat text-base font-bold text-white p-5'>{children}</h1>
}
