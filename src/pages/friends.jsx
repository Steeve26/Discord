import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { BsX } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Status from '../components/status';
import wumpus from '../assets/wumpus.png'
import sadWumpus from '../assets/sad-wumpus.png'
import { useNavigate } from 'react-router-dom';

export default function friends({friendsList, friendFilter, selectedUser, setSelectedUser}) {

  const navigate = useNavigate()
  const [ friends, setFriends ] = useState()

  useEffect(() => {
    friendsList && friendsList.length && setFriends(friendsList)
  }, [friendsList])

  const getActiveFriends = (friends) => {
    if(!friends || !friends.length) {
      return 
    }
    return friends.reduce((activeFriends, friend) => {
      if (friend.status !== 'offline') {
        activeFriends.push(friend);
      }

      return activeFriends;
    }, []);
  };
  
  const [ shownFriends, setShownFriends  ] = useState([])
  const [ searchInput, setSearchInput] = useState('')
  useEffect(() => {   
    if(!friends || !friends.length) {
      return 
    }
    filterShownData()
    searchInput && setSearchInput('')
  }, [friendFilter])
  
  useEffect(() => {
    if(friends){
      setShownFriends(getActiveFriends(friends))
    }
  }, [friends])
  
  const filterShownData = () => {
    if(friendFilter == 'all')
      setShownFriends(friends) 
    else if(friendFilter == 'pending' || friendFilter == 'blocked')
      setShownFriends([])
    else if(friendFilter == 'online')
      setShownFriends(getActiveFriends(friends))
  }

  useEffect(() => {
    if(searchInput && searchInput.trim() && searchInput.trim()) {
      let searchedFriends = shownFriends.filter(jeles => jeles.name.toLowerCase().includes(searchInput.trim().toLowerCase()))
      setShownFriends(searchedFriends)
    }
    else {
      filterShownData()
    }
  }, [searchInput])

  return (
    <div className='pl-7 pt-4 h-[calc(100svh-50px)] font-ggSans text-textGrey'>

    { friendFilter != 'pending' && 
      <div className="searchBar flex mb-6 pr-7">
          <input type="text" placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} 
          className='pl-2 py-[5px] rounded-s bg-primary text-white w-full outline-none'/>

        <button onClick={() => searchInput && setSearchInput('')} className={`bg-primary rounded-e flex items-center justify-center px-2 ${searchInput ? 'cursor-pointer' : 'cursor-default'}`}>
          <IoSearch size={20} className={` text-iconGrey ${searchInput ? 'absolute invisible pointer-events-none' : 'visible pointer-events-auto'}`}/>
          <BsX size={28} className={` text-iconGrey hover:text-white ${searchInput ? 'visible pointer-events-auto' : 'absolute invisible pointer-events-none'}`}/>
        </button>
      </div>
    }

      <div className="friends h-full pb-3">
        { friendFilter != 'pending' && shownFriends && <h3 className='text-xs uppercase font-semibold font-ggSansxl'>{friendFilter != 'pending' && friendFilter} — {shownFriends.length}</h3>}
        { friendFilter != 'pending' || friendFilter != 'blocked' ?
          <div className=" max-h-[calc(100svh-9.75rem)] pb-4 friendList friendList-thumb friendList-thumbhover 
          friendList-track mt-4 flex flex-col overflow-y-scroll">
          { shownFriends && shownFriends.length ? shownFriends.sort((a, b) => a.name.localeCompare(b.name)).map((friend, index) => 
              <div key={index} onClick={() => {setSelectedUser(friend); navigate(`/slideNdm/${friend.name}`)}} className={`w-full min-h-[58px] px-3 group flex justify-between rounded hover:bg-secondHighlightGrey cursor-pointer
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
                  <button className='h-fit bg-secondaryDark rounded-3xl flex items-center justify-center p-2 group-hover:bg-primary hover:text-[#d9dcdf]'>
                    <TbMessageCircle2Filled size={20}/>
                  </button>
                  <button className='h-fit bg-secondaryDark rounded-3xl flex items-center justify-center p-2 group-hover:bg-primary hover:text-[#d9dcdf]'>
                    <HiOutlineDotsVertical size={20}/>
                  </button>
                </div>
              </div>
            ) :
            <div className=' h-64 mt-20 flex flex-col items-center justify-center'>
              <img src={(friendFilter === 'online' && !searchInput.trim()) ? sadWumpus : wumpus} width={'400em'} alt="sad wumpus" />
              <p className='mt-5'>{friendFilter === 'online' ? 'You have' : 'There are'} no {friendFilter === 'blocked' ? 'blocked people.' : friendFilter === 'online' ? searchInput.trim() ? 'friends by that name.' : 'friends online.' : 'pending friend requests.' } So {(friendFilter === 'online' && !searchInput.trim()) ? 'Wumpus is sad and pities you.' : "here's Wumpus for now."}</p>
            </div>
          }

          </div> : ''
        }
      </div>
    </div>
  )
}
