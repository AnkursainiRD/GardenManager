import { setStaff, setTask, setToken, setUser } from "../../slice/AuthSlice.js";
import  {apiConnector}  from "../apiConnector.js"
import {authEndpoints, taskEndpoints} from "../Apis.js"
import {toast} from "react-hot-toast"


export async function login(data,dispatch,navigate){
    console.log(data);
    const toastId=toast.loading("Loading...")
    try {
       
        const response= await apiConnector("POST",authEndpoints.LOGIN_API,data)
        console.log(response.data.success);
        if(!response.data.success){
            throw new Error("Login Failed")
        }
        toast.success("Login Succesfully")
        dispatch(setToken(response.data.token))
        dispatch(setUser(response.data.user))
        localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem("user",JSON.stringify(response.data.user))
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        navigate("/login")
    }
    toast.dismiss(toastId)
    navigate("/")
}


export async function signUp(data,token,navigate){
    const toastId=toast.loading("Loading...")
    try {
        const response=await apiConnector("POST",authEndpoints.SIGNUP_API,data,{'Authorization': `Bearer ${token}`})
        if(!response.data.success){

            throw new Error(response.data.message)
        }
        toast.success("User Created Successfuly")
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    navigate("/")
}


export async function logout(navigate,dispatch){
    const toastId=toast.loading("Loading..")
   try {
     localStorage.removeItem("token")
     localStorage.removeItem("user") 
     localStorage.removeItem("staff")
     dispatch(setToken(null))
     dispatch(setUser(null))
   } catch (error) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message);
   }
   toast.dismiss(toastId)
   location.reload()
   navigate("/")
}

export async function getAllStaff(token,dispatch){
    try {
        const response=await apiConnector("GET",authEndpoints.GET_ALL_STAFF,null,{'Authorization': `Bearer ${token}`})
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        dispatch(setStaff(response.data.data))
        localStorage.setItem("staff",JSON.stringify(response.data.data))
    } catch (error) {
        console.log(error.response.data.message);
    }
}


export async function changeStatus(userId,statusValue,token){
    try {
        console.log("here at change");
        const response=await apiConnector("POST",authEndpoints.CHANGE_STATUS_API,{userId,statusValue},{'Authorization': `Bearer ${token}`})
        if(!response.data.success){
            throw new Error("Couldn't Change Status")
        }
        toast.success("Status Updated")
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
    location.reload()
}


export async function setAttendance(userId,arrivedTime,token){
    try {
        const response = await apiConnector("POST",authEndpoints.SET_ATTENDANCE_API,{userId,arrivedTime},{'Authorization': `Bearer ${token}`})
        if(!response.data.success){
            throw new Error("Couldn't get attendance")
        }
        toast.success("Attendance Marked")
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
}


export async function getAllAttendance(token){
    let result=null
    try {
        const response=await apiConnector("GET",authEndpoints.GET_ALL_ATTENDANCE_API,null,{'Authorization': `Bearer ${token}`})
        if(!response.data.success){
            throw new Error("Couldn't get attendance")
        }
        toast.success("Attendancen fetched")
        result=response.data.data
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
    return result
}

//task related apis

export async function assignTask(data,token,navigate){
    const toastId=toast.loading("Loading..")
    try {
        const response=await apiConnector("POST",taskEndpoints.ASSING_TASK_API,data,{'Authorization': `Bearer ${token}`})
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("Task Assign Successfuly")
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    navigate('/dashboard')
}


export async function getToadyTask(id,token,dispatch){
    console.log(id);
    try {
        const response=await apiConnector("POST",taskEndpoints.GET_TODAY_TASK_API,{id},{'Authorization': `Bearer ${token}`})
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        console.log(response.data.data.task);
        dispatch(setTask(response.data.data.task))
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
}