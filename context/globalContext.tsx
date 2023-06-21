import React from 'react';

interface globalContext {
    gitData : Array<GitData>
}
interface GitData{
    url: string,
    description:string
}

export const GlobalContext = React.createContext<globalContext>({
    gitData:[]
});