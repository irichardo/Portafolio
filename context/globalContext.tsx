import React from 'react'

interface GitData{
    url: string,
    description:string
}
interface globalContext {
    gitData : Array<GitData>
    actualPage: number
    setActualPage: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = React.createContext<globalContext>({
  gitData: [],
  actualPage: 0,
  setActualPage: () => {}
})
