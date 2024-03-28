import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Friends from '../pages/friends'
import Enemies from '../pages/enemies'

export default function routes({friendsList, friendFilter}) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/friends'}/>} />
      <Route path="/friends" element={<Friends friendsList={friendsList} friendFilter={friendFilter}/>} />
      <Route path="/enemies" element={<Enemies/>} />
    </Routes>
  )
}
