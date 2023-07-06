import React, { ReactNode } from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
import Head from 'next/head'

type layoutProps={
    children: ReactNode;
}

export default function Layout ({ children }:layoutProps) {
  return (
    <div className='overflow-y-auto'>
      <Head>
      <title>RichardHD | WebDeveloper</title>
      </Head>
        <div>{children}</div>
        <footer className='text-center relative flex items-center justify-center bg-gray-900 text-white'> © Desarrollado con amor 💖 por &nbsp;<Link href='https://www.linkedin.com/in/richardhd/' className='flex items-center justify-center'><span className='hover:text-blue-500'>RichardHD</span><FaLinkedin size={20}/></Link></footer>
    </div>
  )
}
