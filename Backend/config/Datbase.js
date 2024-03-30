import mongoose from "mongoose";


const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DATABSE_URL)
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Error :",error);
        process.exit(1)
    }
}
export default dbConnect;