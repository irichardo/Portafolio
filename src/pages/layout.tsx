import Navbar from '@/components/navbar/navbar'
import { Provider } from '../../context/contextProvider'
import React, { ReactNode } from 'react'

type layoutProps={
    children: ReactNode;
}

export default function Layout ({ children }:layoutProps) {
  return (
    <div>
      <Navbar />
      <Provider>
        <div>{children}</div>
      </Provider>
    </div>
  )
}
