import dotenv from 'dotenv'
import dbConnect from './config/Datbase.js'
import app from './app.js'

dotenv.config({
    path:"./.env"
})
console.log(process.env.PORT);
dbConnect()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server Started...");
    })
})
.catch((error)=>{
    console.log("Database Connection error :",error);
})