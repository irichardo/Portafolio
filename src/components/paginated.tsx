import { blogdata } from "@/libs/types";
import React, { EventHandler, ReactEventHandler, useState } from "react";

export default function Paginate ({resData, setPaginated}:{resData:blogdata[], setPaginated:EventHandler< any | number>}){  
    
    const [actualPage,setActualPage] = useState(0);
    
    const inded:JSX.Element[] = [];
    const elementsPerPage = 3
    const data = Math.ceil(resData.length/elementsPerPage);

    const handleSetActualPageSetPagination = (event:React.MouseEvent<HTMLButtonElement>) =>{
         const data = event.target as HTMLButtonElement;
         const value = data.value
          setPaginated(Number(value));
          setActualPage(Number(value))
    }
    
    for(let i = 1 ; i < data+1; i++){
      inded.push(
        <li className="w-10 h-10 transition-all m-3 relative z-10">
        <span className={`z-20 w-full h-full flex items-center justify-center absolute top-0 pointer-events-none`}>{i}</span>
        <button className={`w-full h-full absolute rounded-lg top-0 ${actualPage == i?'rotate-0 bg-purple-900':'rotate-45 bg-purple-600'} transition-all z-10 hover:rotate-0 pointer-events-auto`} key={i} value={i} onClick={handleSetActualPageSetPagination}></button>
        </li>)
    }
    return(
      <ul className="flex m-2">
        {inded}
        </ul>
    )
}