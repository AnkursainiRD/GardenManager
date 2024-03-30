import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:localStorage.getItem("token")?localStorage.getItem("token"):null,
    loading:false
}

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload
        }
    }
})