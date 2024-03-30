import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    task:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task"
        }
    ],
    accountType:{
        type:String,
        required:true,
        enum:["admin","staff"]
    },
    status:{
        type:Boolean,
        default:true
    },
    token:{
        type:String
    },
    attendance:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Attendance"
        }
    ]
})
export const User=mongoose.model("User",userSchema)