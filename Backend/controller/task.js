import { Task } from "../models/TaskModel.js";
import { User } from "../models/UserModel.js";

const assignTask=async(req,res)=>{
    try {
        const {task,userId,deadline}=req.body
        if(!task || !userId){
            return res.status(401).json({
                success:false,
                message:"All fields are required!"
            })
        }

        const updatedTask=await Task.create({Assignment:task,deadline,user:userId})
        await User.findByIdAndUpdate({_id:userId},{$push:{task:updatedTask.id}},{new:true})
        return res.status(200).json({
            success:true,
            message:"Task Added Successfuly",
            data:updatedTask
        })
    } catch (error) {
        console.log(error);
    }
}


const getToadyTask=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

export {assignTask}