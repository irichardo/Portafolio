import React, { ReactNode } from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'

type layoutProps={
    children: ReactNode;
}

export default function RootLayout ({ children }:layoutProps) {
  return (
    <main className=''>
      {children}
    </main>
  )
}
