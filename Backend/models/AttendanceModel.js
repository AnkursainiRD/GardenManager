import mongoose from "mongoose";
const attendanceSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    currentDate:{
        type:Date,
        default:Date.now()
    }
})

export const Attendance=mongoose.model("Attendance",attendanceSchema)