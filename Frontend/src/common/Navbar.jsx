import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../service/operations/authApi'

function Navbar() {
  const {token}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  function handleClick(){
    logout(navigate,dispatch)
  }
  return (
    <div className="w-full  bg-green-400 h-16">
        <div className='w-11/12 flex justify-between mx-auto items-center pt-3'>
            <div>
            <h1 className='text-2xl font-bold text-white'>Garden Site</h1>
            </div>

             <div>
            <ul className='flex gap-5 text-white font-semibold'>
                <Link to={"/"}>Home</Link>
                <Link to={'/'}>About Us</Link>
                {
                  token?(
                    <div className='flex gap-5'>
                      <Link to={'/dashboard'}>Dashboard</Link>
                      <button onClick={handleClick}>Logout</button>
                    </div>
                  ):
                  (
                    <Link to={"/login"}>Login</Link>
                  )
                }
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar