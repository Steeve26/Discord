import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Friends from '../pages/friends'
import Enemies from '../pages/enemies'
import Nitro from '../pages/nitro'
import MessageRequests from '../pages/messageRequests'
import Shop from '../pages/shop'

export default function routes({friendsList, friendFilter}) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/friends'}/>} />
      <Route path="/friends" element={<Friends friendsList={friendsList} friendFilter={friendFilter}/>} />
      <Route path="/enemies" element={<Enemies/>} />
      <Route path="/nitro" element={<Nitro/>} />
      <Route path="/messageRequests" element={<MessageRequests/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
  )
}
