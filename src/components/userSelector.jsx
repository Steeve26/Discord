import React, { useEffect, useState } from 'react'
import discordLogo from '../assets/discord-logo white.png'

export default function UserSelector({friends, selectedUserAccount, setSelectedUserAccount}) {

  const [ shownAccounts, setShownAccounts ] = useState([...friends])
  const [ searchInput, setSearchInput ] = useState('')

  useEffect(() => {
    if(searchInput.trim()) {
      const filteredAccounts = [...friends].filter(friend => friend.name.toLowerCase().includes(searchInput))
      setShownAccounts(filteredAccounts)
    }
    else setShownAccounts([...friends])
    
  }, [searchInput])

  return (
    <div className={`modal fixed inset-0 w-full h-full flex flex-col items-center justify-center gap-1 
    font-ggSans text-textOffWhite bg-[#00000051] backdrop-blur-[4px] duration-200 ${selectedUserAccount ? 'hidden opacity-0 pointer-events-none' : 'visible opacity-100 pointer-events-auto'}`}>
      <span className=' uppercase font-ggSansxl text-xl'>welcome to</span><img src={discordLogo} width={120} alt="logo" />
      <div className="modalContent bg-secondary rounded-md px-5 py-2 w-96 duration-200">
        <div className="searchBox mb-3 py-2 bg-primary text-textOffWhite rounded">
          <input type="text" placeholder='Search for your account' className=' pl-4 bg-transparent w-full outline-none' onChange={(e) => setSearchInput(e.target.value.toLowerCase().trim())} autoFocus/>
        </div>

        <div className="users max-h-64 overflow-y-auto friendList friendList-thumb friendList-thumbhover 
          friendList-track">
          { shownAccounts.length ? shownAccounts.sort((a,b) => a.name.localeCompare(b.name)).map((account, index) =>
            <div className="profile flex items-center capitalize gap-2 px-2 py-1 mb-2 hover:bg-[#3f4147] rounded duration-200 cursor-pointer" key={index} onClick={() => {setSelectedUserAccount({...account, status: 'online'}); localStorage.setItem('account', JSON.stringify({...account, status: 'online'}))}}>
              <img src={account.icon} alt="user icon" className=' rounded-3xl'/>
              <p>{account.name}</p>
            </div> 
            ):
            <h3 className=' capitalize'>no one by that name :(</h3>
           }
        </div>
      </div>
    </div>
  )
}
