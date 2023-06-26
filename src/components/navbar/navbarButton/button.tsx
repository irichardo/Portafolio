import Link from "next/link"
import {useState} from 'react';
import sectionRoutes from ".."

type AutoCloseFunction = (event:any)=>void;

interface buttonNav {   
    automaticClosing: AutoCloseFunction;
    text:String;
    route:string;
}

export default function NavButton({automaticClosing,text,route}:buttonNav){

    return(
        <li className="w-full h-20 flex items-center justify-center hover:bg-red-950 cursor-pointer transition-colors text-white">
        <Link
          className="w-full h-full justify-center items-center flex"
          href={route}
          scroll={false}
          onClick={automaticClosing}
        >
         {text}
        </Link>
      </li>
    )
}