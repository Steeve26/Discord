import Sidebar from "./components/sidebar"
// import Routes from "./routes/routes"
import { useLocation } from "react-router-dom"
import Header from "./components/header"
import Routes from "./routes/routes"
import { useState } from "react"

function App() {
  const friends = [
    {name: 'Morpheus', icon: 'https://cdn.discordapp.com/avatars/195233251080667136/2b656a7cd453d04a9b89fa893a15b8a6.webp?size=40', status: 'offline'}, 
    {name: 'Scorpion', icon: 'https://cdn.discordapp.com/avatars/293902131600031744/fbf35f075e835c1c0f5bcab7368cbce2.webp?size=40', status: 'offline'}, 
    {name: '4cid', icon: 'https://cdn.discordapp.com/avatars/458042819123085322/e42b916ce129d2b427cfb0fdab90cc81.webp?size=40', status: 'offline'}, 
    {name: 'Meta ⛏', icon: 'https://cdn.discordapp.com/avatars/182578141695311872/98e5132800deeecbaf22c30035ae42f4.webp?size=40', status: 'offline'}, 
    {name: 'Tamrat', icon: 'https://cdn.discordapp.com/avatars/196704698546389003/ccc3137bf414f5b411418641d8f8b28c.webp?size=40', status: 'offline'}, 
    {name: 'Gli7ch', icon: 'https://cdn.discordapp.com/avatars/623490238366613505/7e60b2989237a24989a6b9b81414d8e7.webp?size=40', status: 'offline'}, 
    {name: 'Saibot', icon: 'https://cdn.discordapp.com/avatars/419474438350831616/2ee1789bd12355a9add8186fb77d1d8e.webp?size=40', status: 'offline'}, 
    {name: 'melodias', icon: 'https://cdn.discordapp.com/avatars/699752791819812894/9f3e99d37515d571cd65ebe47641c9ac.webp?size=40', status: 'offline'}, 
    {name: 'johnald', icon: 'https://cdn.discordapp.com/avatars/295614867027525632/30f6ed57508ef5ef172882ec9bcee77a.webp?size=40', status: 'offline'}, 
    {name: 'Ayako', icon: 'https://cdn.discordapp.com/avatars/650691698409734151/9ca4ad70d8ef529d31a3ec03923bddcb.webp?size=40', status: 'offline'}, 
    {name: 'Arlecchino', icon: 'https://cdn.discordapp.com/avatars/387966293908783106/aacc53d005ffd9f5337d525910665a1c.webp?size=40', status: 'offline'}, 
    {name: 'betsha', icon: 'https://cdn.discordapp.com/avatars/285318775862067202/776682a873c75c32922a51f21a8f2552.webp?size=40', status: 'offline'}, 
    {name: 'LemonsByte', icon: 'https://cdn.discordapp.com/avatars/1032523265907892305/1c9ed2c0f9dc25741b5d517f90948a3c.webp?size=40', status: 'offline'}, 
    {name: 'LightOfHeaven', icon: 'https://cdn.discordapp.com/avatars/465112512245792768/d2f8377274d31fa9e8834dff3787726d.webp?size=40', status: 'offline'}, 
    {name: 'Shifty', icon: 'https://cdn.discordapp.com/avatars/293422423607607296/44267e7240f4ab53e9406848ec8a7351.webp?size=40', status: 'offline'}, 
    {name: 'Nati', icon: 'https://cdn.discordapp.com/avatars/304240692593557515/459eac10b2738a01a6f72c2ced06b696.webp?size=40', status: 'offline'}, 
    {name: 'AmirAhmedReja', icon: 'https://cdn.discordapp.com/avatars/667074382258110514/76ea29d6a20e5867d7a94fa36616786e.webp?size=40', status: 'offline'}, 
    {name: 'BloodHound', icon: 'https://cdn.discordapp.com/avatars/406204050477154314/e7e4626b4241fe9dd3c5ed0097d88366.webp?size=40', status: 'offline'}, 
    {name: 'Robby', icon: 'https://cdn.discordapp.com/avatars/465172213675589634/652feb03e7faf028a6c232e8093db27c.webp?size=40', status: 'offline'}, 
    {name: 'BristleB', icon: 'https://cdn.discordapp.com/avatars/457844649831432192/5c7bb4e8c96ecb89af8f45bff26f206b.webp?size=40', status: 'offline'},
    {name: 'mikes0ap', icon: 'https://cdn.discordapp.com/avatars/586649116516417537/490f60ba50f5b2e98b3b685a65a2cbd6.webp?size=40', status: 'offline'}, 
    {name: 'rogueWanted47', icon: 'https://cdn.discordapp.com/avatars/548543803133394955/cac5e802a04c203480e5f754130883ab.webp?size=40', status: 'offline'}
  ]

  const getFriends = (friends) => {
    const randomLimit = Math.floor(Math.random() * 12)

    const randomIndexes = [];
    while (randomIndexes.length < randomLimit && randomIndexes.length < friends.length) {
      const randomIndex = Math.floor(Math.random() * friends.length);
      if (randomIndexes[0] != 0 && !randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    const selectedFriends = randomIndexes.map(index => ({...friends[index]}));

    selectedFriends.forEach((friend, index) => {
      index < 4 ? friend.status = 'online' : friend.status = 'idle';
    });

    const modifiedFriends = [...friends];

    selectedFriends.forEach(selectedFriend => {
      const index = modifiedFriends.findIndex(friend => friend.name === selectedFriend.name);
      if (index !== -1) {
        modifiedFriends[index] = selectedFriend;
      }
    });

    return modifiedFriends
  }

  const [ modifiedFriends, setModifiedFriends ] = useState(getFriends(friends))
  const [ friendFilter, seFriendFilter ] = useState('online')
  
  return (
    <main className=" h-svh flex bg-secondary">
      <Sidebar friendsList={modifiedFriends}/>
      <section className="flex flex-col w-full">
        <Header friendFilter={friendFilter} seFriendFilter={seFriendFilter} />
        
        <div className="mainContent flex-grow">
          <Routes friendsList={modifiedFriends} friendFilter={friendFilter}/>
        </div>
      </section>
    </main>
  )
}

export default App
