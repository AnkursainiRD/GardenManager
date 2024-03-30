import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { login } from '../service/operations/authApi';

function LoginPage() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [showPassword,setShowPassword]=useState(false)

    function getData(data){
        login(data)
    }
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className='w-[20%]'>
            <form className='flex flex-col' onSubmit={handleSubmit(getData)}>
                <label id='email' className='w-[40%]'>Email</label>
                <input name='email' type="email" className='bg-gray-300' placeholder='xyz@gmail' {...register("email",{required:true})}/>
                {errors.email && <p className='text-red-400'>Email is required</p>} 

                <label id='password'>Password</label>
                <input name='password' type={`${showPassword?("text"):("password")}`} className='bg-gray-300' {...register("password",{required:true})}/>
                <p onClick={()=>setShowPassword(!showPassword)}>{showPassword?("Hide"):("Show")}</p>
                {errors.password && <p>Password is required</p>}

                <button type='submit' className='w-full bg-green-300 mt-5 font-semibold'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage