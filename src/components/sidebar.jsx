import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { RiSettings5Fill } from "react-icons/ri";
import logo from'../assets/discord-logo.png'
import Friend from '../assets/icons/friend';
import Nitro from '../assets/icons/nitro';
import Messages from '../assets/icons/message';
import Shop from '../assets/icons/shop';
import headphone from '../assets/headphones2.png';
import headphoneoff from '../assets/headphone-off.png';
import DiscordServer from './discordServer'
import Profile from "./profile";
import micOff from '../assets/mic-off.mp3';
import micOn from '../assets/mic-on.mp3';
import headOff from '../assets/headphone-off.mp3';
import headOn from '../assets/headphone-on.mp3';
import Status from '../components/status'

export default function sidebar({friendsList, servers, selectedServer, setSelectedServer}) {

  const location = useLocation()
  const [toggles, setToggles] = useState({mic: 'false', headphone: 'false'})

  const hOff = new Audio(headOff) 
  const hOn = new Audio(headOn)
  const mcOff = new Audio(micOff) 
  const mcOn = new Audio(micOn)

  const audioFiles = [hOff, hOn, mcOff, mcOn];

  audioFiles.forEach(audio => {
      audio.volume = 0.4;
  });

  const checkLocation = (path) => {
    return location.pathname === path ? true : false
  }

  console.log('loc', checkLocation('/friends'));

  const [ friendsCopy, setFriendsCopy ] = useState(localStorage.getItem('friends') ? JSON.parse(localStorage.getItem('friends')) : [...friendsList])
  localStorage.setItem('friends', JSON.stringify(friendsCopy))

  const modifyFriends = (name) => {
    const modifiedArray = friendsCopy.filter((friend, index) => friend.name !== name)
    setFriendsCopy(modifiedArray)
    localStorage.setItem('friends', JSON.stringify(modifiedArray))
  } 

  const paths = ['/friends', '/nitro', '/messageRequests', '/shop']

  return (
    <div className='h-full flex'>
      <div className="DiscordServers bg-primary pb-3">
        <img src={logo} width={'55px'} alt="discord logo" loading="lazy" className="mx-auto mt-3"/>
        <div className="flex flex-col gap-2 mt-4 h-[calc(100vh-2.5rem)] pb-3 overflow-y-scroll serverScrollbar">
          {servers.map((server, index) => 
            index == 0 ? 
            <div key={index}>
              <DiscordServer name={server.name} icon={server.icon} index={index} type={server.type} iconType={server.iconType} background={server.background} hoverColor={server.hoverColor} selectedServer={selectedServer} setSelectedServer={setSelectedServer}/>
              <hr className='border-highlightLightGrey w-[50%] mx-auto my-1 mt-2' />
            </div> :
            <DiscordServer key={index} name={server.name} icon={server.icon} index={index} type={server.type} iconType={server.iconType} background={server.background} hoverColor={server.hoverColor} selectedServer={selectedServer} setSelectedServer={setSelectedServer}/>
          )}
        </div>
      </div>

      <div className="side-sidebar w-60 bg-secondaryDark">
        { paths.includes(location.pathname) &&
          <>
            <div className='searchBar h-[50px] shadow-borderShadow flex items-center justify-center px-3'>
            <input type="text" className="bg-primary w-full rounded text-sm pl-2 py-1 text-white placeholder:text-textGrey" placeholder="Find or start a conversation" />
            </div>

            <div className={`sidebarHover pr-[9.5px] ${friendsCopy.length && 'hover:pr-0'} content h-[calc(100%-103px)] pl-2 pt-2 pb-2 overflow-y-auto scroll scrollbar scrollbar-track scrollbar-thumb scrollbar-thumbhover`}>
              <div className="buttons flex flex-col gap-0.5 mb-5">
                <Link to="/friends">
                  <button className={`flex items-center pl-[21px] w-full ${checkLocation('/friends') && 'bg-secondHighlightGrey text-textOffWhite'} hover:bg-[#36373d] rounded-md h-[42px] mr-[1px]
                  capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110`}>
                    <Friend size={'1.55'}/>
                    <p className='font-ggSansl'>friends</p>
                  </button>
                </Link>
                
                <Link to="/nitro">
                  <button className={`flex items-center pl-4 w-full ${checkLocation('/nitro') && 'bg-secondHighlightGrey text-textOffWhite'} hover:bg-[#36373d] rounded-md h-[42px] mr-[1px]
                  capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110`}>
                    <Nitro size={'1.55'}/>
                    <p className='font-ggSansl'>nitro</p>
                  </button>
                </Link>
                
                <Link to="/messageRequests">
                  <button className={`flex items-center pl-4 w-full ${checkLocation('/messageRequests') && 'bg-secondHighlightGrey text-textOffWhite'} hover:bg-[#36373d] rounded-md h-[42px] mr-[1px]
                  capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110`}>
                    <Messages size={'1.55'}/>
                    <p className='font-ggSansl'>message requests</p>
                  </button>
                </Link>
                
                <Link to="/shop">
                  <button className={`flex items-center pl-4 w-full ${checkLocation('/shop') && 'bg-secondHighlightGrey text-textOffWhite'} hover:bg-[#36373d] rounded-md h-[42px] mr-[1px]
                  capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110`}>
                    <Shop size={'1.55'}/>
                    <p className='font-ggSansl'>shop</p>
                  </button>
                </Link>
              </div>

              <div className="messaging">
                <h1 className="uppercase flex items-center justify-between text-xs pl-3 pr-4 text-textGrey hover:text-[#dbdee1] font-bold ">direct messages
                  <GoPlus size={20} className='cursor-pointer'/>
                </h1>

                <div className="friends mt-2">
                  {friendsCopy.map((friend, index) => {
                    return <Profile key={index} icon={friend.icon} name={friend.name} status={friend.status} position={'modified'} del={modifyFriends}/>
                  })}

                  {!friendsCopy.length &&
                    <h3 className="text-balance text-center text-textGrey px-2 mt-4">You are going to die from loneliness bro</h3>
                  }
                </div>

              </div>
            </div>

            <div className="userBar flex bg-primaryLight min-h-[50px] pl-1 px-2 py-1">
              <div className="profile flex items-center gap-2 flex-1 hover:bg-highlightLightGrey rounded-[4px] py-1 pl-2">
                <div className="icon w-[32px] h-[32px] relative">
                  <img src="https://cdn.discordapp.com/avatars/332771468276400129/18b4eb561bb3b6fbe8c06c8a4bcc9768.webp?size=40" alt="user ico"
                    className="rounded-2xl " />
                  <Status status={'online'}/>
                </div>

                <div className="text-textGrey font-ggSans">
                  <p className="font-medium text-sm text-white">Estif</p>
                  <p className="text-xs">Online</p>
                </div>
              </div>

              <div className="controls flex items-center justify-end gap-[2px] flex-1">
                <button onClick={() => {toggles.mic ? mcOff.play() : mcOn.play(); setToggles(prev => ({...prev, mic: !prev.mic})); !toggles.mic && setToggles(prev => ({...prev, headphone: true}))}} className="flex items-center justify-center w-8 h-8 relative hover:bg-highlightLightGrey p-2 rounded-[4px]">
                  {toggles.mic ? <FaMicrophone color="#b5bac1" size={17}/> : 
                  <FaMicrophoneSlash className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-x-[-1]" color="#f23f42" size={22}/>}
                </button>

                <button onClick={() => {toggles.headphone ? hOff.play() : hOn.play(); setToggles(prev => ({...prev, headphone: !prev.headphone})); toggles.headphone && setToggles(prev => ({...prev, mic: false}))}} 
                className="relative flex items-center justify-center w-8 h-8 hover:bg-highlightLightGrey w-8 p-1 rounded-[4px]">
                  <img src={headphone} alt="icon" loading="lazy" 
                  className={`${toggles.headphone ? 'w-6 visible opacity-100 pointer-events-auto' : 'w-5 translate-x-[-1px] invisible opacity-0 pointer-events-none'}`}/>
                  
                  <img src={headphoneoff} alt="icon" className={`w-[21px] h-[21px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ${toggles.headphone ? 'opacity-0 pointer-events-none invisible' : 'opacity-100 pointer-events-auto visible'}`}/>
                </button>
                <button className=" flex items-center justify-center w-8 h-8 hover:bg-highlightLightGrey p-1 rounded-[4px]"><RiSettings5Fill color="#b5bac1" size={20}/></button>
              </div>
            </div>
          </>
        }
      </div>

    </div>
  )
}
