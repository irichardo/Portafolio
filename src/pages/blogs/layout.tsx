import Navbar from '@/components/navbar/navbar'
import React, { ReactNode } from 'react'

type layoutProps={
    children: ReactNode;
}

export default function Layout ({ children }:layoutProps) {
  return (
    <div>{children}</div>
  )
}
