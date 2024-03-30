import  {apiConnector}  from "../apiConnector.js"
import {authEndpoints} from "../Apis.js"
import {toast} from "react-hot-toast"


export async function login(data){
    console.log(data);
    const toastId=toast.loading("Loading...")
    try {
        console.log("here");
        const response=await apiConnector("POST",authEndpoints.LOGIN_API,data)
        if(!response.data.success){
            throw new Error("Login Failed")
        }
        toast.success("Login Succesfully")
        console.log(response.data.token);
        localStorage.setItem("token",JSON.stringify(response.data.token))
    } catch (error) {
        console.log(error);
        toast.error(error)
    }
    toast.dismiss(toastId)
}