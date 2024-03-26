import DiscordServer from './discordServer'
import { FaDiscord, FaCompass } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { GoDownload } from "react-icons/go";
import MidJourney from '../assets/midjourney.svg'
import react from '../assets/react-16-svgrepo-com.svg'
import logo from'../assets/discord-logo.png'
import Friend from '../assets/icons/friend';
import Nitro from '../assets/icons/nitro';
import Messages from '../assets/icons/message';
import Shop from '../assets/icons/shop';

export default function sidebar() {
  return (
    <div className='h-screen flex'>
      <div className="flex flex-col bg-primary text-white shadow-lg pt-2 w-[4.5rem] h-full">
        <div className='mx-auto w-[80%] mb-3'><img src={logo} alt="discord logo"/></div>
        <DiscordServer icon={<FaDiscord color='white' size={33}/>} first={true}/>
        <hr className='border-highlightLightGrey w-8 mx-auto my-2' />
        <DiscordServer icon={MidJourney} background={'bg-white'} iconType='image'/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/322850917248663552/0d76b3a60f4987ca91d0456a6905bdf8.webp?size=128"}iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/302094807046684672/a_916131f4d4e8c6f6eed9f590a1982725.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/707230275175841915/36c8c90fb08f6c097d897b7a0fa15312.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/153919886471593984/41005b5c251283f2f53321794c6e4078.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={"https://cdn.discordapp.com/icons/752553802359505017/065ee8ece89b91115525fef8ae2c15cb.webp?size=128"} iconType={'image'}/>
        <DiscordServer icon={react} iconType={'image'}/>
        <DiscordServer icon={<TiPlus size={28}/>} type='actions'/>
        <DiscordServer icon={<FaCompass size={25}/>} type='actions'/>
        <DiscordServer icon={<GoDownload size={25}/>} type='actions'/>
      </div>

      <div className="https://discord.com/store w-60 bg-sidebarDark">
        <div className='h-[50px] shadow-borderShadow flex items-center justify-center px-3'>
          <input type="text" className="bg-primary w-full rounded-[4px] text-sm pl-2 py-1 text-[#949ba4] placeholder:text-[#949ba4]" placeholder="Find or start a conversation" />
        </div>

        <div className="content h-full pl-2 pt-2">
          <div className="buttons flex flex-col gap-0.5">
            <button className='flex items-center pl-[18px]  w-full hover:bg-[#404249] rounded-md h-[42px] mr-[1px] 
            capitalize text-[#949ba4] font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Friend size={'1.55'}/>
              <p className='font-ggSansl'>friends</p>
            </button>
            <button className='flex items-center pl-4  w-full hover:bg-[#404249] rounded-md h-[42px] mr-[1px] 
            capitalize text-[#949ba4] font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Nitro size={'1.55'}/>
              <p className='font-ggSansl'>nitro</p>
            </button>
            <button className='flex items-center pl-4  w-full hover:bg-[#404249] rounded-md h-[42px] mr-[1px] 
            capitalize text-[#949ba4] font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Messages size={'1.55'}/>
              <p className='font-ggSansl'>message requests</p>
            </button>
            <button className='flex items-center pl-4  w-full hover:bg-[#404249] rounded-md h-[42px] mr-[1px] 
            capitalize text-[#949ba4] font-medium leading-5 hover:text-[#dbdee1] gap-4 active:brightness-110'>
              <Shop size={'1.55'}/>
              <p className='font-ggSansl'>shop</p>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
