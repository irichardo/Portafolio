import React from "react";

export default function H3 ({children}:{children?:React.ReactNode}){

    return(<h2 className="w-[90%] p-4 sm:p-10 sm:w-[80%] text-xl font-roboto text-center sm:text-start text-white">{children}</h2>)
}