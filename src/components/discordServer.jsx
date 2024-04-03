import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function discordServer({name, icon, index, type, iconType, background, hoverColor, selectedServer, setSelectedServer, serverExists, setServerExists, selectedUser }) {
  const navigate = useNavigate()
  const location = useLocation()

  const paths = ['/friends', '/nitro', '/messageRequests', '/shop', `${selectedUser ? '/slideNdm/' + encodeURIComponent(selectedUser.name) : '/slideNdm'}`]

  const handleServerSelection = () => {
    if(type == 'action')
    return
    setSelectedServer(name)
    name === 'default' ? (setServerExists(false), navigate('/friends')) : navigate(`/server/${name}`)
  }
  return (
    <button className={`flex justify-center px-3 relative ${ type !== 'action' && "active:translate-y-[2px] after:content[''] after:absolute after:left-0 after:w-1"} ${selectedServer === name ? 'after:h-[80%]' : 'after:h-[7px]'} ${selectedServer !== name && ' hover:after:h-6'} after:bg-white after:rounded-e after:top-1/2 after:translate-y-[-50%] after:duration-200`} onClick={() => handleServerSelection(index)}>
      <div style={{}} className={`${iconType !== 'image' && 'px-2 py-2'} ${selectedServer === name ? index == 0 && !paths.includes(location.pathname) ? 'rounded-3xl' : 'rounded-2xl !bg-discordBlue' : 'rounded-3xl'} 
      hover:rounded-2xl ${hoverColor && 'hover:text-white ' + hoverColor}
       size-[47px] overflow-hidden  flex  items-center duration-200 justify-center  
      ${(name == 'default' || type == 'action') && 'bg-highlightLightGrey text-brightGreen'}`}>
      {iconType == 'image' ? <img src={icon} className={`w-full h-full ${background ? background : 'bg-primary'}  duration-200`}/> : icon}
      </div>
    </button>
  )
}
