import React from 'react'
// import { LuMoon } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";

export default function status({status, position}) {

  return (
    <div className={`flex items-center justify-center absolute ${position == 'modified' ? 'bottom-[0px]' : 'bottom-[-5px]'} right-[-5px] w-5 h-5 bg-secondary group-hover:bg-secondHighlightGrey ${ status == 'online' || status == 'offline' ? 'p-[4.5px]' : 'p-[5px]'} rounded-3xl`}>
      { status == 'online' ?
        <div className=' rounded-3xl bg-brightGreen size-full translate-x-[-.2px] translate-y-[0.3px]'></div> :
        status == 'idle' ? <div className=''><IoMdMoon className='text-indicatorYellow scale-x-[-1]' fill='#f0b232' size={15}/></div> : status == 'offline' &&
        <div className='bg-indicatorGrey relative rounded-3xl size-full flex items-center justify-center translate-x-[-.3px] translate-y-[.4px]'><div className='bg-indicatorBg size-[6px] rounded-3xl'></div></div>
      }
    </div>
  )
}
