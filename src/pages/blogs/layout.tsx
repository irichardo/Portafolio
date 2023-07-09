import React, { ReactNode } from 'react'
import Head from 'next/head'
import {Montserrat} from 'next/font/google'

type layoutProps={
    children: ReactNode;
}

export default function Layout ({ children }:layoutProps) {
  return (
    <div className={`font-montserrat`}>
      <Head>
        <title>
        RichardHD | DevBlog
        </title>
        <meta name='description' content='DevBlog where I will publish the development of my day to day applications, as well as some reflections.'/>
        <meta name='auhtor' content='RichardHD'/>
      </Head>
      {children}
    </div>
  )
}
