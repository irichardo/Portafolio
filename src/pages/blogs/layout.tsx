import React, { ReactNode } from 'react'
import Head from 'next/head'

type layoutProps={
    children: ReactNode;
}


export default function RootLayout ({ children }:layoutProps) {
  return (
    <main className=''>
      <Head>
        RichardHD | Blog
      </Head>
      {children}
    </main>
  )
}
