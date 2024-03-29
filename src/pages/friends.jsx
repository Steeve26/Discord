import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { BsX } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Status from '../components/status';

export default function friends({friendsList, friendFilter}) {

  const [ friends, setFriends ] = useState(friendsList)
  console.log(friendsList);

  const getActiveFriends = (friends) => {
    return friends.reduce((activeFriends, friend) => {
      if (friend.status !== 'offline') {
        activeFriends.push(friend);
      }
      return activeFriends;
    }, []);
  };
  
  const [ shownFriends, setShownFriends  ] = useState(getActiveFriends(friends))
  const [ searchInput, setSearchInput] = useState('')
  
  useEffect(() => { 
    if(friendFilter == 'all')
      setShownFriends(friends) 
    else if(friendFilter == 'pending' || friendFilter == 'blocked')
      setShownFriends([])
    else if(friendFilter == 'online')
      setShownFriends(getActiveFriends(friends))
  }, [friendFilter])

  return (
    <div className='pl-7 pt-4 font-ggSans text-textGrey'>

    { friendFilter != 'pending' && 
      <div className="searchBar flex mb-6 pr-7">
          <input type="text" placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} 
          className='pl-2 py-[5px] rounded-s bg-primary text-white w-full outline-none'/>

        <button onClick={() => searchInput && setSearchInput('')} className={`bg-primary rounded-e flex items-center justify-center pr-2 ${searchInput ? 'cursor-pointer' : 'cursor-default'}`}>
          <IoSearch size={20} className={` text-iconGrey ${searchInput ? 'absolute invisible pointer-events-none' : 'visible pointer-events-auto'}`}/>
          <BsX size={28} className={` text-iconGrey hover:text-white ${searchInput ? 'visible pointer-events-auto' : 'absolute invisible pointer-events-none'}`}/>
        </button>
      </div>
    }

      <div className="friends">
        { friendFilter != 'pending' && <h3 className='text-xs uppercase font-semibold font-ggSansxl'>{friendFilter != 'pending' && friendFilter} — {shownFriends.length}</h3>}
        { friendFilter != 'pending' || friendFilter != 'blocked' ?
          <div className=" max-h-[600px] friendList friendList-thumb friendList-thumbhover 
          friendList-track mt-4 pb-20 flex flex-col overflow-y-scroll">
          { shownFriends.map((friend, index) => 
              <div key={index} className={`w-full min-h-[58px] px-3 group flex justify-between rounded hover:bg-secondHighlightGrey cursor-pointer
                relative before:content-[''] before:absolute before:h-[1px] before:bg-[#3f4147] before:top-0 before:left-[50%] before:translate-x-[-50%] before:w-[99%] before:block`}>
                <div className="left flex items-center gap-3">
                  <div className='relative'>
                    <img src={friend.icon} alt="icon" className='rounded-3xl' />
                    <Status status={friend.status}/>
                  </div>
                  
                  <div className="info">
                    <p className=' text-base font-ggSansxl text-textOffWhite'>{friend.name}</p>
                    <p className=' text-sm font-medium font-ggSansl text-iconLightGrey'>{friend.status}</p>
                  </div>
                </div>

                <div className="right flex items-center justify-center gap-2">
                  <button className=' h-fit bg-secondaryDark rounded-3xl flex items-center justify-center p-2 group-hover:bg-primary'>
                    <TbMessageCircle2Filled className=' hover:text-[#d9dcdf]' size={20}/>
                  </button>
                  <button className=' h-fit bg-secondaryDark rounded-3xl flex items-center justify-center p-2 group-hover:bg-primary'>
                    <HiOutlineDotsVertical className=' hover:text-[#d9dcdf]' size={20}/>
                  </button>
                </div>
              </div>
            )
          }

          </div> : ''
        }
      </div>
    </div>
  )
}
