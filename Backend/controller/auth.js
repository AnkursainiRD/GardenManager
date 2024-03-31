import { User } from "../models/UserModel.js";
import { Task } from "../models/TaskModel.js"
import {Attendance} from "../models/AttendanceModel.js"
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
        if(!user.status){
            console.log("working here");
            return res.status(400).json({
                success:false,
                message:"You are deactivated by Admin!"
            })
        }
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
        return res.status(500).json({
            success:false,
            message:"Server Error!"
        })
    }
}


const setAttendance=async(req,res)=>{
    try {
        const {userId,arrivedTime}=req.body
        const attendance=await Attendance.create({user:userId,arrivedTime:arrivedTime})
        await User.findByIdAndUpdate({_id:userId},{attendance:attendance})
        return res.status(200).json({
            success:true,
            message:"Attendance Marked Successfuly"
        })
    } catch (error) {
        console.log(error);
    }
}

// admin controler

const getAllStaff=async(req,res)=>{
    try {
        const allStaff=await User.find({accountType:"staff"}).populate("task").exec()
        if(!allStaff){
            return res.status(404).json({
                success:false,
                message:"No staff found!"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Data Fecthed",
            data:allStaff
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllAttendance=async(req,res)=>{
    try {
        const allAttendance=await Attendance.find({}).populate("user").exec()
        if(!allAttendance){
            return res.status(404).json({
                success:false,
                message:"No attendance preset right now!"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Attendance Fetched!",
            data:allAttendance
        })
    } catch (error) {
     console.log(error);   
    }
}


const changeStatus=async(req,res)=>{
    try {
        const {userId,statusValue}=req.body
        const user=await User.findById({_id:userId})
        user.status=statusValue;
        user.save()
        return res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        console.log(error);
    }
}

export {login,signUp,getAllStaff,setAttendance,getAllAttendance,changeStatus}