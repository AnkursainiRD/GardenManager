import mongoose from "mongoose";
const attendanceSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    arrivedTime:{
        type: Date,
        required:true
    },
    currentDate:{
        type:Date,
        default:Date.now()
    }
})

export const Attendance=mongoose.model("Attendance",attendanceSchema)