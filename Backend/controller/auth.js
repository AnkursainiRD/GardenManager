import { User } from "../models/UserModel.js";
import { Task } from "../models/TaskModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

//Sign Up Controller
const signUp=async(req,res)=>{
    try {
        const {fullName,email,password,accountType}=req.body
        if([fullName,email,password,accountType].some((field)=>field?.trim()==="")){
            return res.status(401).json({
                success:false,
                message:"All fields are required!"
            })
        }
    
        const chekUser=await User.findOne({email:email})    
        if(chekUser){
            return res.status(402).json({
                success:false,
                message:"User already exists!"
            })
        }
    
        const hashPassword=await bcrypt.hash(password,10)
    
        const user=await User.create({fullName,email,password:hashPassword,accountType})    
        return res.status(200).json({
            success:true,
            message:"User Created",
            data:user
        })
    } catch (error) {
        console.log(error);
    }
}


//Login Controller
const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user=await User.findOne({email:email})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User does not exists!"
            })
        }
        console.log(user);
        if(await bcrypt.compare(password,user.password))
        {
            const payload={
                email:user.email,
                id:user._id,
                accountType:user.accountType
            }

            const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"3h"})
            user.token=token
            user.password=undefined

            const options={
                expires: new Date(Date.now()+ 3*24*60*60*100),
                httpOnly:true
            }

            res.cookie("token",token,options).json({
                success:true,
                message:"Logged In",
                user,
                token
            })
        }
        else{
            return res.status(300).json({
                success:false,
                message:"Invalid Password!"
            })
        }
    } catch (error) {
        console.log(error);
    }
}


export {login,signUp}