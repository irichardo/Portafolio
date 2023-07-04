import React from 'react'

export default function P ({ children }:{children?:React.ReactNode}) {
  return <p className='w-1/2 text-slate-800 m-4 text-lg text-center font-inconsolata'>{children}</p>
}
