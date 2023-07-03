import React, { ReactNode } from 'react'

type layoutProps={
    children: ReactNode;
}

export default function RootLayout ({ children }:layoutProps) {
  return (
    <main className='bg-black'>{children}</main>
  )
}
