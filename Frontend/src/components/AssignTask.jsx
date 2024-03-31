import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { assignTask } from '../service/operations/authApi';

function AssignTask() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const params=useParams()
    const navigate=useNavigate()
    const {token,user} =useSelector(state=>state.auth)

    function getData(data){
        const id=params.id
        data.userId=id
        assignTask(data,token,navigate)
    }
  return (
    <div className='w-full h-[93vh]  flex items-center justify-center'>
        <div className='w-[30%]'>
        <form className='flex flex-col' onSubmit={handleSubmit(getData)}>
                <label id='task' className='w-[40%]'>Task</label>
                <input name='task' type="text" className='bg-gray-300' placeholder='Task mention here...' {...register("task",{required:true})}/>
                
                <label id='startTime'>Start Time</label>
                <input name='startTime' type="datetime-local" className='bg-gray-300' {...register("startTime",{required:true})}/>

                <label id='deadline'>Deadline</label>
                <input name='deadline' type="datetime-local" className='bg-gray-300' {...register("deadline",{required:true})}/>

                <button type='submit' className='w-full bg-green-300 mt-5 font-semibold'>Assing Task</button>
            </form>
        </div>
        
    </div>
  )
}

export default AssignTask