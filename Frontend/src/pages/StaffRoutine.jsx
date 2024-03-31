import React from 'react'
import { useSelector } from 'react-redux'

function StaffRoutine() {
    const {staff}=useSelector(state=>state.auth)
    console.log(staff);
  return (
    <div>
        <div className='overflow-x-auto'>
            <table className='w-full table-auto border-collapse text-center'>
                <th>Name</th>
                <th>Tasks</th>
                
                    {
                          staff?.map((staff,index)=>{
                            return <tr>
                                <td>{staff.fullName}</td>
                                {staff.task.length!=0?
                                (
                                    staff.task.map((task,index)=>{
                                        return <td>{index+1}- {task.Assignment}</td>
                                    })
                                ):
                                (
                                     <h1>No Task Assigned yet </h1>
                                )}
                            </tr>
                         })   
                    }
            
            </table>
        </div>
    </div>
  )
}

export default StaffRoutine