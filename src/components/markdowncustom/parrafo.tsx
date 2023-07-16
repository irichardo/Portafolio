import React from 'react'

export default function P ({ children }:{children?:React.ReactNode}) {
  return <p className='w-[90%] sm:w-[80%] text-white sm:p-10  font-bold text-sm text-start sm:text-start sm:text-lg font-montserrat flex items-center justify-center'>{children}</p>
}
