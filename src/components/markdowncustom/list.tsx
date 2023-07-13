import React, { LiHTMLAttributes } from "react";

export default function LI(props:LiHTMLAttributes<ChildNode>){
const {children} = props

    return<li className="font-roboto text-white">✅{children}</li>
}
