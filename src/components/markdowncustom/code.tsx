import { ReactNode } from "react";

export default function Code({children}:{children?:ReactNode}){

    return (
        <div className="w-full h-full overflow-x-auto flex items-center justify-center text-sm relative rounded-md">
            <code className=" w-[25%] sm:w-full bg-slate-900 text-white overflow-hidden m-4 p-4 sm:p-4 overflow-y-auto overflow-x-auto custom-scrollbar">
            {children}
            </code>
        </div>
        
    )
}