import { ReactNode } from "react";

export default function Code({children}:{children?:ReactNode}){

    return (
        <div className="w-full h-full overflow-x-auto flex items-center justify-center text-sm relative rounded-md">
            <code className="w-full bg-slate-900 text-white overflow-hidden p-4">
            {children}
            </code>
        </div>
        
    )
}