import React, { useEffect, useState } from 'react'
import { getAllAttendance } from '../service/operations/authApi'
import { useSelector } from 'react-redux'

function AllAttendancePage() {
    const {token}=useSelector(state=>state.auth)
    const [attendance,setAttendance]=useState(null)
    useEffect(()=>{
        getAllAttendance(token)
        .then((data)=>{
            setAttendance(data)
        })
        .catch((errors)=>{
            console.log(errors);
        })
    },[])
    console.log(attendance);
  return (
    <div>
        <div className='overflow-x-auto'>
            <table className='w-full table-auto border-collapse text-center'>
                <th>Name</th>
                <th>Status</th>
                <th>Attendance</th>
                
                    {
                          attendance?.map((staff)=>{
                            return <tr>
                                <td>{staff.user.fullName}</td>
                                <td className='capitalize'>{`${staff.user.status?("Active"):("Deactive")}`}</td>
                                <td >Arrived
                                </td>

                            </tr>
                         })   
                    }
            
            </table>
        </div>
    </div>
  )
}

export default AllAttendancePage