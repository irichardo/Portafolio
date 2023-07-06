import React from 'react'

export default function P ({ children }:{children?:React.ReactNode}) {
  return <p className='w-4/5 text-slate-800 p-2 text-lg text-center font-inconsolata flex items-center justify-center'>{children}</p>
}
