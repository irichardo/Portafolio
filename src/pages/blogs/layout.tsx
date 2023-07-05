import React, { ReactNode } from 'react'
import Head from 'next/head'

type layoutProps={
    children: ReactNode;
}


export default function RootLayout ({ children }:layoutProps) {
  return (
    <main className=''>
      <Head>
        <title>
        RichardHD | Blog
        </title>
      </Head>
      {children}
    </main>
  )
}
