import React from 'react'
import { useSelector } from 'react-redux'
import { setAttendance } from '../service/operations/authApi'

function Attendance() {
    const {user,token}=useSelector(state=>state.auth)
    
    function handleClick(){
     const arrivedTime=new Date(Date.now())
        setAttendance(user._id,arrivedTime,token)
    }
  return (
    <div className='w-full h-[93vh] flex items-center justify-center'>
       
        <div className='flex gap-7'>
            <button onClick={handleClick} className='py-2 px-4 bg-green-300'>
               Arrived
            </button>

            <button className='py-2 px-4 bg-red-400'>
                Leave
            </button>
        </div>
    </div>
  )
}

export default Attendance