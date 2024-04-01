import React, { useEffect, useState } from 'react'
import Megaphone from '../assets/icons/megaphone'
import Channel from '../assets/icons/channel';
import Checkmark from '../assets/icons/checkmark';
import { BsPersonFillAdd, BsCalendarEventFill } from "react-icons/bs";
import { FaHashtag, FaAngleDown } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";

export default function serverSidebarContent({servers, selectedServer}) {
  const [currentServer, setCurrentServer] = useState()
  
  useEffect(() => {
    const getServer = () => {
      const server = servers.find(server => server.name == selectedServer)
      server && setCurrentServer(server)
    }

    getServer()
  }, [selectedServer])

  return (
    <div className='text-iconLightGrey overflow-y-scroll serverList friendList-thumb friendList-thumbhover 
    friendList-track font-ggSans'>
      <div className='header h-32 relative after:content-[""] after:absolute after:inset-0 after:h-[90%] after:bg-gradient-to-b after:from-[#00000073] after:from-0%  after:to-transparent after:to-30%'>
        <div className="title absolute left-4 top-3 capitalize text-textOffWhite font-ggSansl font-semibold">
          <div className=' relative z-10 flex items-center gap-2'>
            <div className="iconContainer relative">
              <Checkmark className='drop-shadow-xl'/>
              <FiCheck className='absolute top-[2px] left-[2.15px] drop-shadow-xl' size={12} />
            </div>
            <p className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>{selectedServer}</p>
          </div>
        </div>

        {currentServer && <img className=' h-full w-full object-cover' src={currentServer.banner} alt="banner" loading='lazy'/>}
      </div>

      <div className="headerChannels text-textOffWhite pt-3 px-[10px] ">
        <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer'><p className='flex items-center gap-2'><BsCalendarEventFill /> 3 Events</p></div>
        <div className='hover:bg-[#35373c] pl-1 py-1 rounded cursor-pointer'><p className='flex items-center gap-1'><Channel size={'.8'}/> Channels & Roles</p></div>
        <div className='mt-3 border-b-[1px] border-y-secondHighlightGrey'></div>
      </div>
      
      <div className="mainContent px-[10px] pt-5 pb-10  flex flex-col gap-7">

        <div className="collapsableContainer">
          <span className="title uppercase block mb-2 font-ggSans text-xs font-semibold text-[#797d87] flex items-center gap-2 hover:text-textOffWhite">info <FaAngleDown/></span>
          <div className="container flex flex-col gap-1">
            <div className='bg-[#404249] hover:bg-[#35373c] text-textOffWhite px-2 py-1 rounded cursor-pointer flex items-center gap-2'><FaHashtag/> getting-started</div>
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer flex items-center gap-2'><FaHashtag/> rules</div>
          </div>
          <div className='flex items-center justify-between hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'><span className='flex items-center gap-2 group-hover:brightness-150'><Megaphone /> announcements</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></div>
          <div className='flex items-center justify-between hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'><span className='flex items-center gap-2 group-hover:brightness-150'><Megaphone /> updates</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase block mb-2 font-ggSans text-xs font-semibold text-[#797d87] flex items-center gap-2 hover:text-textOffWhite">support <FaAngleDown/></span>
          <div className="container flex flex-col gap-1">
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> trial-support</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
          </div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase block mb-2 font-ggSans text-xs font-semibold text-[#797d87] flex items-center gap-2 hover:text-textOffWhite">newcomer rooms 3 <FaAngleDown/></span>
          <div className="container flex flex-col gap-1">
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> newbies-1</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> newbies-2</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
          </div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase block mb-2 font-ggSans text-xs font-semibold text-[#797d87] flex items-center gap-2 hover:text-textOffWhite">newcomer rooms 3 <FaAngleDown/></span>
          <div className="container flex flex-col gap-1">
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> newbies-1</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> newbies-2</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
          </div>
        </div>
        
        <div className="collapsableContainer">
          <span className="title uppercase block mb-2 font-ggSans text-xs font-semibold text-[#797d87] flex items-center gap-2 hover:text-textOffWhite">chat <FaAngleDown/></span>
          <div className="container flex flex-col gap-1">
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> discussion</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> prompt-chat</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
          </div>
        </div>
        
        <div className="collapsableContainer">
          <span className="title uppercase block mb-2 font-ggSans text-xs font-semibold text-[#797d87] flex items-center gap-2 hover:text-textOffWhite">showcase <FaAngleDown/></span>
          <div className="container flex flex-col gap-1">
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> showcase 1</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> showcase 2</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
            <div className='hover:bg-[#35373c] px-2 py-1 rounded cursor-pointer group'>
              <p className='group-hover:brightness-150 flex items-center gap-2 justify-between'><span className='flex items-center gap-2'><FaHashtag/> showcase 3</span> <BsPersonFillAdd className=' opacity-0 pointer-events-none hover:text-textOffWhite group-hover:opacity-100 group-hover:pointer-events-auto '/></p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
