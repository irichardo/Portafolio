import React from 'react'

export default function P ({ children }:{children?:React.ReactNode}) {
  return <p className='w-4/5 text-white p-14 text-lg font-montserrat flex items-center justify-center'>{children}</p>
}
