import React from 'react'
import { BsX } from "react-icons/bs";

export default function profile({icon, name}) {

  return (
    <button className='flex items-center pl-2 w-full focus-visible:bg-[#404249] hover:bg-[#404249] rounded-md h-[45px] mr-[1px] 
    capitalize font-medium leading-5 gap-4 active:brightness-110 cursor-pointer group'>
      
      <div className="icon w-[45px] h-[45px] overflow-hidden flex items-center justify-center">
        <img className='w-full rounded-2xl ' src={icon} alt="friend icon" />
      </div>

      <div className="profile w-full h-full flex justify-between pr-4 text-[#949ba4] hover:text-[#dbdee1]">
        <div className="name flex items-center pb-1 font-ggSansL">{name}</div>
        <button className='hidden group-hover:block focus:block group-focus-visible:block hover:brightness-200'><BsX size={23}/></button>
      </div>
    </button>
  )
}