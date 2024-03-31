import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signUp } from '../service/operations/authApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function SignUpPage() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {token}=useSelector(state=>state.auth)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [showPassword,setShowPassword]=useState(false)
    
    function getData(data){

        data.accountType="staff"
        console.log("working here");
        dispatch(signUp(data,token,navigate))
    }
  return (
    <div className='w-full h-[93vh] flex items-center justify-center'>
         <div className='w-[20%] '>
            <form className='flex flex-col' onSubmit={handleSubmit(getData)}>

                <label id='fullName' className='w-[40%]'>Full Name</label>
                <input name='fullName' type="text" className='bg-gray-300' placeholder='xyz' {...register("fullName",{required:true})}/>
                {errors.fullName && <p className='text-red-400'>Full Name is required</p>} 

                <label id='email' className='w-[40%]'>Email</label>
                <input name='email' type="email" className='bg-gray-300' placeholder='xyz@gmail' {...register("email",{required:true})}/>
                {errors.email && <p className='text-red-400'>Email is required</p>} 

                <label id='password'>Password</label>
                <input name='password' type={`${showPassword?("text"):("password")}`} className='bg-gray-300' {...register("password",{required:true})}/>
                <p onClick={()=>setShowPassword(!showPassword)}>{showPassword?("Hide"):("Show")}</p>
                {errors.password && <p>Password is required</p>}

                <button type='submit' className='w-full bg-green-300 mt-5 font-semibold'>SignUp</button>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage