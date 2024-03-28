import React from 'react'
import Friend from '../assets/icons/friend'

export default function header() {
  return (
    <header className="shadow-borderShadow h-[50px] px-4 flex items-center justify-between text-textGrey">
      <div className="left flex">
        <div className="title flex gap-3 text-base items-center font-semibold pr-4 border-r-[1px] border-[#3f4147]"><Friend size={'1.55'}/> <span className='text-white'>Friends</span></div>
        <ul className='pl-4 flex gap-4 capitalize font-ggSansl'>
          <li><button className='capitalize px-2 rounded font-medium bg-secondHighlightGrey text-base text-white hover:text-[#dbdee1]'>online</button></li>
          <li><button className='capitalize px-2 rounded font-medium hover:bg-secondHighlightGrey text-base text-[#b5bac1] hover:text-[#dbdee1]'>all</button></li>
          <li><button className='capitalize px-2 rounded font-medium hover:bg-secondHighlightGrey text-base text-[#b5bac1] hover:text-[#dbdee1]'>pending</button></li>
          <li><button className='capitalize px-2 rounded font-medium hover:bg-secondHighlightGrey text-base text-[#b5bac1] hover:text-[#dbdee1]'>blocked</button></li>
          <li><button className='capitalize px-2 rounded font-medium bg-[#248046] text-white'>add friend</button></li>
        </ul>
      </div>
      <div className="right">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </header>
  )
}
