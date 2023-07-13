'use Client'
import React, { useState, useEffect } from 'react'
import { GlobalContext } from './globalContext'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  /*    Important States       */
  const [gitData, setGitData] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [introBlogAnimation, setIntroBlogAnimation] = useState(false)
  const getData = async () => {
    try {
      const url = 'https://api.github.com/users/irichardo/repos'
      const headers = {
        Authorization: `token ${process.env.TOKEN_GITHUB}`
      }
      const data = await fetch(url, { headers })
      const response = await data.json()
      const resData = response.map((a: any) => {
        return {
          url: a.html_url
        }
      })
      setGitData(resData)
    } catch {
      throw new Error()
    }
  }

  const contextValue = {
    gitData,
    actualPage,
    setActualPage,
    introBlogAnimation,
    setIntroBlogAnimation
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}
