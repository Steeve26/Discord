import React from 'react'

export default function discordServer({icon, first, type, iconType, background, rounded}) {
  return (
    <div className={`flex justify-center cursor-pointer px-3`}>
      <div className={`${iconType !== 'image' ? 'px-2 py-2' : 'rounded-none'} 
      size-[47px] rounded-3xl overflow-hidden  flex hover:rounded-2xl items-center duration-200 justify-center text-brightGreen
      ${(first || type == 'actions') && 'bg-highlightLightGrey hover:rounded-2xl'} ${first ? 'hover:bg-discordBlue' : 
      type === 'actions' && ' hover:bg-brightGreen hover:text-white'} ${type === 'actions' && ' bg-highlightLightGrey'}`}>
      {iconType == 'image' ? <img src={icon} className={`w-full h-full ${background ? background : 'bg-primary'} ${ rounded !== false ? 'rounded-3xl hover:rounded-2xl' : 'scale-[100]'} duration-200`}/> : icon}
      </div>
    </div>
  )
}
