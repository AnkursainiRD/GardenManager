import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './common/Navbar'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <div className='w-full h-full flex-col justify-center items-center'>
    <div><Navbar/></div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
