import React, { useEffect, useState } from 'react'
import Friend from '../assets/icons/friend'

export default function header({friendFilter, seFriendFilter}) {

  const [ options, setOptions ] = useState(['online', 'all', 'pending', 'blocked'])

  return (
    <header className="shadow-borderShadow min-h-[50px] px-4 flex items-center justify-between text-textGrey">
      <div className="left flex">
        <div className="title flex gap-3 text-base items-center font-semibold pr-4 border-r-[1px] border-[#3f4147]"><Friend size={'1.55'}/> <span className='text-white'>Friends</span></div>
        <ul className='pl-4 flex gap-4 capitalize font-ggSansl'>
           {options.map((option, index) => 
              <li key={index}>{console.log('test', friendFilter, option)}<button onClick={() => seFriendFilter(option)}
               className={`capitalize px-2 rounded font-medium ${friendFilter == option ? 'bg-secondHighlightGrey  text-white': 'text-textGrey'} hover:bg-secondHighlightGrey text-base hover:text-[#dbdee1]`}>{option}</button></li>
           )}
          <li><button className='capitalize duration-200 px-2 rounded font-medium bg-[#248046] border-2 border-transparent hover:border-[#248046] hover:bg-transparent text-white'>add friend</button></li>
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
