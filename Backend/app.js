import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import taskRoute from "./routes/taskRoutes.js"
import authRoute from "./routes/userRoutes.js";
const app=express()

app.use(cors({
    origin:"http://localhost:4000",
    methods:["POST","DELETE","GET","PUT"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/user",authRoute)
app.use("/api/v1/task",taskRoute)

app.get("/",function(req,res){
    res.send("Working Properly")
})

export default app