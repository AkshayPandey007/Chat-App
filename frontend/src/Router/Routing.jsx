import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Chat from '../Pages/Chat'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>

    </Routes>
  )
}

export default Routing