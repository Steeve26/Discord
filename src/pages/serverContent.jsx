import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import content from '../assets/serverContent.png'

export default function serverContent({servers, selectedServer, setSelectedServer, setParamServer, serverExists, setServerExists}) {
  const [ message, setmessage ] = useState('')
  const {name} = useParams()
  const navigate = useNavigate();
  const location = useLocation();

  console.log('testing server', servers.find(server => server.name === name));
  useEffect(() => {
    name === 'default' ? navigate('/friends') :
    servers.find(server => server.name === name) ? (setSelectedServer(name), setmessage(''), setServerExists(true)) :
    (setmessage('server not found'), setServerExists(false))
  }, [name])
  
  useEffect(() => {
    console.log('param haram', name);
    setParamServer(name)
  }, [location.pathname])

  console.log('param in server', name);
  return (
    <div className='container font-ggSans px-2 pt-8 pb-2'>
      <h1 className={` text-4xl font-ggSansxl text-center ${message ? 'text-red-500' : 'text-textOffWhite'} capitalize`}>{message ? message : `welcome to`} <br />{!message && `${selectedServer}`}</h1>
      {!message && <p className='text-center text-iconLightGrey font-ggSans font-medium my-4 pb-2 border-b-[1px] border-y-secondHighlightGrey'>This is the beggining of this server!</p>}
      <div className="content flex">
        {message && <button onClick={() => navigate('/friends')} className=' rounded-[4px] bg-discordBlue text-textOffWhite px-6 py-2 font-ggSansl text-xl hover:bg-primary duration-200 mx-auto mt-3'>Go Home</button>}
        {!message && <img src={content} alt="" className='w-full h-full'/>}
      </div>
      
    </div>
  )
}
