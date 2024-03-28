import { FaDiscord, FaCompass, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { GoDownload, GoPlus } from "react-icons/go";
import { TiPlus } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
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
import { useState } from "react";
import micOff from '../assets/mic-off.mp3';
import micOn from '../assets/mic-on.mp3';
import headOff from '../assets/headphone-off.mp3';
import headOn from '../assets/headphone-on.mp3';

export default function sidebar() {
  const friends = [
    {name: 'Morpheus', icon: 'https://cdn.discordapp.com/avatars/195233251080667136/2b656a7cd453d04a9b89fa893a15b8a6.webp?size=40'}, 
    {name: 'Scorpion', icon: 'https://cdn.discordapp.com/avatars/293902131600031744/fbf35f075e835c1c0f5bcab7368cbce2.webp?size=40'}, 
    {name: '4cid', icon: 'https://cdn.discordapp.com/avatars/458042819123085322/e42b916ce129d2b427cfb0fdab90cc81.webp?size=40'}, 
    {name: 'Meta ⛏', icon: 'https://cdn.discordapp.com/avatars/182578141695311872/98e5132800deeecbaf22c30035ae42f4.webp?size=40'}, 
    {name: 'Tamrat', icon: 'https://cdn.discordapp.com/avatars/196704698546389003/ccc3137bf414f5b411418641d8f8b28c.webp?size=40'}, 
    {name: 'Gli7ch', icon: 'https://cdn.discordapp.com/avatars/623490238366613505/7e60b2989237a24989a6b9b81414d8e7.webp?size=40'}, 
    {name: 'Saibot', icon: 'https://cdn.discordapp.com/avatars/419474438350831616/2ee1789bd12355a9add8186fb77d1d8e.webp?size=40'}, 
    
    {name: 'melodias', icon: 'https://cdn.discordapp.com/avatars/699752791819812894/9f3e99d37515d571cd65ebe47641c9ac.webp?size=40'}, 
    {name: 'johnald', icon: 'https://cdn.discordapp.com/avatars/295614867027525632/30f6ed57508ef5ef172882ec9bcee77a.webp?size=40'}, 
    {name: 'Ayako', icon: 'https://cdn.discordapp.com/avatars/650691698409734151/9ca4ad70d8ef529d31a3ec03923bddcb.webp?size=40'}, 
    {name: 'Arlecchino', icon: 'https://cdn.discordapp.com/avatars/387966293908783106/aacc53d005ffd9f5337d525910665a1c.webp?size=40'}, 
    {name: 'betsha', icon: 'https://cdn.discordapp.com/avatars/285318775862067202/776682a873c75c32922a51f21a8f2552.webp?size=40'}, 
    {name: 'LemonsByte', icon: 'https://cdn.discordapp.com/avatars/1032523265907892305/1c9ed2c0f9dc25741b5d517f90948a3c.webp?size=40'}, 
    
    {name: 'LightOfHeaven', icon: 'https://cdn.discordapp.com/avatars/465112512245792768/d2f8377274d31fa9e8834dff3787726d.webp?size=40'}, 
    {name: 'Shifty', icon: 'https://cdn.discordapp.com/avatars/293422423607607296/44267e7240f4ab53e9406848ec8a7351.webp?size=40'}, 
    {name: 'Nati', icon: 'https://cdn.discordapp.com/avatars/304240692593557515/459eac10b2738a01a6f72c2ced06b696.webp?size=40'}, 
    {name: 'AmirAhmedReja', icon: 'https://cdn.discordapp.com/avatars/667074382258110514/76ea29d6a20e5867d7a94fa36616786e.webp?size=40'}, 
    {name: 'BloodHound', icon: 'https://cdn.discordapp.com/avatars/406204050477154314/e7e4626b4241fe9dd3c5ed0097d88366.webp?size=40'}, 
    {name: 'Robby', icon: 'https://cdn.discordapp.com/avatars/465172213675589634/652feb03e7faf028a6c232e8093db27c.webp?size=40'}, 
    {name: 'BristleB', icon: 'https://cdn.discordapp.com/avatars/457844649831432192/5c7bb4e8c96ecb89af8f45bff26f206b.webp?size=40'},
    
    {name: 'mikes0ap', icon: 'https://cdn.discordapp.com/avatars/586649116516417537/490f60ba50f5b2e98b3b685a65a2cbd6.webp?size=40'}, 
    {name: 'rogueWanted47', icon: 'https://cdn.discordapp.com/avatars/548543803133394955/cac5e802a04c203480e5f754130883ab.webp?size=40'}
  ]

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
          <input type="text" className="bg-primary w-full rounded-[4px] text-sm pl-2 py-1 text-textGrey placeholder:text-textGrey" placeholder="Find or start a conversation" />
        </div>

        <div className=" sidebarHover pr-[10px] hover:pr-0 content h-[calc(100%-103px)] pl-2 pt-2 pb-2 overflow-y-auto scroll scrollbar scrollbar-track scrollbar-thumb scrollbar-thumbhover">
          <div className="buttons flex flex-col gap-0.5 mb-5">
            <button className='flex items-center pl-[18px]  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px] 
            capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Friend size={'1.55'}/>
              <p className='font-ggSansl'>friends</p>
            </button>
            <button className='flex items-center pl-4  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px] 
            capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Nitro size={'1.55'}/>
              <p className='font-ggSansl'>nitro</p>
            </button>
            <button className='flex items-center pl-4  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px] 
            capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Messages size={'1.55'}/>
              <p className='font-ggSansl'>message requests</p>
            </button>
            <button className='flex items-center pl-4  w-full hover:bg-secondHighlightGrey rounded-md h-[42px] mr-[1px] 
            capitalize text-textGrey font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Shop size={'1.55'}/>
              <p className='font-ggSansl'>shop</p>
            </button>
          </div>

          <div className="messaging">
            <h1 className="uppercase flex items-center justify-between text-xs pl-3 pr-4 text-textGrey hover:text-[#dbdee1] font-bold ">direct messages
              <GoPlus size={20} className='cursor-pointer'/>
            </h1>

            <div className="friends mt-4">
              {friends.map((freind, index) => {
                return <Profile key={index} icon={freind.icon} name={freind.name}/>
              })}
            </div>

          </div>
        </div>

        <div className="userBar flex bg-primaryLight h-[50px] pl-1 px-2 py-1">
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
              {toggles.headphone && <img src={headphone} alt="icon" loading="lazy" 
              className={`${toggles.headphone ? 'w-6' : 'w-5 translate-x-[-1px]'}`}/>}
              
              <img src={headphoneoff} alt="icon" className={`w-[21px] h-[21px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ${toggles.headphone ? 'opacity-0 pointer-events-none invisible' : 'opacity-100 pointer-events-auto visible'}`}/>
            </button>
            <button className=" flex items-center justify-center w-8 h-8 hover:bg-highlightLightGrey p-1 rounded-[4px]"><RiSettings5Fill color="#b5bac1" size={20}/></button>
          </div>
        </div>
        
      </div>

    </div>
  )
}
