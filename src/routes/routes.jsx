import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Friends from '../pages/friends'
import Enemies from '../pages/enemies'
import Nitro from '../pages/nitro'
import MessageRequests from '../pages/messageRequests'
import Shop from '../pages/shop'
import Messaging from "../pages/messaging"
import ServerContent from "../pages/serverContent"

export default function routes({friendsList, friendFilter, servers, selectedServer, setSelectedServer, setParamServer, serverExists, setServerExists, selectedUser, setSelectedUser, selectedUserAccount}) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/friends'}/>} />
      <Route path="/friends" element={<Friends friendsList={friendsList} friendFilter={friendFilter} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>} />
      <Route path="/enemies" element={<Enemies/>} />
      <Route path="/nitro" element={<Nitro/>} />
      <Route path="/messageRequests" element={<MessageRequests/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/slideNdm/:userName" element={<Messaging selectedUser={selectedUser} setSelectedUser={setSelectedUser} friendsList={friendsList}/>} />
      <Route path="/server/:name" element={<ServerContent servers={servers} selectedServer={selectedServer} setSelectedServer={setSelectedServer} setParamServer={setParamServer} serverExists={serverExists} setServerExists={setServerExists}/>} />
    </Routes>
  )
}
