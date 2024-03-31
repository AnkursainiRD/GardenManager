import React from 'react'
import { useSelector } from 'react-redux'

function ViewTaskPage() {
    const {task}=useSelector(state=>state.auth)
  return (
    <div>
        <div className='w-full flex flex-col gap-6 items-center justify-center h-[93vh] '>
        <div className='flex gap-10 '>
             <h1 className='text-2xl font-semibold'>Assignment</h1>
             <h1 className='text-2xl font-semibold'>Deadline</h1>
        </div>
          { task && (
            task?.map((task)=>{
              return <div className='flex  gap-10 mb-9 '>
                <div>
                </div>
                <h1>{task?.Assignment}</h1>
                <h2>{new Date(task?.startTime).toLocaleTimeString('UTC')} - {new Date(task?.deadline).toLocaleTimeString('UTC')} :  {new Date(task?.deadline).toLocaleDateString('en-GB')}</h2>
              </div>
            })
          )}
          </div>
    </div>
  )
}

export default ViewTaskPage