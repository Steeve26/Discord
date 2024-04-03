import React, { useEffect, useState } from 'react'
import wumpus from '../assets/wumpus.gif';
import Sticker from '../assets/stickerDark.png';
import Gif from '../assets/gifDark.png'
import StickerHov from '../assets/stickerWhite.png';
import GifHov from '../assets/gifWhite.png'
import { useLocation, useParams } from 'react-router-dom'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

export default function Messaging({selectedUser, setSelectedUser, friendsList}) {
  const {userName} = useParams()
  const location = useLocation()

  const findUser = () =>  {
    if (!userName)
    return
    const result = friendsList.find(user => user.name === userName)
    return result
  }
  
  useEffect(() => {
    const result = findUser(userName)
    if(userName) {
      setSelectedUser(result)
    }
  }, [location, friendsList])

  const [imageState, setImageState] = useState(['dark', 'dark']) 

  const returnCorrectImage = (imageURL) => {
    return imageURL.replace('=40', "=300")
  }

  return (
    <div className='flex flex-col justify-between h-full'>
      { selectedUser && 
        <>
          <div className="content px-4 pb-12 flex flex-col justify-end h-full overflow-y-auto">
            <img src={returnCorrectImage(selectedUser.icon)} alt="icon" className=' size-20 rounded-full'/>
            <h2 className='text-3xl text-textOffWhite font-ggSansxl my-3'>{selectedUser.name}</h2>
            <p className='text-iconLightGrey'>This is the beginning of your direct message history with {selectedUser.name}.</p>
            <div className="info flex items-center">
              <div className="mutualServers flex items-center my-3">
                <div className=' rounded-3xl size-6'><img className=' rounded-3xl' src="https://cdn.discordapp.com/icons/303457917955342357/0cefdbe4925567dde19dfc5498af948c.webp?size=32" alt="icon" /></div>
                <div className=' rounded-3xl relative z-10 p-[5px] bg-secondary translate-x-[-10px] size-[34px]'><img className=' rounded-3xl' src="https://cdn.discordapp.com/icons/489394955572215811/099f67fa8b63f8bcf13673724e62304d.webp?size=32" alt="icon" /></div>
                <p className=' text-iconLightGrey translate-y-[-3px]'>2 mutual servers </p>
                <div className="divider rounded-2xl mx-2 w-1 h-1 bg-[#41434a]"></div>
              </div>
              <div className="actions text-textOffWhite flex gap-2">
                <button className='capitalize px-4 pb-[3px] bg-[#4e5058] rounded-[3px] hover:bg-[#6d6f78] duration-200'>remove friend</button>
                <button className='capitalize px-4 pb-[3px] bg-[#4e5058] rounded-[3px] hover:bg-[#6d6f78] duration-200'>block</button>
              </div>
            </div>
            <div className="prompt">
              <img className='size-44 my-5' src={wumpus} alt="wumpus wave" />
              <button className='bg-discordBlue text-textOffWhite px-10 py-2 rounded capitalize hover:bg-[#4752c4] duration-200'>wave to {selectedUser.name}</button>
            </div>
          </div>
          
          <div className="formWrapper h-[70px] px-4 ">
            <div className="formContainer bg-inputGrey px-3 py-2 flex rounded-md">
              <button className=' text-iconLightGrey hover:text-textOffWhite duration-200'><BsFillPlusCircleFill size={20}/></button>
              <input type="text" className='bg-transparent placeholder:text-[#6d6f78] w-full outline-none text-textOffWhite px-3' placeholder={'Message @' + selectedUser.name} />
              <div className="actions flex gap-3">
                <button className=' text-iconLightGrey hover:text-textOffWhite duration-200'><FaGift size={21}/></button>
                <button className=' text-iconLightGrey hover:text-textOffWhite duration-200'><img src={ imageState[0] === 'dark' ? Gif : GifHov} width={30} alt="icon" onMouseEnter={() => setImageState(['white', 'dark'])} onMouseLeave={() => setImageState(['dark', 'dark'])}/></button>
                <button className=' text-iconLightGrey hover:text-textOffWhite duration-240'><img src={ imageState[1] === 'dark' ? Sticker : StickerHov} width={30} alt="icon" onMouseEnter={() => setImageState(['dark', 'white'])} onMouseLeave={() => setImageState(['dark', 'dark'])}/></button>
                <button className=' text-iconLightGrey hover:text-[#fcc145] duration-200'><BsFillEmojiHeartEyesFill size={20}></BsFillEmojiHeartEyesFill></button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}
