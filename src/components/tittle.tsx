import React from 'react'

export default function H1 ({ children }: { children?: React.ReactNode }) {
  return <h1 className={` m-4 `}>{children}</h1>
}
