import { Task } from "../models/TaskModel.js";
import { User } from "../models/UserModel.js";
import mongoose from "mongoose";

const assignTask=async(req,res)=>{
    try {
        const {task,userId,startTime,deadline}=req.body
        if(!task || !userId){
            return res.status(401).json({
                success:false,
                message:"All fields are required!"
            })
        }
        const user=await User.findById(userId)
        if(!user.status){
            return res.status(401).json({
                success:false,
                message:"Staff is Offline!"
            })
        }
        const updatedTask=await Task.create({Assignment:task,startTime,deadline,user:userId})
        await User.findByIdAndUpdate({_id:userId},{$push:{task:updatedTask.id}},{new:true})
        return res.status(200).json({
            success:true,
            message:"Task Added Successfuly",
            data:updatedTask
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}


const getToadyTask=async(req,res)=>{
    try {
        const {id}=req.body
        const user=await User.findById(id).populate("task").exec()
        if(!user){
            return res.status(404).json({
                success:false,
                message:"Your don't have any task now"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Task fetched",
            data:user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

export {assignTask,getToadyTask}