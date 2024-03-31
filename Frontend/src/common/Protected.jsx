import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
    const {token}=useSelector(state=>state.auth)
    console.log("working");
    if(token!==null){
        return children
    }
    else{
        return <Navigate to={"/login"}/>
    }
  return (
    <div>
    </div>
  )
}

export default Protected

