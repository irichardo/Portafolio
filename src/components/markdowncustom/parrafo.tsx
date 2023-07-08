import React from 'react'

export default function P ({ children }:{children?:React.ReactNode}) {
  return <p className='w-4/5 sm:w-[80%] text-white sm:p-10 text-sm text-center sm:text-start sm:text-lg font-montserrat flex items-center justify-center'>{children}</p>
}
