import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function discordServer({name, icon, index, type, iconType, background, rounded, hoverColor, selectedServer, setSelectedServer}) {
  const navigate = useNavigate()
  const location = useLocation()

  const paths = ['/friends', '/nitro', '/messageRequests', '/shop']

  const handleServerSelection = () => {
    if(type == 'action')
    return
    setSelectedServer(name)
    name === 'default' ? navigate('/friends') : navigate('/' + name)
  }
  return (
    <button className={`flex justify-center px-3 active:translate-y-[2px]`} onClick={handleServerSelection}>
      <div className={`${iconType !== 'image' && 'px-2 py-2'} ${selectedServer === name && paths.includes(location.pathname) && '' + hoverColor} ${selectedServer === name && '!rounded-2xl'}
        rounded-3xl hover:rounded-2xl size-[47px] overflow-hidden  flex  items-center duration-200 justify-center ${selectedServer === 'default' && !paths.includes(location.pathname) && '!rounded-3xl'}
      ${(name == 'default' || type == 'action') && 'bg-highlightLightGrey text-brightGreen'} ${hoverColor && 'hover:text-white hover:' + hoverColor}`}>
      {iconType == 'image' ? <img src={icon} className={`w-full h-full ${background ? background : 'bg-primary'}  duration-200`}/> : icon}
      </div>
    </button>
  )
}
