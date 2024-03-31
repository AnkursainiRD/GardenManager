import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
    user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
    staff:localStorage.getItem("staff")?JSON.parse(localStorage.getItem("staff")): null,
    task:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload
        },
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setStaff:(state,action)=>{
            state.staff=action.payload
        },
        setTask:(state,action)=>{
            state.task=action.payload
        }
    }
})

export const {setToken,setUser,setStaff,setTask}=authSlice.actions
export default authSlice.reducer