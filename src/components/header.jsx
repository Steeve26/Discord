import React, { useEffect, useState } from 'react'
import Friend from '../assets/icons/friend'
import Inbox from '../assets/icons/inbox'
import Help from '../assets/icons/help'
import AddChat from '../assets/icons/addChat'
import Group from '../assets/icons/group'
import Thread from '../assets/icons/thread'
import { FaHashtag } from 'react-icons/fa6'
import { BsFillPinAngleFill } from "react-icons/bs";
import { IoMdNotificationsOff } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Nitro from '../assets/icons/nitro';
import Messages from '../assets/icons/message';
import { FaDiscord } from "react-icons/fa";
import discordTextlogo from'../assets/discord-logo white.png'


export default function header({friends, friendFilter, seFriendFilter, selectedServer}) {

  const [ options, setOptions ] = useState(['online', 'all', 'pending', 'blocked'])
  const paths = ['/friends', '/nitro', '/messageRequests', '/shop']

  return (
    <header className="shadow-borderShadow min-h-[50px] px-4 flex items-center justify-between text-textGrey">
      { location.pathname === '/friends' &&
        <div className="left flex">
          <div className="title flex gap-3 text-base items-center font-semibold pr-4 border-r-[1px] border-[#3f4147]">
            <Friend size={'1.55'}/> <span className='text-white'>Friends</span>
          </div>

          <ul className='pl-4 flex gap-4 capitalize font-ggSansl'>
            {options.map((option, index) => 
                <li key={index}>{console.log('test', friendFilter, option)}<button onClick={() => friends && seFriendFilter(option)}
                className={`capitalize px-2 rounded font-medium ${friendFilter == option ? 'bg-secondHighlightGrey  text-white': 'text-textGrey'} hover:bg-secondHighlightGrey text-base hover:text-[#dbdee1]`}>{option}</button></li>
            )}
            <li><button className='capitalize duration-200 px-2 rounded font-medium bg-[#248046] border-2 border-transparent hover:border-[#248046] hover:bg-transparent text-white'>add friend</button></li>
          </ul>
        </div>
      }

      { selectedServer && selectedServer !== 'default' &&
        <div className='left flex items-center font-ggSansl gap-2'>
          <FaHashtag size={20}/>
          <p className=' text-textOffWhite'>getting-started</p>
        </div>
      }

      { location.pathname === '/messageRequests' &&
        <div className='left flex items-center font-ggSansl gap-2'>
          <div className="title flex gap-2 border-r-2 border-highlightLightGrey pr-4">
            <Messages/>
            <p className="capitalize text-textOffWhite">message requests</p>
          </div>

          <div className="actions font-ggSansl capitalize flex gap-2 pl-2">
            <button className='capitalize px-2 rounded font-medium bg-secondHighlightGrey  text-white hover:bg-secondHighlightGrey text-base hover:text-[#dbdee1]'>requests</button>
            <button className='capitalize px-2 rounded font-medium text-textGrey hover:bg-secondHighlightGrey text-base hover:text-[#dbdee1]'>spam(3)</button>
          </div>
        </div>
      }

      { location.pathname === '/nitro' &&
        <div className="left capitalize font-ggSansl flex gap-2">
          <Nitro/>
          <p className='text-textOffWhite'>nitro</p>
        </div>
      }

      { location.pathname === '/shop' &&
        <div className="left capitalize font-ggSansl flex text-textOffWhite">
          <FaDiscord size={23}/>
          <img src={discordTextlogo} width={'100px'} alt="discord logo" loading="lazy"/>
          <p>shop</p>
        </div>
      }
      
      <div className="right text-iconLightGrey flex gap-5 ml-auto">
      { location.pathname === '/friends' &&
        <button className='hover:text-[#dbdee1] pr-5 border-r-[1px] border-[#3f4147]'><AddChat/></button>
      }

      { selectedServer && selectedServer !== 'default' &&
        <div className='serverIcons flex gap-3'>
          <button className='hover:text-[#dbdee1]'><Thread/></button>
          <button className='hover:text-[#dbdee1]'><IoMdNotificationsOff size={25}/></button>
          <button className='hover:text-[#dbdee1]'><BsFillPinAngleFill size={25}/></button>
          <button className='hover:text-[#dbdee1]'><Group/></button>
          <div className="searchBox flex items-center bg-primary rounded px-2 py-[2px] mx-2 duration-200">
            <input type="text" placeholder='Search' className='bg-transparent w-full pl-1 outline-none text-sm placeholder:text-sm focus:w-60 duration-200 text-textOffWhite'/>
            <IoSearch size={18}/>
          </div>
        </div>
      }

      { location.pathname !== '/nitro' &&  
        <> 
          <button className='hover:text-[#dbdee1]'><Inbox/></button>
          <button className='hover:text-[#dbdee1]'><Help/></button>
        </>
      }
      </div>
    </header>
  )
}
