import React, { ReactNode } from 'react'
import Head from 'next/head'
import {Montserrat} from 'next/font/google'

type layoutProps={
    children: ReactNode;
}

export default function RootLayout ({ children }:layoutProps) {
  return (
    <main className={`font-montserrat`}>
      <Head>
        <title>
        RichardHD | Blog
        </title>
      </Head>
      {children}
    </main>
  )
}
