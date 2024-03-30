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
      {console.log('inside', selectedServer == name)}
      <div className={`${iconType !== 'image' && 'px-2 py-2'} ${selectedServer === name && paths.includes(location.pathname) &&'!rounded-2xl bg-' + hoverColor} ${selectedServer == 'default' && type!= 'action' && selectedServer === name && paths.includes(location.pathname) ? '!rounded-2xl bg-' + hoverColor : 'rounded-3xl hover:rounded-2xl'}
      size-[47px] overflow-hidden  flex  items-center duration-200 justify-center text-brightGreen
      ${(index == 0 || type == 'action') && 'bg-highlightLightGrey hover:rounded-2xl'} ${index == 0 ? 'hover:bg-discordBlue' : 
      type === 'action' && ' hover:bg-brightGreen hover:text-white'} ${type === 'action' && ' bg-highlightLightGrey'}`}>
      {iconType == 'image' ? <img src={icon} className={`w-full h-full ${background ? background : 'bg-primary'}  duration-200`}/> : icon}
      </div>
    </button>
  )
}
