import React, { useEffect, useState } from 'react'

export default function serverSidebarContent({servers, selectedServer}) {
  const [currentServer, setCurrentServer] = useState()

  console.log('current server', currentServer);
  
  useEffect(() => {
    const getServer = () => {
      const server = servers.find(server => server.name == selectedServer)
      server && setCurrentServer(server)
    }

    getServer()
  }, [])

  return (
    <div className=' text-iconLightGrey'>
      <div className='header h-40 relative '>
        <div className="title absolute left-4 top-2 capitalize text-textOffWhite font-ggSansl font-semibold">
          <p></p>
          <p>{selectedServer}</p>
          <p></p>
        </div>

        {currentServer && <img src={currentServer.banner} alt="banner" />}
      </div>

      <div className="mainContent px-[10px]">
        <div className="headerChannels">
          <div>3 Events</div>
          <div>Channels & Roles</div>
          <div className='mt-3 mb-5 border-b-[1px] border-y-secondHighlightGrey'></div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase">info</span>
          <div className="container">
            <div>getting-started</div>
            <div>rules</div>
          </div>
          <div>announcements</div>
          <div>updates</div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase">support</span>
          <div className="container">
            <div>trial-support</div>
          </div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase">newcomer rooms 3</span>
          <div className="container">
            <div>newbies-1</div>
            <div>newbies-2</div>
          </div>
        </div>

        <div className="collapsableContainer">
          <span className="title uppercase">newcomer rooms 3</span>
          <div className="container">
            <div>newbies-1</div>
            <div>newbies-2</div>
          </div>
        </div>
        
        <div className="collapsableContainer">
          <span className="title uppercase">chat</span>
          <div className="container">
            <div>discussion</div>
            <div>prompt-chat</div>
          </div>
        </div>
        
        <div className="collapsableContainer">
          <span className="title uppercase">showcase</span>
          <div className="container">
            <div>showcase 1</div>
            <div>showcase 2</div>
            <div>showcase 3</div>
          </div>
        </div>
      </div>
    </div>
  )
}
