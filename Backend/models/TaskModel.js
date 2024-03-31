import mongoose from "mongoose";
const taskSchema=new mongoose.Schema({
    Assignment:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startTime:{
        type:Date,
        required:true
    },
    deadline:{
        type: Date,
        required: true
    }
})
export const Task=mongoose.model("Task",taskSchema)