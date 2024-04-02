import React from 'react'
import discordLogo from '../assets/discord-logo blue.png'

export default function UserSelector({friends, selectedUserAccount, setSelectedUserAccount}) {
  return (
    <div className={`modal fixed inset-0 w-full h-full flex flex-col items-center justify-center gap-1 
    font-ggSans text-textOffWhite bg-[#00000051] backdrop-blur-[4px] ${selectedUserAccount ? 'hidden opacity-0 pointer-events-none' : 'visible opacity-100 pointer-events-auto'}`}>
      <img src={discordLogo} width={120} alt="logo" />
      <div className="modalContent bg-secondary rounded-md px-3 py-2">
        <div className="searchBox">
          <input type="text" placeholder='Select your account' />
        </div>

        <div className="users max-h-64 overflow-y-auto">
          { friends.map((account, index) =>
            <div className="profile flex items-center capitalizegap-2" key={index} onClick={() => {setSelectedUserAccount(account); localStorage.setItem('account', JSON.stringify(account))}}>
              <img src={account.icon} alt="user icon" />
              <p>{account.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
