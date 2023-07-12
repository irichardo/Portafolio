import React from "react";

export default function LI({ children }:{children:React.ReactNode}){


    return<li className="font-roboto text-white flex flex-wrap">✅{children}</li>
}