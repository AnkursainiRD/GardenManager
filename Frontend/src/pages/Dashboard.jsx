import React, { useEffect, useState } from 'react'
import { dashboardlinks } from '../data/dashboardLinks.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeStatus, getAllStaff, getToadyTask } from '../service/operations/authApi.js'

function Dashboard() {
    const {user,token,staff,task}=useSelector(state=>state.auth)
    const dispatch=useDispatch()


    useEffect(()=>{
      if(user.accountType=="admin"){
        getAllStaff(token,dispatch)
      }
      else{
        const userId=user._id
        getToadyTask(userId,token,dispatch)
      }
    },[])

    
    console.log(staff);

  
  return (
    <div className='w-full h-[93vh] flex justify-center '>
        <div className='w-full text-center'><h1 className='font-bold text-black'>{user.fullName}</h1></div>
        {
            dashboardlinks.map((link)=>{
                if(link.type !==user?.accountType) return  null
                return(
                   <button className='w-4/5 flex-row  mt-11 items-center justify-center'> <Link className='p-6 bg-green-300 w-fit' to={link.path}>{link.name}</Link></button>
                )
            })
        }

        
    </div>
  )
}

export default Dashboard