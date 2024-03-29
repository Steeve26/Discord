import { useState } from "react";
import { FaDiscord, FaCompass, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { GoDownload, GoPlus } from "react-icons/go";
import { TiPlus } from "react-icons/ti";
import { RiSettings5Fill } from "react-icons/ri";
import MidJourney from '../assets/midjourney.svg'
import react from '../assets/react-16-svgrepo-com.svg'
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
import { Link } from "react-router-dom";

export default function sidebar({friendsList}) {

  const [toggles, setToggles] = useState({mic: 'false', headphone: 'false'})

  const hOff = new Audio(headOff) 
  const hOn = new Audio(headOn)
  const mcOff = new Audio(micOff) 
  const mcOn = new Audio(micOn)

  const audioFiles = [hOff, hOn, mcOff, mcOn];

  audioFiles.forEach(audio => {
      audio.volume = 0.4;
  });

  return (
    <div className='h-full flex'>
      <div className="flex flex-col bg-primary text-white shadow-lg pt-2 w-[4.5rem] h-full">
        <div className='mx-auto w-[80%] mb-3'><img src={logo} alt="discord logo"/></div>
        <DiscordServer icon={<FaDiscord color='white' size={33}/>} first={true}/>
        <hr className='border-highlightLightGrey w-8 mx-auto my-2' />
        <DiscordServer icon={MidJourney} background={'bg-white'} iconType='image'/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/322850917248663552/0d76b3a60f4987ca91d0456a6905bdf8.webp?size=128"}iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/303457917955342357/0cefdbe4925567dde19dfc5498af948c.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/302094807046684672/a_916131f4d4e8c6f6eed9f590a1982725.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/707230275175841915/36c8c90fb08f6c097d897b7a0fa15312.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/153919886471593984/41005b5c251283f2f53321794c6e4078.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/752553802359505017/065ee8ece89b91115525fef8ae2c15cb.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={react} iconType={'image'}/>
        <DiscordServer icon={<TiPlus size={28}/>} type='actions'/>
        <DiscordServer icon={<FaCompass size={25}/>} type='actions'/>
        <DiscordServer icon={<GoDownload size={25}/>} type='actions'/>
      </div>

      <div className="side-sidebar w-60 bg-secondaryDark">
        <div className='searchBar h-[50px] shadow-borderShadow flex items-center justify-center px-3'>
          <input type="text" className="bg-primary w-full rounded text-sm pl-2 py-1 text-white placeholder:text-textGrey" placeholder="Find or start a conversation" />
        </div>

        <div className=" sidebarHover pr-[10px] hover:pr-0 content h-[calc(100%-110px)] pl-2 pt-2 pb-2 overflow-y-auto scroll scrollbar scrollbar-track scrollbar-thumb scrollbar-thumbhover">
          <div className="buttons flex flex-col gap-0.5 mb-5">
            <Link to="/">
              <button className='flex items-center pl-[18px]  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px]
              capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
                <Friend size={'1.55'}/>
                <p className='font-ggSansl'>friends</p>
              </button>
            </Link>
            
            <Link to="/">
              <button className='flex items-center pl-4  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px]
              capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
                <Nitro size={'1.55'}/>
                <p className='font-ggSansl'>nitro</p>
              </button>
            </Link>
            
            <Link to="/">
              <button className='flex items-center pl-4  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px]
              capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
                <Messages size={'1.55'}/>
                <p className='font-ggSansl'>message requests</p>
              </button>
            </Link>
            
            <Link to="/">
              <button className='flex items-center pl-4  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px]
              capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
                <Shop size={'1.55'}/>
                <p className='font-ggSansl'>shop</p>
              </button>
            </Link>
          </div>

          <div className="messaging">
            <h1 className="uppercase flex items-center justify-between text-xs pl-3 pr-4 text-textGrey hover:text-[#dbdee1] font-bold ">direct messages
              <GoPlus size={20} className='cursor-pointer'/>
            </h1>

            <div className="friends mt-4">
              {friendsList.map((friend, index) => {
                return <Profile key={index} icon={friend.icon} name={friend.name} status={friend.status}/>
              })}
            </div>

          </div>
        </div>

        <div className="userBar flex bg-primaryLight min-h-[50px] pl-1 px-2 py-1">
          <div className="profile flex items-center gap-2 flex-1 hover:bg-highlightLightGrey rounded-[4px] pl-2">
            <div className="icon w-[32px] h-[32px] rounded-2xl overflow-hidden">
              <img src="https://cdn.discordapp.com/avatars/332771468276400129/18b4eb561bb3b6fbe8c06c8a4bcc9768.webp?size=40" alt="" />
            </div>

            <div className="text-textGrey font-ggSans py-2">
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
        
      </div>

    </div>
  )
}
