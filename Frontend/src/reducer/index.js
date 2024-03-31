import {combineReducers} from "@reduxjs/toolkit"
import AuthReducer from "../slice/AuthSlice"

const rootReducer=combineReducers({
    auth:AuthReducer
})

export default rootReducer