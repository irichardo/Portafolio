import React from "react";
import Image from 'next/image'

export default function img (props:any){
  const {src, alt, priority} = props
  const priorityValidate = priority? true:false;
    return(
        <div className="w-full h-full">
            <Image src={src} alt={alt} width={650} height={650} priority={priorityValidate}/>
        </div>
    )
}