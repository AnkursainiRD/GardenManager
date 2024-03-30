import express from "express"
import { getAllStaff, login, signUp,setAttendance, getAllAttendance, changeStatus } from "../controller/auth.js"
import { auth, isAdmin, isStaff } from "../middleware/authMiddleware.js"
const router=express.Router()

router.post("/signUp",auth,isAdmin,signUp)
router.post("/login",login)

router.post("/setAttendance",auth,isStaff,setAttendance)

//admin area
router.get("/getAllStaff",auth,isAdmin,getAllStaff)
router.get("/getAllAttendance",auth,isAdmin,getAllAttendance)
router.post("/changeStatus",auth,isAdmin,changeStatus)

export default router;