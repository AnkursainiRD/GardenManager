import jwt from "jsonwebtoken"

const auth=async(req,res,next)=>{
   try {
     const token=req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","")
     if(!token){
         return res.status(300).json({
             success:false,
             message:"Toekn Not found!"
         })
     }
     try {
         const decode=jwt.verify(token,process.env.JWT_SECRET)
         req.user=decode
     } catch (error) {
         console.log(error);
         return res.status(400).json({
             success:false,
             message:"Invalid Token!"
         })
     }
     next();
   } catch (error) {
     return res.status(500).json({
        success:false,
        message:"Server Error!"
     })
   }
}

const isAdmin=async(req,res,next)=>{
    try {
        if(req.user.accountType !=="admin")
        {
            return res.status(402).json({
                success:false,
                message:"Unauthorized Access"
            })
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })
    }
}

const isStaff=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="staff"){
            return res.status(402).json({
                success:false,
                message:"Unauthorized Access"
            })
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong!"
        })
    }
}

export {auth,isAdmin,isStaff}