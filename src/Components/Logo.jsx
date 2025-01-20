import React from 'react'
import { logoimage } from './index'
export function Logo({classname=""}) {
    

    return (
        <>
           <div class=" space gap-y-8 ">
        <img src={logoimage} alt="logo" className={`rounded-full  h-[65px] w-[65px] border border-solid border-t-2 border-l-2 border-b-2 border-r-2  border-gray-200 ${classname} `}/>
       </div>
        </>
    )
}