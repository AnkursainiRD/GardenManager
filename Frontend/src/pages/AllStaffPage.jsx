import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeStatus, getAllStaff } from '../service/operations/authApi'

function AllStaffPage() {
    const {staff,user,token}=useSelector(state=>state.auth)
    const dispatch=useDispatch()

    function handleToggle(statusValue,userId){
        changeStatus(userId,statusValue,token)
      }
      useEffect(()=>{
        getAllStaff(token,dispatch)
      },[])
  return (
    <div className='w-full h-[93vh] flex flex-col items-center justify-center gap-4'>
        <h1 className='font-bold'>All Staff</h1>
{
          user.accountType=="admin" && (
            <div className='w-[40%] bg-gray-300'>
               <ul>
                  {
                    staff && staff.map((user,index)=>{
                      return <div key={index} className=' flex justify-between mb-3 px-4  border-b-2'>
                           <li className='border-r-2'  key={index}>{user.fullName} - {`${user.status?("Online"):("Offline")}`}</li>
                          <button className='p-2 bg-green-400 text-white cursor-pointer' onClick={()=>handleToggle(!user.status,user._id)} >{user.status ?("Deactivate"):("Activate")}</button>
                           {
                            user.status?(<Link className='p-2 bg-green-400 text-white cursor-pointer' to={`/assignTask/${user._id}`}>Assign Task</Link>):
                            (<h1 className='p-2 bg-red-400 text-white cursor-pointer'>Offline</h1>)
                           }
                      </div>
                    })
                  }
               </ul>
              </div>
          )
        }
    </div>
  )
}

export default AllStaffPage